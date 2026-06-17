const chunks = [];
process.stdin.on('data', chunk => chunks.push(chunk));
process.stdin.on('end', () => {
  try {
    const input = JSON.parse(Buffer.concat(chunks).toString());
    const cmd = (input.command || '').toLowerCase();

    const dangerous = [
      'rm -rf',
      'git reset --hard',
      'git push --force',
      'git push -f',
      'git push origin main -f',
      'git push origin main --force',
      'drop table',
      'truncate table',
      'format c:',
      'del /f /s /q',
      'remove-item -recurse -force',
      'git clean -f',
      'git branch -d',
      'git branch -D',
    ];

    const match = dangerous.find(d => cmd.includes(d.toLowerCase()));
    if (match) {
      process.stderr.write(
        `\n⚠️  DANGEROUS OPERATION DETECTED\n` +
        `Pattern matched: "${match}"\n` +
        `Command: ${input.command}\n\n` +
        `This operation is hard to reverse. Review carefully.\n` +
        `Claude will not proceed. Approve it manually if you're sure.\n\n`
      );
      process.exit(1);
    }

    process.exit(0);
  } catch {
    process.exit(0);
  }
});
