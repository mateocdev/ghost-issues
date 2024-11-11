Feature: Administración de miembros

@user1 @web
Scenario: Comment-01: Verificar que un administrador puede ver la lista de comentarios en una publicación.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 1 seconds
  And I click on settings menu on sidebar
  And I wait for 2 seconds
  And I click on access settings menu on sidebar
  And I wait for 1 seconds
  And I click edit access settings
  And I wait for 2 seconds
  And I set allow all members to comment
  And I wait for 2 seconds
  And I click on save comments config
