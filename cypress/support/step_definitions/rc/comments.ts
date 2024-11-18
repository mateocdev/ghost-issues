import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario hace click en settings", () => {
  cy.wait(1000);
  cy.get("[data-test-nav='settings']").click();
});

Then("el usuario hace click en editar settings", () => {
  cy.wait(1000);
  cy.get("#members").click();
});

Then("se le da permiso a todos los miembros para comentario", () => {
  cy.wait(1000);
  cy.screenshot("comments/1");
  cy.get("[data-testid='access']").find('button:contains("Edit")').click();
});

Then("se guarda la configuracion de los comentarios", () => {
  cy.wait(1000);
  cy.get("[data-testid='commenting-select']").click();
  cy.wait(1000);
  cy.contains("All members").click();
  cy.wait(1000);
  cy.contains("Save").click();
});
