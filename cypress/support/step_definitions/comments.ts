import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("el administrador ha iniciado sesión", () => {
  cy.visit("/ghost/#/signin");
  cy.get('input[name="identification"]').type("admin@ejemplo.com");
  cy.get('input[name="password"]').type("admin123");
  cy.get("button.login").click();
  cy.url().should("include", "/ghost/#/site");
});

Given("el administrador está en la página de comentarios", () => {
  cy.visit("/ghost/#/comments");
});

Then("el administrador debería ver la lista de comentarios", () => {
  cy.get(".comments-list").should("be.visible");
});

When("el administrador aprueba un comentario pendiente", () => {
  cy.get(".comment-pending").first().find(".approve-button").click();
});

Then("el comentario debería estar marcado como aprobado", () => {
  cy.get(".comment-approved").should("have.length.greaterThan", 0);
});

When("el administrador elimina un comentario", () => {
  cy.get(".comment").first().find(".delete-button").click();
});

Then("el comentario no debería aparecer en la lista de comentarios", () => {
  cy.get(".comment").should("not.exist");
});
