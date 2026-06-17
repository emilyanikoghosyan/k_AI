const { execSync } = require('child_process');
const path = require('path');

const repoDir = path.resolve(__dirname, '../../');

function run(cmd) {
  return execSync(cmd, { cwd: repoDir, encoding: 'utf8' }).trim();
}

try {
  const status = run('git status --porcelain');
  if (!status) process.exit(0); // nothing to commit

  const timestamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
  run('git add -A');
  run(`git commit -m "auto: session update ${timestamp}"`);

  try {
    run('git push');
    process.stderr.write(`k_AI synced to GitHub\n`);
  } catch {
    // No remote or auth issue — fail silently, don't block the session
  }
} catch {
  // Git not available or no changes — do nothing
}

process.exit(0);
