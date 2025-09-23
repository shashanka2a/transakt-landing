import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "src");

/**
 * Remove version suffix like "package@1.2.3" in import/export specifiers.
 */
function stripVersionsInFile(filePath) {
  const original = readFileSync(filePath, "utf8");
  const replaced = original.replace(/(from\s+["'])([^"']+?)@[0-9][^"']*(["'])/g, "$1$2$3").replace(/(import\s+[^"']+\s+from\s+["'])([^"']+?)@[0-9][^"']*(["'])/g, "$1$2$3").replace(/(export\s+\*\s+from\s+["'])([^"']+?)@[0-9][^"']*(["'])/g, "$1$2$3");
  if (original !== replaced) {
    writeFileSync(filePath, replaced, "utf8");
    return true;
  }
  return false;
}

function walk(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full);
    } else if (/(\.tsx?|\.jsx?)$/.test(entry)) {
      stripVersionsInFile(full);
    }
  }
}

walk(root);
console.log("Stripped version suffixes in imports under:", root);


