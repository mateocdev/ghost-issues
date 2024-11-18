const backstop = require("backstopjs");
const { generateBackstopConfig } = require("./generateBackstopConfig");

(async () => {
  const outputDir = "screenshots";
  const config = generateBackstopConfig(outputDir);

  try {
    // Generar las referencias visuales de las pruebas usando la versión base
    await backstop("reference", { config });
    // Ejecutar las pruebas visuales
    console.log("Ejecutando pruebas de regresión visual...");
    await backstop("test", { config });
    console.log("Pruebas completadas. Generando reporte...");
  } catch (error) {
    console.error("Error durante las pruebas de regresión visual:", error);
  }
})();
