import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("el administrador está en la página de etiquetas", () => {
  cy.wait(1000);
  cy.get("[data-test-nav='tags']").click();
  cy.wait(1000);
  cy.get(
    '[class="view-actions"] > [class="ember-view gh-btn gh-btn-primary"]'
  ).click();
});

When("el administrador crea una nueva etiqueta {string}", (tagName: string) => {
  cy.wait(100);
  cy.get('[data-test-input="tag-name"]').type(tagName);
  cy.wait(100);
  cy.get("[data-test-button='save']").click();
  cy.wait(1000);
  cy.get("[data-test-nav='tags']").click();
});

Then("la etiqueta debería aparecer en la lista de etiquetas", () => {
  cy.contains("Etiqueta de Prueba").should("exist");
});

Then("se agrega una etiqueta a la publicacion {string}", (tagName: string) => {
  cy.wait(1000);
  cy.get("[data-test-psm-trigger]").click();
  cy.wait(1000);
  cy.get(".ember-power-select-trigger-multiple-input").eq(0).type(tagName);
  cy.wait(100);
});
