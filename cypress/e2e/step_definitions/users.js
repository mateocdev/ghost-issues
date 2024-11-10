import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("el administrador ha iniciado sesión", () => {
  cy.visit("/ghost/#/signin");
  cy.get('input[name="identification"]').type("admin@ejemplo.com");
  cy.get('input[name="password"]').type("admin123");
  cy.get("button.login").click();
  cy.url().should("include", "/ghost/#/site");
});

Given("está en la página de miembros", () => {
  cy.visit("/ghost/#/members");
});

When(
  "el administrador invita a un nuevo miembro con el correo {string}",
  (email) => {
    cy.get(".gh-btn-green").contains("Invite people").click();
    cy.get(".email-input").type(email);
    cy.get(".gh-btn-primary").contains("Send invitation now").click();
  }
);

Then("el nuevo miembro debería aparecer en la lista de miembros", () => {
  cy.contains("nuevo@miembro.com").should("exist");
});
