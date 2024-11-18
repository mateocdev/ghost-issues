import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("está en la página de configuraciones generales base", () => {
  cy.wait(1000);
  cy.visit("/ghost/#/settings");
  cy.screenshot("configuration/1base");
});

When("el administrador actualiza el título del sitio a {string} base", () => {
  cy.wait(1000);
  cy.contains("General").click();
  cy.wait(100);
  cy.get(".gh-expandable-block")
    .eq(0)
    .find("button:contains('Expand')")
    .click();
  cy.get(".gh-expandable-content")
    .get(".liquid-container .ember-view")
    .get(".gh-setting-content-extended")
    .find("input")
    .eq(0)
    .clear();
  cy.wait(100);
  cy.screenshot("configuration/2base");
});

Then("el título del sitio debería ser {string} base", (newTitle: string) => {
  cy.contains("Save settings").click();
});

Then("está en la página de configuración de temas base", () => {
  cy.wait(1000);
  cy.visit("/ghost/#/settings");
  cy.wait(1000);
  cy.contains("Branding").click();
  cy.wait(100);
  cy.screenshot("configuration/3base");
});

When("el administrador cambia a un color aleatorio base", () => {
  cy.wait(1000);
  cy.contains("Save and close").click();
});
