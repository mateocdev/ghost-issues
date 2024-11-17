import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import PostPage from "../page_object/postPage";

Then("hace clic en el boton de new post", () => {
  PostPage.clickNewPost();
});

When("el administrador puede ver la seccion de crear post", () => {
  PostPage.visitNewPost();
});

Then("hace click en el boton create post", () => {
  PostPage.newPostClick();
});

When(
  "el administrador ingresa un título {string}, {string}",
  (title: string, content: string) => {
    PostPage.enterTitle(title, content);
  }
);

When("hace clic en el botón de guardar", () => {
  PostPage.savePost();
});

Then("la publicación debería aparecer en la lista de publicaciones", () => {
  PostPage.verifyPostInList("Nueva Publicación");
});

Given("el administrador tiene una publicación existente", () => {
  cy.wait(1000);
  PostPage.verifyPostInList;
});

When("el administrador publica la entrada", () => {
  PostPage.publishPost();
});

Then("luego despublica la entrada", () => {
  PostPage.unpublishPost();
});
