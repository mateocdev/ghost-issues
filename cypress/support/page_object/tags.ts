class Tags {
  public visitTagsPage(): void {
    cy.get('[data-test-nav="tags"]').click()
  }

  public clickNewTagButton(url: string): void {
    cy.visit(url)
  }

  public fillNewTagForm(data: any): void {
    cy.get('[data-test-input="tag-name"]').type(data[0].nameTag);
    cy.get('[data-test-input="tag-description"]').type(data[0].descriptionTag);
  }

  public showTagCreated(): void {
    cy.get('[data-test-tag="674126ad6bafad00012ebe93"]').should('be.visible');
  }
}

export default new Tags();

