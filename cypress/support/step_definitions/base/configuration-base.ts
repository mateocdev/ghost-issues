import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("está en la página de configuraciones generales base", () => {
  cy.wait(1000);
  cy.visit("/ghost/#/settings");
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
});

Then("el título del sitio debería ser {string} base", (newTitle: string) => {
  cy.contains("Save settings").click();
});

Then("está en la página de configuración de temas base", () => {
  cy.visit("/ghost/#/settings");
  cy.wait(1000);
  cy.contains("Branding").click();
  cy.wait(100);
  cy.get(".gh-stack-item .gh-setting-first .gh-accent-color")
    .get(".input-color")
    .click();
});

When("el administrador cambia a un color aleatorio base", () => {
  cy.wait(1000);
  cy.get(".gh-stack-item .gh-setting-first .gh-accent-color")
    .get(".input-color")
    .clear();
  cy.wait(1000);
  cy.get(".gh-stack-item .gh-setting-first .gh-accent-color")
    .get(".input-color")
    .type("983e62");
  cy.contains("Save and close").click();
});

Then("se guardaron los cambios del diseño de color base", () => {
  cy.contains("Save").click();
});
