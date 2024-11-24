import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Members from "../page_object/members";
import newsletter from "../page_object/newsletter";
import settings from "../page_object/settings";
import tags from "../page_object/tags";

beforeEach(function () {
  cy.fixture("aprioriData").then((data) => {
    this.data = data;
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.name === 'AbortError') return false;
});

When("el administrador ingresa a la pagina de miembros", function () {
  Members.visitMembersPage();
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


// Scenario: APD-02 Crear un tag y validar su creacion

When("el administrador ingresa a la pagina de tags", function () {
  tags.visitTagsPage();
});

Then("el administrador hace click en nuevo tag", function () {
  tags.clickNewTagButton(this.data.urlTag);
});

Then("el administrador ingresa los datos del nuevo tag", function () {
  tags.fillNewTagForm(this.data.tags);
});

Then('el administrador deberia ver el nuevo tag en la lista de tags', function(){
  tags.showTagCreated();
});

// Scenario: APD-03 Desactivar una suscripción para un miembro existente y validar.


Then("el administrador hace click en el miembro existente", function () {
  Members.clickMember(this.data.newMember);
});

Then('el administrador desactiva la suscripción del miembro', function(){
  Members.deactivateSubscription();
});


// Scenario: APD-04 Crear un newsletter y verificar su existencia.

When("el administrador ingresa a la pagina de newsletters", function () {
  newsletter.visitNewsletterPage(this.data.urlNewsletter);
});

Then("el administrador hace click en nuevo newsletter", function () {
  newsletter.clickNewNewsletterButton();
});

Then("el administrador ingresa los datos del nuevo newsletter", function () {
  newsletter.fillNewNewsletterForm(this.data.news);
});

Then('el administrador deberia ver el nuevo newsletter en la lista de newsletters', function(){
  newsletter.showNewsletterCreated();
});

When('el administrador hace click en el botón de guardar newsletter', function(){
  newsletter.clickSaveNewsletter();
});

// Scenario: APD-05 Modificar el titulo y la descripcion del sitio

When("el administrador ingresa a la pagina de configuracion", function () {
  settings.visitSettingsPage(this.data.settingsUrl);
});

Then("el administrador modifica el titulo y la descripcion del sitio", function () {
  settings.clickEditTitleDescription();
  settings.fillNewTitleForm(this.data.settings);
});

When('el administrador hace click en el botón de guardar configuracion', function(){
  settings.clickSaveSettings();
});

// Scenario: APD-06 Modificar a un usuario y agregarle 500 caracteres en nota el maximo permitido

Then('el administrador modifica la nota del miembro', function(){
  Members.fillNoteForm(this.data.newMember);
});

// APD-07 Modificar a un usuario y agregarle mas de 500 caracteres que no son los permitidos.

Then('el administrador modifica la nota del miembro y agrega mas de 500 caracteres', function(){
  Members.fillNoteForm(this.data.newMember, true);
});

Then('el administrador debe ver un error de que la nota no puede tener mas de 500 caracteres', function(){
  Members.getErrorSaveNote();
});

// Scenario: APD-08 Actualizar informacion de un tag y verificar la actualizacion
Then('el administrador hace click en el tag existente', function(){
  tags.clickTag(this.data.tags);
});


Then('el administrador modifica la informacion del tag', function(){
  tags.fillModifyTagForm(this.data.tags);
});

// Scenario: APD-09 Agregar staff como contribuidor a la plataforma


When('el administrador ingresa a la pagina de staff', function(){
    settings.visitStaffPage(this.data.staffUrl);
});

Then('el administrador hace click en invitar gente', function(){
  settings.clickInvitePeople();
});

Then('el administrador ingresa un correo y selecciona role de contribuidor', function(){
  settings.fillInvitePeopleForm(this.data.settings);
});


Then('el administrador hace click en el botón de invitar', function(){
  settings.clickSaveInvitation();
});

// Scenario: APD-10 Modificar la información de un miembro y verificar el cambio


Then('el administrador modifica la informacion del miembro', function(){
  Members.fillModifyMemberForm(this.data.newMember);
});
