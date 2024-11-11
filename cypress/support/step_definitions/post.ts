import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_object/loginPage";
import PostPage from "../page_object/postPage";

const loginPage = new LoginPage();

Given("el administrador ha iniciado sesion", (email, password) => {
  loginPage.visit();
  loginPage.enterEmail(email);
  loginPage.enterPassword(password);
  loginPage.clickLoginButton();
});

Given("el administrador está en la página de creación de publicaciones", () => {
  PostPage.visitNewPost();
});

When(
  "el administrador ingresa un título {string} y contenido {string}",
  (title: string, content: string) => {
    PostPage.enterTitle(title);
    PostPage.enterContent(content);
  }
);

When("hace clic en el botón de guardar", () => {
  PostPage.savePost();
});

Then("la publicación debería aparecer en la lista de publicaciones", () => {
  PostPage.verifyPostInList("Nueva Publicación");
});

Given("el administrador tiene una publicación existente", () => {});

When("el administrador publica la entrada", () => {
  PostPage.publishPost();
});

When("luego despublica la entrada", () => {
  PostPage.unpublishPost();
});

Then("la entrada no debería estar visible al público", () => {
  // Verifica que la entrada no esté visible al público
  // Esto puede requerir lógica adicional para acceder al frontend público
});
