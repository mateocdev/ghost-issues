import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("el administrador ha iniciado sesión", () => {
  cy.visit("/ghost/#/signin");
  cy.get('input[name="identification"]').type("admin@ejemplo.com");
  cy.get('input[name="password"]').type("admin123");
  cy.get("button.login").click();
  cy.url().should("include", "/ghost/#/site");
});

Given("el administrador está en la página de etiquetas", () => {
  cy.visit("/ghost/#/tags");
});

When("el administrador crea una nueva etiqueta {string}", (tagName) => {
  cy.get(".gh-btn-green").contains("New tag").click();
  cy.get("#tag-name").type(tagName);
  cy.get(".view-actions .gh-btn-primary").click();
});

Then("la etiqueta debería aparecer en la lista de etiquetas", () => {
  cy.visit("/ghost/#/tags");
  cy.contains("Etiqueta de Prueba").should("exist");
});
