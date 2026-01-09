#!/usr/bin/env node
/* eslint-disable no-console */
require('dotenv/config');
const {S3Client, ListObjectsV2Command, DeleteObjectsCommand} = require('@aws-sdk/client-s3');

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

async function listAndDelete(client, bucket, prefix) {
  let token;
  let deleted = 0;

  do {
    const list = await client.send(new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
      ContinuationToken: token,
    }));

    const objects = (list.Contents || []).map((obj) => ({Key: obj.Key}));
    if (objects.length > 0) {
      await client.send(new DeleteObjectsCommand({
        Bucket: bucket,
        Delete: {Objects: objects, Quiet: true},
      }));
      deleted += objects.length;
      console.log(`Deleted ${deleted} objects so far...`);
    }

    token = list.IsTruncated ? list.NextContinuationToken : undefined;
  } while (token);

  return deleted;
}

async function main() {
  const bucket = getEnv('R2_BUCKET');
  const endpoint = getEnv('R2_ENDPOINT');
  const region = process.env.R2_REGION || 'auto';
  const accessKeyId = getEnv('R2_ACCESS_KEY_ID');
  const secretAccessKey = getEnv('R2_SECRET_ACCESS_KEY');

  const client = new S3Client({
    region,
    endpoint,
    forcePathStyle: true,
    credentials: {accessKeyId, secretAccessKey},
  });

  const total = await listAndDelete(client, bucket, 'assets/');
  console.log(`Done. Deleted ${total} objects under assets/.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
