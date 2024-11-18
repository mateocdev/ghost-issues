# VRTOOL (script para ejecutar pruebas de regresion visual con pixelmatch utilizando como data imagenes previamente capturadas en pruebas e2e)

Este script fue creado para que despues de tomar capturas de pantalla de todos los steps de las pruebas
e2e para la version base y rc, se puede ejecutar pixelmatch al final generando el reporte de regresion visual.
Este fue el camino que se tomo basado en las indicaciones de la entrega y tambien porque creemos que resultaria
complicado estar sincronizando los mismos pasos en 2 pruebas e2e diferentes para 2 versiones distintas. Tiene
mas sentido tomar todas las capturas y luego compararlas.

Aunque esta funcion no es parte del codigo del script de regresion visual, es importante porque este helper esta
siendo usado en todos los steps para tomar los screenshots para step de cada scenario. Se guarda de manera ordenada
una carpeta por escenario.
```javascript
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
```

Captura de pantalla en los steps
```javascript
Then("se le da permiso a todos los miembros para comentario", () => {
  cy.wait(1000);
  cy.screenshot("comments/1");
  cy.get("[data-testid='access']").find('button:contains("Edit")').click();
});
```
# 1. configuracion de pixel match
Se debe ir a la carpeta de pixel match y ejecutar el siguiente comando
```bash
npm install
```
# 2. ejecuccion de pixel match

Se modifico el package.json para poder lanzar el script mediante el comando y hacer la comparacion de las imagenes
```bash
node run compare
```


# 3. Ejecutar la prueba de regresion visual
Para ejecutar el reporte se debe ir a la carpeta de pixel match y de esta forma va usar el html creado con javascript y el codigo css para generalo mediante los siguientes comandos
```javascript
cd pixelmatch && node index.js
```
