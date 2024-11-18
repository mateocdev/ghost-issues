const fs = require("fs");
const path = require("path");

function generateBackstopConfig(outputDir) {
  const rcDir = path.join("./rc", outputDir);
  //const baseDir = path.join("./base", outputDir);
  const baseStepsScreenshotsUrl = 'http://localhost:8500';
  const rcStepsScreenshotsUrl = 'http://localhost:8501';

  //   const scenarios = fs.readdirSync(rcDir).map((file) => {
  //     const rcPath = `file:${path.join(rcDir, file)}`;
  //     const basePath = `file:${path.join(baseDir, file)}`;
  //     return {
  //       label: file,
  //       url: rcPath,
  //       referenceUrl: basePath,
  //       selectors: ["document"],
  //       misMatchThreshold: 0.1
  //     };
  //   });
  // scenarios dir has the following structure:
  // rc -> screenshots -> scenario_name -> 0_document.png
  // base -> screenshots -> scenario_name -> 0_document.png
  // So we need to iterate over the rcDir directory and get the scenario folder names and then iterate over each scenario folder to get the images
  const scenarios = fs.readdirSync(rcDir).map((scenarioFolder) => {
    // iterate over each scenario folder
    const rcScenarioPath = path.join(rcDir, scenarioFolder);
    // const baseScenarioPath = path.join(baseDir, scenarioFolder);
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
