import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then("está en la página de configuraciones generales", () => {
  cy.visit("/ghost/#/settings/general");
  cy.screenshot("configuration/1");
});

When("el administrador actualiza el título del sitio a {string}", () => {
  cy.wait(1000);
  cy.get("[data-testid='title-and-description']")
    .find('button:contains("Edit")')
    .click();
  cy.get('[data-testid="title-and-description"] input:nth-child(1)').clear();
  cy.screenshot("configuration/2");
});

Then("el título del sitio debería ser {string}", (newTitle: string) => {
  cy.get('input[placeholder="Site title"]').type(newTitle);
  cy.contains("Save").click();
});

Then("está en la página de configuración de temas", () => {
  cy.visit("/ghost/#/settings/design");
  cy.wait(1000);
  cy.get("[data-testid='design']").find('button:contains("Customize")').click();
  cy.screenshot("configuration/3");
});

When("el administrador cambia a un color aleatorio", () => {
  cy.wait(1000);
  cy.get('[data-testid="accent-color-picker"]').click();
});

Then("se guardaron los cambios del diseño de color", () => {
  cy.contains("Save").click();
});
