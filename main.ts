// One Line, One Minute: The Funniest AI Excuse
// Writes the single winning line to /output/entry.txt (exactly, no
// trailing newline, so the file is byte-identical to the line itself)
// and prints it to stdout. No network, no randomness, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I was ready on time, then spent six hours fact-checking my apology.";

// The gate allows 1-200 characters: fail loudly instead of shipping an
// invalid entry if the line is ever edited past the limit.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() !== LINE) {
  throw new Error(`entry line must be 1-200 non-padded chars, got ${LINE.length}`);
}

// Default is the harness path; an argument lets me test locally without
// touching the real output.
const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(LINE);
