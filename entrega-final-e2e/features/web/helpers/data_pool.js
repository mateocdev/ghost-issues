const fs = require("fs");
const path = require("path");

function getAPrioriDataPool(dataPoolName) {
  // se cargan los posts desde un data pool local
  console.log("console.log(path.basename(__filename)); ", path.basename(__filename));

  const file = path.join("./data", dataPoolName + ".json");
  const data = fs.readFileSync(file, "utf-8");
  return JSON.parse(data);
};

function getAPrioriRandomItemFromDataPool (dataPoolName) {
    const dataPool = getAPrioriDataPool(dataPoolName);
    const randomIndex = Math.floor(Math.random() * (dataPool.length - 1));
    return dataPool[randomIndex];
};

module.exports = { getAPrioriRandomItemFromDataPool };