import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// Accept --mode=production|development, fallback to NODE_ENV, fallback to "production"
const modeArg = process.argv.find((a) => a.startsWith("--mode="));
const mode = modeArg ? modeArg.split("=")[1] : (process.env.NODE_ENV || "production");

const envFile = path.join(rootDir, `.env.${mode}`);
if (!fs.existsSync(envFile)) {
  console.error(`Error: env file not found → ${envFile}`);
  process.exit(1);
}

dotenv.config({ path: envFile });

const distDir = path.join(rootDir, "dist");
if (!fs.existsSync(distDir)) {
  console.error("Error: dist/ folder not found. Run vite build first.");
  process.exit(1);
}

const replacements = {
  __DB_HOST__:      process.env.DB_HOST,
  __DB_NAME__:      process.env.DB_NAME,
  __DB_USERNAME__:  process.env.DB_USERNAME,
  __DB_PASSWORD__:  process.env.DB_PASSWORD,
  __API_KEY_EDU__:  process.env.API_KEY_EDU,
  __API_KEY_EXP__:  process.env.API_KEY_EXP,
  __API_KEY_GALL__: process.env.API_KEY_GALL,
};

// Validate all placeholders have values
const missing = Object.entries(replacements)
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missing.length) {
  console.error(`Error: missing env values for: ${missing.join(", ")}`);
  process.exit(1);
}

// Recursively process all PHP files in dist/
function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith(".php")) {
      let content = fs.readFileSync(fullPath, "utf8");
      let changed = false;
      for (const [placeholder, value] of Object.entries(replacements)) {
        if (content.includes(placeholder)) {
          content = content.replaceAll(placeholder, value);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, "utf8");
        console.log(`  ✓ ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}

console.log(`\nPHP env replacement [mode: ${mode}]`);
processDir(distDir);
console.log("Done.\n");