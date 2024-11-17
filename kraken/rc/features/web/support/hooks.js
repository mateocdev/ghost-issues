const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');

Before(async function(scenario) {
  // Example scenario name below:
  // Scenario: Comment-01: Verificar que un administrador puede ver la lista de comentarios en una publicación.
  // Expected scenario name slug: comment-01
  this.scenarioNameSlug = scenario.pickle.name.split(':')[0].replace(/ /g, '-').toLowerCase();
  this.deviceClient = new WebClient('edge', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
