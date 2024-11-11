Feature: Administración de miembros

@user1 @web
Scenario: Member-01 - verificar que un administrador puede crear una nueva etiqueta con solo el nombre
  Given I am a logged in admin with "<USERNAME1>" and "<PASSWORD1>"
  And I wait for 1 seconds
  When I click on Members menu on sidebar
  And I wait for 1 seconds
  And I click New Member button
  And I wait for 2 seconds
  And I click on Member name input
  And I wait for 1 seconds
  And I enter text "Joe Doe"
  And I wait for 1 seconds
  And I enter a random Member email address
  And I wait for 1 seconds
  And I click on save Member button
  And I wait for 2 seconds
  And I check Member is saved
  Then I send a signal to user 2 containing "member_created"

@user2 @web
Scenario: Member-02 - verificar que un administrador puede buscar un miembro existente
  Given I am a logged in admin with "<USERNAME1>" and "<PASSWORD1>"
  And I wait for 1 seconds
  When I click on Members menu on sidebar
  And I wait for a signal containing "member_created" for 60 seconds
  And I click on search members bar
  And I wait for 1 seconds
  And I enter text "Joe Doe"
  And I wait for 2 seconds
  And I check there are results in the table