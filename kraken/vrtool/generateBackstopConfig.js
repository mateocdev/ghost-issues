const fs = require("fs");
const path = require("path");

function generateBackstopConfig(outputDir) {
  const rcDir = path.join("./rc", outputDir);
  const baseStepsScreenshotsUrl = 'http://localhost:8500';
  const rcStepsScreenshotsUrl = 'http://localhost:8501';

  // version base is the one that is going to be compared against
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
