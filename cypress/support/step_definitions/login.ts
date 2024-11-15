import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_object/loginPage";

const loginPage = new LoginPage();

Given("el administrador esta en la pagina de inicio de sesion", () => {
  loginPage.visit();
});

When(
  "el administrador ingresa un correo {string} y una contraseña {string}",
  (email, password) => {
    loginPage.enterEmail(email);
    loginPage.enterPassword(password);
  }
);

When("hace clic en el botón de inicio de sesión", () => {
  loginPage.clickLoginButton();
});

Then("el administrador debería ver el panel de control", () => {
  cy.get("[data-test-nav='dashboard']").should("be.visible");
});
