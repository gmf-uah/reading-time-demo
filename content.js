console.log(1);
import { readdir, writeFile } from "fs/promises";
console.log(2);
import path from "path";
console.log(3);
import { fileURLToPath, pathToFileURL } from "url";
console.log(4);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(5);
const scriptsDir = path.join(__dirname, "scripts");
console.log(6);

const filenames = await readdir(scriptsDir);
console.log(7);

for (const filename of filenames) {
  console.log(filename, typeof(filename));
  const modulePath = pathToFileURL(path.join(scriptsDir, file)).href;
  // console.log(modulePath);
  // const { matches } = await import(modulePath);
  continue;
  if (!matches || !Array.isArray(matches)) continue;

  siteScripts.push({
    matches,
    js: [`scripts/${file}`],
    run_at: "document_end"
  });

  excludePatterns.push(...matches);
}