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
    cy.get('[data-test-tag-slug]').should('be.visible');
  }

  public clickTag(data: any): void {
    cy.get('.content-list').contains(data[0].nameTag).click();
  }

 public fillModifyTagForm(data: any): void {
    cy.get('[data-test-input="tag-name"]').clear().type(data[0].newNameTag);
    cy.get('[data-test-input="tag-description"]').clear().type(data[0].newDescriptionTag);
  }
}

export default new Tags();

