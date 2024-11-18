import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Then(
  "el administrador crea un nuevo miembro con el nombre {string} base",
  (name: string) => {
    cy.wait(100);
    cy.get(".gh-nav-body").contains("Members").click();
    cy.screenshot("membersGhost/1base");
    cy.wait(100);
    cy.contains("New member").click();
    cy.wait(100);
    cy.get(".gh-member-settings")
      .get(".gh-cp-member-email-name")
      .find("#member-name")
      .type(name);

    cy.get(".gh-member-settings")
      .find("#member-email")
      .type(Math.floor(Math.random() * 100000) + "@example.com");
    cy.screenshot("membersGhost/2base");
    cy.contains("Save").click();
  }
);

Then(
  "el administrador debería ver el miembro {string} en la lista de miembros base",
  () => {
    cy.wait(100);
    cy.get(".gh-nav-body").contains("Members").click();
    cy.screenshot("membersGhost/3base");
    cy.wait(100);
    cy.contains("Joe Doe").should("be.visible");
  }
);
