#!/usr/bin/env node
/* eslint-disable no-console */
require('dotenv/config');
const fs = require('fs');
const path = require('path');
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');

const ROOT = path.resolve(__dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'apps/server/static/assets');
const UPLOAD_DIRS = ['source', 'preview'];

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.webp': return 'image/webp';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.png': return 'image/png';
    case '.gif': return 'image/gif';
    case '.svg': return 'image/svg+xml';
    case '.avif': return 'image/avif';
    case '.mp4': return 'video/mp4';
    case '.mov': return 'video/quicktime';
    case '.webm': return 'video/webm';
    default: return 'application/octet-stream';
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, {withFileTypes: true});
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

async function runWithConcurrency(items, concurrency, worker) {
  const queue = [...items];
  const workers = Array.from({length: concurrency}, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) return;
      await worker(item);
    }
  });
  await Promise.all(workers);
}

async function main() {
  const bucket = getEnv('R2_BUCKET');
  const endpoint = getEnv('R2_ENDPOINT');
  const region = process.env.R2_REGION || 'auto';
  const accessKeyId = getEnv('R2_ACCESS_KEY_ID');
  const secretAccessKey = getEnv('R2_SECRET_ACCESS_KEY');
  const dryRun = process.env.DRY_RUN === '1';

  const client = new S3Client({
    region,
    endpoint,
    forcePathStyle: true,
    credentials: {accessKeyId, secretAccessKey},
  });

  let total = 0;
  const concurrency = Number(process.env.UPLOAD_CONCURRENCY || '30');
  for (const dirName of UPLOAD_DIRS) {
    const dirPath = path.join(ASSETS_DIR, dirName);
    if (!fs.existsSync(dirPath)) {
      console.warn(`Skipping missing dir: ${dirPath}`);
      continue;
    }
    const files = walk(dirPath);
    await runWithConcurrency(files, concurrency, async (filePath) => {
      const rel = path.relative(ASSETS_DIR, filePath).replace(/\\/g, '/');
      const key = rel;
      const body = fs.readFileSync(filePath);
      const contentType = contentTypeFor(filePath);

      if (dryRun) {
        console.log(`[dry-run] ${key}`);
        total += 1;
        return;
      }

      await client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
        CacheControl: 'public, max-age=31536000, immutable',
      }));
      total += 1;
      if (total % 200 === 0) {
        console.log(`Uploaded ${total} files...`);
      }
    });
  }

  console.log(`Done. Uploaded ${total} files to R2 bucket "${bucket}".`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
