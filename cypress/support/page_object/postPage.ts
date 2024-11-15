class PostPage {
  private newPostButton: string;
  private newPostCreate: string;
  private titleInput: string;
  private contentInput: string;
  private publishButton: string;
  private confirmPublishButton: string;
  private postsList: string;

  constructor() {
    this.newPostButton = "[data-test-nav='posts']";
    this.newPostCreate = ".view-actions-top-row";
    this.titleInput = "[data-test-editor-title-input]";
    this.contentInput = ".koenig-react-editor";
    this.publishButton = '[data-test-link="posts"]';
    this.confirmPublishButton = '[data-test-button="continue"]';
    this.postsList = ".gh-content-entry-title"; // Selector de la lista de publicaciones
  }

  public clickNewPost(): void {
    cy.wait(1000);
    cy.get(this.newPostButton).click();
  }

  public visitNewPost(): void {
    cy.get(this.newPostCreate).should("be.visible");
  }

  public newPostClick(): void {
    cy.wait(1000);
    cy.get(this.newPostCreate).click();
  }

  public enterTitle(title: string, content: string): void {
    cy.wait(1000);
    cy.get(this.titleInput).should("be.visible");
    cy.wait(1000);
    cy.get(this.titleInput).type(title);
    cy.wait(1000);
    cy.get(this.contentInput).type(content);
  }

  public savePost(): void {
    cy.get(this.publishButton).click();
  }

  public verifyPostInList(title: string): void {
    cy.wait(1000);
    cy.get(this.postsList).contains(title).should("be.visible");
  }

  public publishPost(): void {
    cy.get(this.publishButton).click();
  }

  public unpublishPost(): void {}
}

export default new PostPage();
