import fs from "fs-extra";

function browser(b) {
  return `
    <div class="browser" id="test0">
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">rc</span>
          <img class="img2" src="./screenshots/membersGhost/1.png" alt="Reference Image">
        </div>
        <div class="imgcontainer">
          <span class="imgname">base</span>
          <img class="img2" src="./screenshots/membersGhost/1base.png" alt="Test Image">
        </div>
      </div>
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">Diff</span>
          <img class="imgfull" src="./screenshots/membersGhost/diff1.png" alt="Diff Image">
        </div>
      </div>
<div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">rc</span>
          <img class="img2" src="./screenshots/membersGhost/2.png" alt="Reference Image">
        </div>
        <div class="imgcontainer">
          <span class="imgname">base</span>
          <img class="img2" src="./screenshots/membersGhost/2base.png" alt="Test Image">
        </div>
      </div>
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">Diff</span>
          <img class="imgfull" src="./screenshots/membersGhost/diff2.png" alt="Diff Image">
        </div>
      </div>
<div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">rc</span>
          <img class="img2" src="./screenshots/membersGhost/3.png" alt="Reference Image">
        </div>
        <div class="imgcontainer">
          <span class="imgname">base</span>
          <img class="img2" src="./screenshots/membersGhost/3base.png" alt="Test Image">
        </div>
      </div>
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">Diff</span>
          <img class="imgfull" src="./screenshots/membersGhost/diff3.png" alt="Diff Image">
        </div>
      </div>
    </div>`;
}

function createReport(browsers, url) {
  return `
  <html>
      <head>
          <title>VRT Report</title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Uniandes VRT Report
               <a href="${url}">${url}</a>
          </h1>
          <div id="visualizer">
              ${browser()}
          </div>
      </body>
  </html>`;
}

// Define browsers and url
const browsers = ["chromium", "chrome", "firefox"];
const url = "https://ghost.com";

// Create report
const reportHtml = createReport(browsers, url);

// Write report to file
fs.ensureDirSync("./results"); // Ensure the results directory exists
fs.writeFileSync("../cypress/report.html", reportHtml);

// Copy CSS file
fs.copyFileSync("./index.css", "../cypress/index.css");
