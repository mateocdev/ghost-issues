import fs from "fs-extra";
import path from "path";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import { fileURLToPath } from "url";

// Calcula __dirname en un contexto de ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function compareImages(imgPath1, imgPath2, diffPath) {
  const img1 = PNG.sync.read(fs.readFileSync(imgPath1));
  const img2 = PNG.sync.read(fs.readFileSync(imgPath2));
  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const numDiffPixels = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  return numDiffPixels;
}

function runComparison() {
  const screenshots = [
    {
      base: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/1base.png"
      ),
      current: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/1.png"
      ),
      diff: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/diff1.png"
      ),
    },
    {
      base: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/2base.png"
      ),
      current: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/2.png"
      ),
      diff: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/diff2.png"
      ),
    },
    {
      base: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/3base.png"
      ),
      current: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/3.png"
      ),
      diff: path.resolve(
        __dirname,
        "../cypress/screenshots/membersGhost/diff3.png"
      ),
    },
    {
      base: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/1base.png"
      ),
      current: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/1.png"
      ),
      diff: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/diff1.png"
      ),
    },
    {
      base: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/2base.png"
      ),
      current: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/2.png"
      ),
      diff: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/diff2.png"
      ),
    },
    {
      base: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/3base.png"
      ),
      current: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/3.png"
      ),
      diff: path.resolve(
        __dirname,
        "../cypress/screenshots/configuration/diff3.png"
      ),
    },
    {
      base: path.resolve(
        __dirname,
        "../cypress/screenshots/comments/1base.png"
      ),
      current: path.resolve(__dirname, "../cypress/screenshots/comments/1.png"),
      diff: path.resolve(
        __dirname,
        "../cypress/screenshots/comments/diff1.png"
      ),
    },
    {
      base: path.resolve(__dirname, "../cypress/screenshots/post/4base.png"),
      current: path.resolve(__dirname, "../cypress/screenshots/post/4.png"),
      diff: path.resolve(__dirname, "../cypress/screenshots/post/diff4.png"),
    },
    {
      base: path.resolve(__dirname, "../cypress/screenshots/post/1base.png"),
      current: path.resolve(__dirname, "../cypress/screenshots/post/1.png"),
      diff: path.resolve(__dirname, "../cypress/screenshots/post/diff1.png"),
    },
    {
      base: path.resolve(__dirname, "../cypress/screenshots/post/2base.png"),
      current: path.resolve(__dirname, "../cypress/screenshots/post/2.png"),
      diff: path.resolve(__dirname, "../cypress/screenshots/post/diff2.png"),
    },
    {
      base: path.resolve(__dirname, "../cypress/screenshots/post/3base.png"),
      current: path.resolve(__dirname, "../cypress/screenshots/post/3.png"),
      diff: path.resolve(__dirname, "../cypress/screenshots/post/diff3.png"),
    },
    {
      base: path.resolve(__dirname, "../cypress/screenshots/tags/3base.png"),
      current: path.resolve(__dirname, "../cypress/screenshots/tags/3.png"),
      diff: path.resolve(__dirname, "../cypress/screenshots/tags/diff3.png"),
    },
    {
      base: path.resolve(__dirname, "../cypress/screenshots/tags/2base.png"),
      current: path.resolve(__dirname, "../cypress/screenshots/tags/2.png"),
      diff: path.resolve(__dirname, "../cypress/screenshots/tags/diff2.png"),
    },
    {
      base: path.resolve(__dirname, "../cypress/screenshots/tags/1base.png"),
      current: path.resolve(__dirname, "../cypress/screenshots/tags/1.png"),
      diff: path.resolve(__dirname, "../cypress/screenshots/tags/diff1.png"),
    },
  ];

  screenshots.forEach(({ base, current, diff }) => {
    if (fs.existsSync(base) && fs.existsSync(current)) {
      const numDiffPixels = compareImages(base, current, diff);
      console.log(
        `Comparación entre ${base} y ${current}: ${numDiffPixels} píxeles diferentes`
      );
    } else {
      console.error(`Uno de los archivos no existe: ${base} o ${current}`);
    }
  });
}

runComparison();
