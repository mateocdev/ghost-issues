import { faker } from "@faker-js/faker";
class Members {
  public visitMembersPage(): void {
    cy.get('[data-test-nav="members"]').click();
  }

  public clickNewMemberButton(): void {
    cy.get("[data-test-new-member-button='true']").click();
  }

  public fillNewMemberForm(data: any): void {
    cy.get("[data-test-input='member-name']").type(data[0].name);
    cy.get("[data-test-input='member-email']").type(data[0].email);
  }

  public fillNewMemberFormPseudo(data: any): void {
    cy.get("[data-test-input='member-name']").type(data.name);
    cy.get("[data-test-input='member-email']").type(data.email);
  }

  public clickSaveMember(): void {
    cy.get('[data-test-button="save"]').click();
  }

  public showMemberCreated(): void {
    cy.get('[data-test-table="members"]').should("be.visible");
  }

  public clickMember(data: any): void {
    cy.get('[data-test-table="members"]').contains(data[0].name).click();
  }

  public deactivateSubscription(): void {
    cy.get("[data-test-member-settings-switch]").find("span").click();
  }

  public fillNoteForm(data: any, hasError?: boolean): void {
    if (hasError)
      cy.get('[data-test-input="member-note"]').type(data[0].errorNote);
    else cy.get('[data-test-input="member-note"]').type(data[0].note);
  }

  public fillNoteFormPAPD(): void {
    cy.get("[data-test-input='member-note']")
      .clear()
      .type(faker.lorem.paragraph());
  }

  public fillNoteFormFullTextPAPD(): void {
    cy.get("[data-test-input='member-note']")
      .clear()
      .type(faker.lorem.paragraphs(5));
  }

  public getErrorSaveNote(): void {
    cy.get('[data-test-button="save"]').contains("Retry");
  }

  public fillModifyMemberForm(data: any): void {
    cy.get('[data-test-input="member-name"]').clear().type(data[1].name);
    cy.get('[data-test-input="member-email"]').clear().type(data[1].email);
  }

  public fillRandomEmail(data: any): void {
    cy.get('[data-test-input="member-email"]').clear().type(data.email);
  }

  public fillModifyMemberFormPDAD(): void {
    cy.get("[data-test-input='member-name']").clear().type(faker.book.title());
    cy.get("[data-test-input='member-email']")
      .clear()
      .type(faker.internet.email());
  }

  public clickRandomMember(): void {
    cy.get('[data-test-table="members"]').find("tr").eq(1).click();
  }

  // pseudo aleatorio con faker

  public fillNewMemberFormPDAD(): void {
    cy.get("[data-test-input='member-name']").type(faker.person.firstName());
    cy.get("[data-test-input='member-email']").type(faker.internet.email());
  }

  public updateMemberFormPDAD(): void {
    cy.get("[data-test-input='member-email']")
      .clear()
      .type(faker.person.lastName());
  }

  public fillNoteFormPseudo(data: any): void {
    cy.get("[data-test-input='member-note']").type(data.note);
  }

  public fillNoteFormPseudoError(data: any): void {
    cy.get("[data-test-input='member-note']").type(data.errorNote);
  }

  public fillModifyMemberFormPseudo(data: any): void {
    cy.get("[data-test-input='member-name']").clear().type(data.name);
    cy.get("[data-test-input='member-email']").clear().type(data.email);
  }
}

export default new Members();
