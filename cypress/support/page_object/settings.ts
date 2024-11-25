import { faker } from "@faker-js/faker";

class Settings {
  public visitSettingsPage(url: string): void {
    cy.visit(url);
  }

  public clickEditTitleDescription(): void {
    cy.get('[data-testid="title-and-description"]')
      .find("button")
      .contains("Edit")
      .click();
  }

  public fillNewTitleForm(data: any): void {
    cy.get('[data-testid="title-and-description"]')
      .find("input:eq(0)")
      .type(data[0].title);
    cy.get('[data-testid="title-and-description"]')
      .find("input:eq(1)")
      .type(data[0].description);
  }

  public fillNewTitleFormPDAD(): void {
    cy.get('[data-testid="title-and-description"]')
      .find("input:eq(0)")
      .clear()
      .type(faker.music.songName());
    cy.get('[data-testid="title-and-description"]')
      .find("input:eq(1)")
      .clear()
      .type(faker.music.album());
  }

  public clickSaveSettings(): void {
    cy.get('[data-testid="title-and-description"]')
      .find("button")
      .contains("Save")
      .click();
  }

  public visitStaffPage(url: string): void {
    cy.visit(url);
  }

  public clickInvitePeople(): void {
    cy.get('[data-testid="users"]')
      .find("button")
      .contains("Invite people")
      .click();
  }

  public fillInvitePeopleForm(data: any): void {
    cy.get('[data-testid="invite-user-modal"]')
      .find("input")
      .type(data[0].emailStaff);
  }

  public fillInvitePopleFormPDAD(): void {
    cy.get('[data-testid="invite-user-modal"]')
      .find("input")
      .type(faker.internet.displayName());
  }

  public clickSaveInvitation(): void {
    cy.get('[data-testid="invite-user-modal"]')
      .find("button")
      .contains("Send invitation")
      .click();
  }
}

export default new Settings();
