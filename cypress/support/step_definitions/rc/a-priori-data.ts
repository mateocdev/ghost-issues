import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Members from "../../page_object/members";

beforeEach(function () {
  cy.fixture("aprioriData").then((data) => {
    this.data = data;
  });
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
