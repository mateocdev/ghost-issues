import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import PostPage from "../../page_object/postPage";

Then("hace clic en el boton de new post base", () => {
  PostPage.clickNewPost();
});

When("el administrador puede ver la seccion de crear post base", () => {
  PostPage.visitNewPost();
});

Then("hace click en el boton create post base", () => {
  PostPage.newPostClick();
});

When(
  "el administrador ingresa un título {string}, {string} base",
  (title: string, content: string) => {
    PostPage.enterTitle(title, content);
  }
);

When("hace clic en el botón de guardar base", () => {
  PostPage.savePost();
});

Then(
  "la publicación debería aparecer en la lista de publicaciones base",
  () => {
    PostPage.verifyPostInList("Nueva Publicación");
  }
);

Given("el administrador tiene una publicación existente base", () => {
  cy.wait(1000);
  PostPage.verifyPostInList;
});

When("el administrador publica la entrada base", () => {
  PostPage.publishPost();
});

Then("luego despublica la entrada base", () => {
  PostPage.unpublishPost();
});
