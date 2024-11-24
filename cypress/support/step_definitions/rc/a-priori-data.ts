import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Members from "../../page_object/members";

beforeEach(function () {
  cy.fixture("aprioriData").then((data) => {
    this.data = data;
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Si el error es el AbortError, devolver false para evitar que Cypress falle la prueba
  if (err.name === 'AbortError') {
    return false;
  }
  // Devuelve true o no devuelve nada para permitir que otros errores no capturados hagan que la prueba falle
});

When("el administrador ingresa a la pagina de miembros", function () {
  Members.visitMembersPage(this.data.membersUrl);
});

Then("el administrador hace click en nuevo miembro", function () {
  Members.clickNewMemberButton();
});

Then("el administrador ingresa los datos del nuevo miembro", function () {
  Members.fillNewMemberForm(this.data.newMember);
});

Then("el administrador hace click en el botón de guardar", function () {
  Members.clickSaveMember();
})

Then('el administrador deberia ver el nuevo miembro en la lista de miembros', function(){
  Members.showMemberCreated();
});
