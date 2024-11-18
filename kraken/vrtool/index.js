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
