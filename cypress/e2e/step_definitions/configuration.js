import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("el administrador ha iniciado sesión", () => {
  cy.visit("/ghost/#/signin");
  cy.get('input[name="identification"]').type("admin@ejemplo.com");
  cy.get('input[name="password"]').type("admin123");
  cy.get("button.login").click();
  cy.url().should("include", "/ghost/#/site");
});

Given("está en la página de configuraciones generales", () => {
  cy.visit("/ghost/#/settings/general");
});

When(
  "el administrador actualiza el título del sitio a {string}",
  (newTitle) => {
    cy.get(".gh-setting-title").click();
    cy.get('input[placeholder="Site Title"]').clear().type(newTitle);
    cy.get(".gh-btn-primary").contains("Save settings").click();
  }
);

Then("el título del sitio debería ser {string}", (newTitle) => {
  cy.visit("/ghost/#/settings/general");
  cy.get('input[placeholder="Site Title"]').should("have.value", newTitle);
});
