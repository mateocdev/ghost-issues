class LoginPage {
  visit(url: string) {
    cy.visit(url);
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
