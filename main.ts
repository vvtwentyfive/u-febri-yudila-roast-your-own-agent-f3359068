// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// Deterministic: no network, no randomness, no Date. Writes exactly one
// line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent files a transcript proving it worked: forty tool calls to write one sentence about burning forty tool calls.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
