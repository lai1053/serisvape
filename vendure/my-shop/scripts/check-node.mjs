const [major, minor] = process.versions.node.split('.').map(Number);

// Next.js 16 requires Node >= 20.9.0
const ok = major > 20 || (major === 20 && minor >= 9);

if (!ok) {
  console.error(
    `Node.js ${process.versions.node} detected. This repo requires Node >= 20.9.0 (Next.js 16).\n` +
      `Fix: install Node 20.9+ (e.g. via nvm/volta) and re-run \`npm run dev\`.`
  );
  process.exit(1);
}
