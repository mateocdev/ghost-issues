const fs = require("fs");
const path = require("path");

async function captureScreenshot(browser, scenario, stepName) {
  const folderPath = path.join('./screenshots', scenario);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });
  const filePath = path.join(folderPath, `${stepName}.png`);
  await browser.saveScreenshot(filePath);
}

module.exports = { captureScreenshot };
