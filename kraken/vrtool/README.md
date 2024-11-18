# VRTOOL (script para ejecutar pruebas de regresion visual con BackstopJS utilizando como data imagenes previamente capturadas en pruebas e2e)

Este script fue creado para que despues de tomar capturas de pantalla de todos los steps de las pruebas
e2e para la version base y rc, se puede ejecutar BackstopJS al final generando el reporte de regresion visual.
Este fue el camino que se tomo basado en las indicaciones de la entrega y tambien porque creemos que resultaria
complicado estar sincronizando los mismos pasos en 2 pruebas e2e diferentes para 2 versiones distintas. Tiene
mas sentido tomar todas las capturas y luego compararlas.

Aunque esta funcion no es parte del codigo del script de regresion visual, es importante porque este helper esta
siendo usado en todos los steps para tomar los screenshots para step de cada scenario. Se guarda de manera ordenada
una carpeta por escenario.
```javascript
    const fs = require("fs");
    const path = require("path");

    async function captureScreenshot(browser, scenario, stepName) {
        const folderPath = path.join('./screenshots', scenario);
        if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
        const filePath = path.join(folderPath, `${stepName}.png`);
        await browser.saveScreenshot(filePath);
    }

    module.exports = { captureScreenshot };
```

Captura de pantalla en los steps
```javascript
    When('I click edit Title & description', async function() {
        const element = await this.driver.$('button.gh-btn:nth-child(2)');
        const result = await element.click();
        // wait for 2 seconds for the settings menu to load
        await this.driver.pause(2000);
        await captureScreenshot(this.driver, this.scenarioNameSlug, 'click-edit-title-description');
        return result;
    });
```

# 1. Configuración de BackstopJS

Hemos incluido un archivo base para BackstopJS que se personalizará para cada escenario cuando el script se ejecute. Este archivo incluye un espacio para los escenarios que se agregarán dinámicamente. Se puede configurar el 
misMatchThreshold y se aplicara a todos los escenarios inyectados dinamicamente.

Archivo backstop.config.js
```javascript
    module.exports = {
        id: "visual_regression_tests",
        viewports: [
            { label: "desktop", width: 1920, height: 1080 }
        ],
        scenarios: [], // Lo llenaremos dinámicamente.
        paths: {
            bitmaps_reference: "backstop_data/bitmaps_reference",
            bitmaps_test: "backstop_data/bitmaps_test",
            html_report: "backstop_data/html_report",
            ci_report: "backstop_data/ci_report"
        },
        misMatchThreshold: 4.5,
        engine: "puppeteer",
        report: ["browser", "CI"],
        debug: false
  };
```

# 2. Crear escenarios dinamicamente basado en las capturas de los steps
Al finalizar la ejecucion de las pruebas e2e en la version base y rc, el Script cuenta con una funcion helper que lee el directorio:
- base/screenshots
Itera los directorios dentro de esa carpeta para saber cuales son los escenarios. Cada folder dentro de screenshots tiene el identificador del escenario. Dentro se encuentra una imagen por cada step del escenario. Lo mismo se repite para todos los escenarios.
Luego de leer los folder de los escenarios, se lee las imagenes una por una, con cada imagen creamos dinámicamente los escenarios para BackstopJS, y estos son inyectados dinamicamente en el archivo de configuración y proporcionados
programaticamente a BackstopJS al invocar a su comando reference y test (para que ejecute las pruebas de regresion visuales).

vrtool/generateBackstopConfig.js
```javascript
const fs = require("fs");
const path = require("path");

function generateBackstopConfig(outputDir) {
  const rcDir = path.join("./rc", outputDir); // rc/screenshots
  const baseStepsScreenshotsUrl = 'http://localhost:8500';
  const rcStepsScreenshotsUrl = 'http://localhost:8501';

  // version base is the one that is going to be compared against
  const scenarios = fs.readdirSync(rcDir).map((scenarioFolder) => {
    // iterate over each scenario folder
    const rcScenarioPath = path.join(rcDir, scenarioFolder);
    // iterate over each image in the scenario folder
    // each image is a step in the scenario and a scenario in backstop
    // the reference image is the one from the base version
    // the test image is the one from the rc version
    // finally return the scenario object for backstop
    return fs.readdirSync(rcScenarioPath).map((image) => {
      const rcPath = `${rcStepsScreenshotsUrl}/${scenarioFolder}/${image}`;
      const basePath = `${baseStepsScreenshotsUrl}/${scenarioFolder}/${image}`;
      return {
        label: image,
        url: rcPath,
        referenceUrl: basePath,
        selectors: ["document"],
      };
    });
  });

  console.log("console.log(scenarios); ", scenarios.flat(1));
  const baseConfig = require("../backstop.config.js");
  baseConfig.scenarios = scenarios.flat(1);
  return baseConfig;
}

module.exports = { generateBackstopConfig };
```

# 3. Ejecutar la prueba de regresion visual
Como BackstopJS solo es capaz de ejecutar la prueba si se le proporciona el escenario mediante una URL, tanto lo que va probar como la referencia. Por ese motivo usando un local server las imagenes capturadas se sirven mediante 2 local servers solo durante la ejecucion de la prueba de regresion visual.

Script que ejecuta la prueba de regresion visual usando BackstopJS
vrtool/index.js
```javascript
const backstop = require("backstopjs");
const { generateBackstopConfig } = require("./generateBackstopConfig");

(async () => {
  const outputDir = "screenshots";
  const config = generateBackstopConfig(outputDir);

  try {
    // generate visual regression reference images
    await backstop("reference", { config });
    // run visual regression tests
    console.log("Running visual regression tests...");
    await backstop("test", { config });
    console.log("Visual regression tests completed successfully.");
  } catch (error) {
    console.error("Error running the regression tests: ", error);
  }
})();
```
