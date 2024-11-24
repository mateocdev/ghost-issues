class Members {
  public visitMembersPage(url: string): void {
    cy.visit(url);
    cy.wait(100);
  }

  public clickNewMemberButton(): void {
    cy.get("[data-test-new-member-button='true']").click();
    cy.wait(100);
  }

  public fillNewMemberForm(data: any): void {
    cy.get("[data-test-input='member-name']").type(data[0].name);
    cy.wait(100);
    cy.get("[data-test-input='member-email']").type(data[0].email);
  }
}

export default new Members();
