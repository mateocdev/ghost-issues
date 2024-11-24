class Members {
  public visitMembersPage(): void {
    cy.get('[data-test-nav="members"]').click()
  }

  public clickNewMemberButton(): void {
    cy.get("[data-test-new-member-button='true']").click();
  }

  public fillNewMemberForm(data: any): void {
    cy.get("[data-test-input='member-name']").type(data[0].name);
    cy.get("[data-test-input='member-email']").type(data[0].email);
  }

  public clickSaveMember(): void {
    cy.get('[data-test-button="save"]').click();
  }

  public showMemberCreated(): void {
    cy.get('[data-test-table="members"]').should('be.visible');
  }
}

export default new Members();
