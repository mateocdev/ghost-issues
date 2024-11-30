Feature: Administración de Publicaciones

@user1 @web
Scenario: Page-01: Crear una nueva pagina con título y contenido valido
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with valid random title and content
  And I wait for 10 seconds
  Then I check page is saved as draft

@user2 @web
Scenario: Page-02: Crear nueva Pagina con titulo que excede largo permitido
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with large title
  And I wait for 10 seconds
  Then I check page is not saved as draft

@user3 @web
Scenario: Page-03: Crear nueva Pagina con título o contenido en blanco
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with blank title or content
  And I wait for 10 seconds
  Then I check page is not saved as draft

@user4 @web
Scenario: Page-04: Publicar Pagina con título o contenido en blanco
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with blank title or content
  And I wait for 10 seconds
  And I click on publish
  And I wait for 2 seconds
  And I click on continue to final review
  And I wait for 2 seconds
  And I click on publish, right now
  And I wait for 3 seconds
  And I check page is published

@user5 @web
Scenario: Page-05: Editar Pagina a título y contenido en blanco y publicar
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with blank title or content
  And I wait for 7 seconds
  And I go back to Page list
  And I wait for 2 seconds
  And I click on draft Pages
  And I wait for 2 seconds
  And I click on edit Page
  And I wait for 2 seconds
  And I blank title and content
  And I wait for 9 seconds
  And I click on publish
  And I wait for 2 seconds
  And I click on continue to final review
  And I wait for 2 seconds
  And I click on publish, right now
  And I wait for 3 seconds
  And I check page is published

@user6 @web
Scenario: Page-06: Publicar pagina nueva con título y contenido.
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with valid random title and content
  And I wait for 10 seconds
  And I check page is saved as draft
  And I click on publish
  And I wait for 2 seconds
  And I click on continue to final review
  And I wait for 2 seconds
  And I click on publish, right now
  And I wait for 3 seconds
  And I check page is published