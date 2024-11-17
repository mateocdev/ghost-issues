import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("el administrador esta en la pagina de inicio de sesion base", () => {
  cy.visit("http://localhost:3001/ghost/#/signin");
});

When(
  "el administrador ingresa un correo {string} y una contraseña {string} base",
  (email: string, password: string) => {
    cy.get("#ember8").type(email);
    cy.get("#ember10").type(password);
    cy.get("#ember12").click();
  }
);
