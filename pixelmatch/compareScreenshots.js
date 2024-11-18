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
