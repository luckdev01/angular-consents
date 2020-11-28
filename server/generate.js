var faker = require('faker');
var {
  CONSENT_OPTIONS
} = require('../src/app/core/constants/consent.constants.js');
const INIT_DATA_COUNT = 10;

var database = { consents: [] };

for (var i = 1; i <= INIT_DATA_COUNT; i++) {
  database.consents.push({
    id: i,
    name: faker.internet.userName(),
    email: faker.internet.email(),
    givenConsent: [
      CONSENT_OPTIONS[Math.round(Math.random() * (CONSENT_OPTIONS.length - 1))]
        .value
    ].join(',')
  });
}

console.log(JSON.stringify(database));
