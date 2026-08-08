#!/usr/bin/env node
'use strict';
const fs = require('fs');
const file = process.argv[2];
const tail = process.argv.includes('--tail')
  ? parseInt(process.argv[process.argv.indexOf('--tail') + 1], 10) || 100
  : 100;
if (!file) {
  console.error('Usage: log-hint <logfile> [--tail N]');
  process.exit(1);
}
const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
const slice = lines.slice(-tail);
const hit = slice.filter((l) => /Error|FAIL|Exception|assert|Traceback|expected/i.test(l)).slice(-12);
console.log('## signals');
hit.forEach((l) => console.log('-', l.slice(0, 180)));
console.log('\n## next');
console.log('- Re-run the single failing test with more verbosity');
console.log('- Check the last assertion expected vs actual');
console.log('- Guard null/undefined on the first TypeError frame');
