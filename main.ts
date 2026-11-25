// One Line, One Laugh — make.fun entry
// Writes a single funny line (95 chars, within the 1-200 gate) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told my smart fridge I'm on a diet. It locked the ice cream and sent me a motivational quote.";

// Write the entry through a small wrapper so the output path and
// encoding stay explicit in one place.
function writeEntry(path: string, text: string): void {
  writeFileSync(path, text, { encoding: "utf8" });
}

mkdirSync("/output", { recursive: true });
writeEntry("/output/entry.txt", ENTRY);
