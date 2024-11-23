import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_object/loginPage";

const loginPage = new LoginPage();

beforeEach(function () {
  cy.fixture("aprioriData").then((data) => {
    this.data = data;
  });
});

Given("el administrador esta en la pagina de inicio de sesion", function () {
  loginPage.visit(this.data.url);
});

When("el administrador ingresa un correo y una contraseña", function () {
  loginPage.enterEmail(this.data.email);
  loginPage.enterPassword(this.data.password);
});

When("hace clic en el botón de inicio de sesión", () => {
  loginPage.clickLoginButton();
});

Then("el administrador debería ver el panel de control", () => {
  cy.get("[data-test-nav='dashboard']").should("be.visible");
});
