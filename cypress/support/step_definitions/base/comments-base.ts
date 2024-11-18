import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario hace click en settings base", () => {
  cy.wait(1000);
  cy.get("#ember47").click();
});

Then("el usuario hace click en editar settings base", () => {
  cy.wait(1000);
  cy.contains("Access").click();
});

Then("se le da permiso a todos los miembros para comentario base", () => {
  cy.wait(1000);
  cy.screenshot("comments/1base");
  cy.contains("Save settings").click();
});

Then("se guarda la configuracion de los comentarios base", () => {
  cy.wait(1000);
  cy.get("#ember27").click();
});
