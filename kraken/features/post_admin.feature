Feature: Administración de Publicaciones

@user1 @web
Scenario: Post-01 - Verificar que un administrador puede crear una nueva publicación con título y contenido.
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
  And I enter text "My first e2e post"
  And I wait for 1 seconds
  And I click on Begin writing input
  And I wait for 1 seconds
  And I enter text "My first e2e post"
  And I wait for 7 seconds
  And I check post is saved as draft

@user2 @web
Scenario: Post-02 - Verificar que un administrador puede publicar un post existente.
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
  And I enter text "My first e2e post"
  And I wait for 1 seconds
  And I click on Begin writing input
  And I wait for 1 seconds
  And I enter text "My first e2e post"
  And I wait for 7 seconds
  And I check post is saved as draft 
  And I click on publish
  And I wait for 2 seconds
  And I click on continue to final review
  And I wait for 2 seconds
  And I click on publish post, right now
  And I wait for 3 seconds
  And I check post is published
