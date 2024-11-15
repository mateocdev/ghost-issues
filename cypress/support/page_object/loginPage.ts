class LoginPage {
  visit() {
    cy.visit("http://localhost:2368/ghost/#/signin");
  }

  enterEmail(email) {
    cy.get("#identification").type(email);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  clickLoginButton() {
    cy.get("#ember5").click();
  }
}

export default LoginPage;
