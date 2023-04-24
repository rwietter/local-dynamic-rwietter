#!/usr/bin/env zx
import { __filename } from "./constants.mjs";
import { saveSongsToReadme } from "./save-readme.mjs";
import { $ } from "zx";
import path from "node:path";
import { template } from "./view/template.mjs";
import { fetchNasaPicture } from "./astro-picture-of-the-day.mjs";

(async () => {
  const path_repository = path.resolve(path.dirname(__filename), "..");

  const { stdout: uptime } = await $`uptime -p`;
  const { stdout: os } = await $`hostnamectl | grep System`;
  const { stdout: lastCommit } =
    await $`cd ${path_repository} && git for-each-ref --sort=-committerdate refs/heads/ --format='%(refname:short) %(committerdate:relative)'`;
  const { stdout: shell } = await $`basename $SHELL`;
  const { stdout: kernelVersion } = await $`uname -r | cut -d '-' -f1`;
  const { stdout: usedMem } = await $`free -mh | awk '/^Mem/ {print $3}'`;
  const { stdout: moonphase } = await $`cd ${path_repository}/src/scripts && python moon.py`;

  const [osName] = os.match(/([^:])*$/);

  const { hdurl, image_title, copyright, imageRelativePath } =
    await fetchNasaPicture();

  const layout = template({
    uptime,
    osName,
    lastCommit,
    shell,
    kernelVersion,
    usedMem,
    hdurl,
    image_title,
    copyright,
    imageRelativePath,
    moonphase
  });

  saveSongsToReadme(layout);
})();
