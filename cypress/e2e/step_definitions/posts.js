import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("el administrador ha iniciado sesión", () => {
  cy.visit("/ghost/#/signin");
  cy.get('input[name="identification"]').type("admin@ejemplo.com");
  cy.get('input[name="password"]').type("admin123");
  cy.get("button.login").click();
  cy.url().should("include", "/ghost/#/site");
});

Given("el administrador está en la página de creación de publicaciones", () => {
  cy.visit("/ghost/#/editor/post");
});

When(
  "el administrador ingresa un título {string} y contenido {string}",
  (title, content) => {
    cy.get('textarea[placeholder="Post Title"]').type(title);
    cy.get(".koenig-editor__editor").type(content);
  }
);

When("hace clic en el botón de guardar", () => {
  cy.get(".gh-publishmenu-trigger").click();
  cy.get(".gh-publishmenu-button").click();
});

Then("la publicación debería aparecer en la lista de publicaciones", () => {
  cy.visit("/ghost/#/posts");
  cy.contains("Nueva Publicación").should("exist");
});
