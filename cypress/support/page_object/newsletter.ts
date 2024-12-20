import { faker } from "@faker-js/faker";
class NewsLetter {
  public visitNewsletterPage(url: string): void {
    cy.visit(url);
  }

  public clickNewNewsletterButton(): void {
    cy.get('[data-testid="newsletters"]').contains("Add newsletter").click();
  }

  public fillNewNewsletterForm(data: any): void {
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("input")
      .type(data[0].name);
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("textarea")
      .type(data[0].description);
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("button")
      .contains("Create")
      .click();
  }

  public fillNewNewsletterFormPseudo(data: any): void {
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("input")
      .type(data.name);
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("textarea")
      .type(data.description);
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("button")
      .contains("Create")
      .click();
  }

  public fillNewNewsletterFormPDAD(): void {
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("input")
      .type(faker.vehicle.vehicle());
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("textarea")
      .type(faker.internet.emoji());
    cy.get('[data-testid="add-newsletter-modal"]')
      .find("button")
      .contains("Create")
      .click();
  }

  public showNewsletterCreated(): void {
    cy.get('[data-testid="newsletters"]').should("be.visible");
  }

  public clickSaveNewsletter(): void {
    cy.get('[data-testid="newsletter-modal"]')
      .find("button")
      .contains("Save")
      .click();
    cy.wait(1000);
    cy.get('[data-testid="newsletter-modal"]')
      .find("button")
      .contains("Close")
      .click();
  }
}

export default new NewsLetter();
