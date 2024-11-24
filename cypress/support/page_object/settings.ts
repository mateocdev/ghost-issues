class Settings {
  public visitSettingsPage(url: string): void {
    cy.visit(url)
  }

  public clickEditTitleDescription(): void {
    cy.get('[data-testid="title-and-description"]').find('button').contains('Edit').click();
  }

  public fillNewTitleForm(data: any): void {
    cy.get('[data-testid="title-and-description"]').find('input:eq(0)').type(data[0].title);
    cy.get('[data-testid="title-and-description"]').find('input:eq(1)').type(data[0].description);
  }

  public clickSaveSettings(): void {
    cy.get('[data-testid="title-and-description"]').find('button').contains('Save').click();
  }
}

export default new Settings();