class PostPage {
  private newPostButton: string;
  private newPostCreate: string;
  private titleInput: string;
  private contentInput: string;
  private publishButton: string;
  private confirmPublishButton: string;
  private postsList: string;

  constructor() {
    this.newPostButton = '[data-test-nav="posts"]';
    this.newPostCreate = "[data-test-new-post-button]";
    this.titleInput = "[data-test-editor-title-input]";
    this.contentInput = ".koenig-react-editor";
    this.publishButton = '[data-test-link="posts"]';
    this.confirmPublishButton = '[data-test-button="continue"]';
    this.postsList = ".gh-content-entry-title"; // Selector de la lista de publicaciones
  }

  public visitNewPost(): void {
    cy.get(this.newPostButton).click();
    cy.get(this.newPostCreate).click();
  }

  public enterTitle(title: string): void {
    cy.get(this.titleInput).type(title);
  }

  public enterContent(content: string): void {
    cy.get(this.contentInput).type(content);
  }

  public savePost(): void {
    cy.get(this.publishButton).click();
  }

  public verifyPostInList(title: string): void {
    cy.get(this.postsList).contains(title).should("be.visible");
  }

  public publishPost(): void {
    cy.get(this.publishButton).click();
  }

  public unpublishPost(): void {}
}

export default new PostPage();
