import { faker } from "@faker-js/faker";

class Tags {
  public visitTagsPage(): void {
    cy.get('[data-test-nav="tags"]').click();
  }

  public clickNewTagButton(url: string): void {
    cy.visit(url);
  }

  public fillNewTagForm(data: any): void {
    cy.get('[data-test-input="tag-name"]').type(data[0].nameTag);
    cy.get('[data-test-input="tag-description"]').type(data[0].descriptionTag);
  }

  public fillNewTagFormPseudo(data: any): void {
    cy.get('[data-test-input="tag-name"]').type(data.nameTag);
    cy.get('[data-test-input="tag-description"]').type(data.descriptionTag);
  }

  public showTagCreated(): void {
    cy.get("[data-test-tag-slug]").should("be.visible");
  }

  public clickTag(data: any): void {
    cy.get(".content-list").contains(data[0].nameTag).click();
  }

  public clickRandomTag(): void {
    cy.get(".content-list").find("a").eq(0).click();
  }

  public fillModifyTagForm(data: any): void {
    cy.get('[data-test-input="tag-name"]').clear().type(data[0].newNameTag);
    cy.get('[data-test-input="tag-description"]')
      .clear()
      .type(data[0].newDescriptionTag);
  }

  public fillModifyTagFormPDAD(): void {
    cy.get('[data-test-input="tag-name"]').clear().type(faker.animal.cat());
    cy.get('[data-test-input="tag-description"]')
      .clear()
      .type(faker.book.title());
  }

  public fillNewTagFormPDAD(): void {
    cy.get('[data-test-input="tag-name"]').type(faker.lorem.word());
    cy.get('[data-test-input="tag-description"]').type(faker.lorem.sentence());
  }
}

export default new Tags();
