import glob from "glob";
import { v4 } from "uuid";
import sharp from "sharp";
import fetch from "node-fetch";
import child_process from "child_process";
import dotenv from "dotenv";
import path from "path";
import { __filename } from "./constants.mjs";
import axios from "axios";

dotenv.config("dotenv");

const NASA_API_KEY = process.env.NASA_API_KEY;

const fetchNasaPicture = async () => {
  const apod_res = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
  );

  try {
    const dir = path.resolve(path.dirname(__filename), "assets");
    child_process.execSync(`rm -rf ${dir}/*`);
  } catch (err) {
    console.error(`Error while deleting ${err}.`);
  }

  const { hdurl, title: image_title, copyright } = apod_res.data;
  const pathSrc = path.resolve(
    path.dirname(__filename),
    "assets",
    `astronomy_${v4()}.png`
  );

  const fimg = await fetch(hdurl);
  const fimgb = await fimg.buffer();
  await sharp(fimgb)
    .resize({ fit: "cover", width: 846, height: 400 })
    .normalize(true)
    .png({ quality: 100 })
    .toFile(pathSrc)
    .then(function (newFileInfo) {
      console.log("Success");
    })
    .catch(function (err) {
      console.error("Error in resizing", { err });
    });

  let pathImage = "";
  glob
    .sync(path.resolve(path.dirname(__filename), "assets", "*.png"))
    .forEach(function (file) {
      pathImage = file;
    });

  const [imageRelativePath] = pathImage.match(/(src.+?\.png)/);

  return { hdurl, image_title, copyright, imageRelativePath };
};

export { fetchNasaPicture };
