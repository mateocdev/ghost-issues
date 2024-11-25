import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Members from "../page_object/members";
import newsletter from "../page_object/newsletter";
import settings from "../page_object/settings";
import tags from "../page_object/tags";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.name === "AbortError") return false;
});

// Scenario: PDAD-01 Generar un usuario aleatorio y verificar su creación.

Then(
  "el administrador ingresa los datos del nuevo miembro con faker",
  function () {
    Members.fillNewMemberFormPDAD();
  }
);

// Scenario: PDAD-02 Crear un tag aleatorio y validar su creacion

Then("el administrador ingresa los datos del nuevo tag con faker", function () {
  tags.fillNewTagFormPDAD();
});

// Scenario: PDAD-03 Modificar un miembro con un email invalido.

Then("el administrador hace click en cualquier miembro", function () {
  Members.clickRandomMember();
});

Then("el administrador ingresa un email invalido", function () {
  Members.updateMemberFormPDAD();
});

Then("el administrador tiene un error", function () {
  Members.getErrorSaveNote();
});

// Scenario: PDAD-04 Crear un newsletter con contenido aleatorio y verificar..

Then(
  "el administrador ingresa los datos del nuevo newsletter con faker",
  function () {
    newsletter.fillNewNewsletterFormPDAD();
  }
);

// Scenario: PAPD-05 Modificar el titulo y la descripcion del sitio con nombres aleatorios

Then(
  "el administrador modifica el titulo y la descripcion del sitio aleatorio",
  function () {
    settings.clickEditTitleDescription();
    settings.fillNewTitleFormPDAD();
  }
);

// Scenario: PAPD-06 Cambiar aleatoriamente con texto aleatorio de 500 caractares.
Then(
  "el administrador modifica la nota del miembro con texto aleatorio",
  function () {
    Members.fillNoteFormPAPD();
  }
);

// Scenario: PAPD-07 Cambiar aleateoriamente con texto aleatorio de mas de 500 caracteres no permitidos.

Then(
  "el administrador modifica la nota del miembro y agrega mas de 500 caracteres aleatorios",
  function () {
    Members.fillNoteFormFullTextPAPD();
  }
);

//Scenario: PAPD-08 Actualizar un tag con un nombre aleatorio

Then(
  "el administrador modifica la informacion del tag con informacion aleatoria",
  function () {
    tags.fillModifyTagFormPDAD(this.data.tags);
  }
);

// // Scenario: APD-09 Agregar staff como contribuidor a la plataforma

// When('el administrador ingresa a la pagina de staff', function(){
//     settings.visitStaffPage(this.data.staffUrl);
// });

// Then('el administrador hace click en invitar gente', function(){
//   settings.clickInvitePeople();
// });

// Then('el administrador ingresa un correo y selecciona role de contribuidor', function(){
//   settings.fillInvitePeopleForm(this.data.settings);
// });

// Then('el administrador hace click en el botón de invitar', function(){
//   settings.clickSaveInvitation();
// });

// // Scenario: APD-10 Modificar la información de un miembro y verificar el cambio

// Then('el administrador modifica la informacion del miembro', function(){
//   Members.fillModifyMemberForm(this.data.newMember);
// });
