// One Sentence for a Traveler from 1800 — make.fun entry.
// Writes a single sentence (<=200 characters) explaining the modern
// internet to a time traveler from 1800, using only words and pictures
// a person of that year could already hold in their head: a road, a
// door, a library, a letter. No post-1800 words, no list of features.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Picture a road that runs from your own door to doors all over the earth and into one great library, where a letter you send is read the same breath it leaves your hand.";

// The gate only accepts 1-200 characters on a single line: refuse to
// write anything that would fail it, so a bad edit fails loudly here.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Entry is ${[...ENTRY].length} characters; must be 1-200 on one line.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
