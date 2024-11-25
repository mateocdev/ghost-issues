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
Scenario: Page-03: Crear nueva Pagina con titulo que contiene caracteres especiales
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with special characters title
  And I wait for 10 seconds
  Then I check page is saved as draft
  Then I send a signal to user 4 containing "special_post_created"

@user4 @web
Scenario: Page-04: Buscar pagina con titulo que contiene caracteres especiales
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for a signal containing "special_post_created" for 60 seconds
  And I click on search button
  And I wait for 1 seconds
  And I enter search term
  And I wait for 2 seconds
  Then I got no results for the search term

@user5 @web
Scenario: Page-05: Crear nueva Pagina con título o contenido en blanco
  Given I am a logged in admin with "<USERNAME>" and "<PASSWORD>" at "<GHOST_URL>"
  And I wait for 1 seconds
  When I click on Pages menu on sidebar
  And I wait for 1 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter Page info with blank title or content
  And I wait for 10 seconds
  Then I check page is not saved as draft

@user6 @web
Scenario: Page-06: Publicar Pagina con título o contenido en blanco
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

@user7 @web
Scenario: Page-07: Editar Pagina a título y contenido en blanco y publicar
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

@user8 @web
Scenario: Page-08: Publicar pagina nueva con título y contenido.
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