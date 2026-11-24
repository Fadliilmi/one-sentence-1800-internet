// One Sentence for a Traveler from 1800 — make.fun entry.
// A single sentence (1-200 characters) that explains the modern internet
// to someone who has just stepped out of the year 1800, using only
// pictures that year already knew: houses, a road, a library, a letter
// dropped in a box, ink still wet. No word coined after their time.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Think of every house on earth joined by one road to a single library, where a letter dropped in a box is read across the world before the ink is dry.";

// The gate only accepts 1-200 characters on one line, and not only white
// space. Refuse to write anything that would fail it, so a bad edit fails
// loudly here instead of silently shipping an invalid entry.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${length} characters; must be 1-200 on one line.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
