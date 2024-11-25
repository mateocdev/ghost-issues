const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function getPseudoDynamicRandomDataPool(schema, count) {
  if (!count) {
    count = 10;
  }
  const response = await axios.post("https://api.mockaroo.com/api/generate.json", {}, {
    params: {
      count: count,
      schema: schema,
      key: "d46da290"  // personal account
    }
  });
  return response.data;
};

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

async function getPseudoDynamicRandomItemFromDataPool (schema, count) {
  const dataPool = await getPseudoDynamicRandomDataPool(schema, count);
  const randomIndex = Math.floor(Math.random() * (dataPool.length - 1));
  return dataPool[randomIndex];
}

module.exports = { getAPrioriRandomItemFromDataPool, getPseudoDynamicRandomItemFromDataPool };