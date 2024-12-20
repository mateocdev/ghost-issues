import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Members from "../page_object/members";
import newsletter from "../page_object/newsletter";
import settings from "../page_object/settings";
import tags from "../page_object/tags";

beforeEach(function () {
  cy.fixture("pseudoRandom").then((data) => {
    this.info = data;
  });
});

Then(
  "el administrador ingresa los datos del nuevo miembro pseudo",
  function () {
    Members.fillNewMemberFormPseudo(this.info[0].newMember[0]);
  }
);

// Scenario: PSEUDO-02 Crear un tag y validar su creacion
Then("el administrador ingresa los datos del nuevo tag pseudo", function () {
  tags.fillNewTagFormPseudo(this.info[0].tags[0]);
});

// Scenario: PDAD-03 Modificar un miembro con un email aleatorio.

Then("el administrador ingresa un email aleatorio", function () {
  Members.fillRandomEmail(this.info[0].newMember[0]);
});

// Scenario: PSEUDO-04 Crear un newsletter y verificar su existencia.

Then(
  "el administrador ingresa los datos del nuevo newsletter pseudo",
  function () {
    newsletter.fillNewNewsletterFormPseudo(this.info[0].news[0]);
  }
);

// Scenario: PSEUDO-05 Modificar el titulo y la descripcion del sitio

Then(
  "el administrador modifica el titulo y la descripcion del sitio pseudo",
  function () {
    settings.clickEditTitleDescription();
    settings.fillNewTitleFormPseudo(this.info[0].settings[0]);
  }
);

// Scenario: PSEUDO-06 Modificar a un usuario y agregarle 500 caracteres en nota el maximo permitido

Then("el administrador modifica la nota del miembro pseudo", function () {
  Members.fillNoteFormPseudo(this.info[0].newMember[0]);
});

// Scenario: PSEUDO-07 Modificar a un usuario y agregarle mas de 500 caracteres que no son los permitidos.

Then(
  "el administrador modifica la nota del miembro y agrega mas de 500 caracteres pseudo",
  function () {
    Members.fillNoteFormPseudoError(this.info[0].newMember[0]);
  }
);

Then(
  "el administrador debe ver un error de que la nota no puede tener mas de 500 caracteres",
  function () {
    Members.getErrorSaveNote();
  }
);

// Scenario: PSEUDO-08 Actualizar informacion de un tag y verificar la actualizacion

Then("el administrador modifica la informacion del tag pseudo", function () {
  tags.fillModifyTagFormPseudo(this.info[0].tags[0]);
});

// Scenario: PSEUDO-09 Agregar staff como contribuidor a la plataforma
Then(
  "el administrador ingresa un correo y selecciona role de contribuidor pseudo",
  function () {
    settings.fillInvitePeopleFormPseudo(this.info[0].settings[0]);
  }
);

// Scenario: PSEUDO-10 Modificar la información de un miembro y verificar el cambio

Then(
  "el administrador modifica la informacion del miembro pseudo",
  function () {
    Members.fillModifyMemberFormPseudo(this.info[0].newMember[0]);
  }
);
