import { __filename } from "./constants.mjs";
import fs from "fs";
import path from "path";

async function saveSongsToReadme(data) {
  const readmePath = path.resolve(path.dirname(__filename), "..", "README.md");

  try {
    fs.writeFileSync(readmePath, data, {
      encoding: "utf-8",
    });
  } catch (error) {
    console.error('Error while saving songs to README.md', { error });
    exit(1);
  }
}

export { saveSongsToReadme };
