// One-Liner Marathon entry: writes a single original one-line joke to
// /output/entry.txt. Fully deterministic — fixed text, no randomness,
// no clock, no network, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const JOKE =
  "I bought a self-help book, but it ghosted me halfway through chapter three.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
