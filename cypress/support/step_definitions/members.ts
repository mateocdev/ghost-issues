import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then(
  "el administrador crea un nuevo miembro con el nombre {string}",
  (name: string) => {
    cy.wait(100);
    cy.visit("/ghost/#/members");
    cy.screenshot();
    cy.wait(100);
    cy.get("[data-test-new-member-button='true']").click();
    cy.wait(100);
    cy.get("#member-name").click();
    cy.get("#member-name").type(name);
    cy.get("[data-test-input='member-email']").type(
      Math.floor(Math.random() * 100000) + "@example.com"
    );
    cy.screenshot();
    cy.get("[data-test-button='save']").click();
  }
);

Then("el administrador debería ver el miembro creado", () => {
  cy.wait(100);
  cy.visit("/ghost/#/members");
  cy.get('[data-test-input="members-search"]').click().type("Joe Doe");
  cy.wait(100);
  cy.contains("Joe Doe").should("be.visible");
});

Then(
  "el administrador debería ver el miembro {string} en la lista de miembros",
  () => {
    cy.wait(100);
    cy.visit("/ghost/#/members");
    cy.get('[data-test-input="members-search"]').click().type("Joe Doe");
    cy.wait(100);
    cy.contains("Joe Doe").should("be.visible");
  }
);
