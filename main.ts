import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const launch = JSON.parse(readFileSync(join(dir, "LAUNCH.json"), "utf8"));
if (!launch.mint || !launch.create_signature) {
  throw new Error("LAUNCH.json is missing mint or create_signature");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "LAUNCH.json"), JSON.stringify(launch));
