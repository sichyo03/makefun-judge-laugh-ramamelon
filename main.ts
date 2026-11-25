// Make the AI Judge Laugh — the entry program (Node 22, standard library only).
// It writes one line about office life to /output/entry.txt. Outside the
// grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entry: a single line, under 200 characters, meant to be read aloud in
// one breath. The em-dash keeps the turn — the box is the shredder — landing
// mid-breath, and the closing clause is the button on the joke.
const line =
  'Our office has a suggestion box — it\'s the shredder, but the intention is there.';

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, line, 'utf8');

console.log(`wrote ${target} (${line.length} characters)`);
