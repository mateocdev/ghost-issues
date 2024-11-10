import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("el administrador está en la página de inicio de sesión", () => {
  cy.visit("/ghost/#/signin");
});

When(
  "el administrador ingresa un correo {string} y una contraseña {string}",
  (email, password) => {
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
  }
);

When("hace clic en el botón de inicio de sesión", () => {
  cy.get("button.login").click();
});

Then("el administrador debería ver el panel de control", () => {
  cy.url().should("include", "/ghost/#/site");
});
