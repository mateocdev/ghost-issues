// script/generateData.js

const fs = require("fs");
const { faker } = require("@faker-js/faker");

function generateTestData() {
  const data = [];

  for (let i = 0; i < 2; i++) {
    data.push({
      newMember: [
        {
          name: faker.internet.displayName(),
          email: faker.internet.email(),
          note: faker.lorem.sentence(),
          errorNote: faker.lorem.paragraphs(3),
        },
      ],
      tags: [
        {
          nameTag: faker.book.title(),
          descriptionTag: faker.book.genre(),
          newNameTag: faker.airline.flightNumber(),
          newDescriptionTag: faker.lorem.sentence(),
        },
      ],
      news: [
        {
          name: faker.internet.emoji(),
          description: faker.music.songName(),
        },
      ],
      settings: [
        {
          title: faker.music.songName(),
          description: faker.music.genre(),
          emailStaff: faker.internet.email(),
        },
      ],
    });
  }

  return data;
}

const jsonData = generateTestData();

// Guardar los datos en un archivo JSON
fs.writeFileSync(
  "cypress/fixtures/pseudoRandom.json",
  JSON.stringify(jsonData, null, 2),
  "utf-8"
);
