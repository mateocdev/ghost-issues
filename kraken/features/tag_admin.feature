Feature: Administración de Tags

@user1 @web
Scenario: Tag-01 - verificar que un administrador puede crear una nueva etiqueta con solo el nombre
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 1 seconds
  And I click on Tags menu on sidebar
  And I wait for 1 seconds
  And I click New tag
  And I wait for 2 seconds
  And I click on Tag name input
  And I wait for 1 seconds
  And I enter text "e2e-tag"
  And I wait for 1 seconds
  And I click on save button
  And I wait for 2 seconds
  And I check tag is saved
  Then I send a signal to user 2 containing "tag_created"

@user2 @web
Scenario: Tag-02 - Verificar que un administrador puede asignar etiquetas a una publicación.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 1 seconds
  And I click on Posts menu on sidebar
  And I wait for 1 seconds
  And I click New Post
  And I wait for 2 seconds
  And I click on Post title input
  And I wait for 1 seconds
  And I enter text "Post e2e with tag"
  And I wait for 1 seconds
  And I click on Begin writing input
  And I wait for 1 seconds
  And I enter text "Post e2e with tag"
  And I wait for 7 seconds
  And I check post is saved as draft 
  And I wait for a signal containing "tag_created" for 60 seconds
  And I click on post settings button
  And I wait for 2 seconds
  And I click on tags input
  And I wait for 1 seconds
  And I enter text "e2e-tag"
  And I wait for 1 seconds
  And I confirm adding tag to post
  And I wait for 1 seconds
  Then I force post to be saved returning to post list