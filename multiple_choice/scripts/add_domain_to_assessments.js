#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'assessments', 'javascript');

function walk (dir) {
  const res = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) res.push(...walk(p));
    else if (stat.isFile() && p.endsWith('.js')) res.push(p);
  }
  return res;
}

const files = walk(base);
let updated = 0;
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  if (text.includes('"domain": "javascript"')) continue;
  // find difficulty property and insert domain after it
  const re = /(\"difficulty\"\s*:\s*\"(?:easy|medium)\"\s*,\s*\n)/;
  if (re.test(text)) {
    text = text.replace(re, (m, g1) => g1 + '    "domain": "javascript",\n');
    fs.writeFileSync(file, text, 'utf8');
    updated++;
    console.log('Updated', file);
  } else {
    console.warn('Could not find difficulty line in', file);
  }
}
console.log('Done. Files updated:', updated);
