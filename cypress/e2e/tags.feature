Feature: Administración de Etiquetas

Scenario: Crear una nueva etiqueta como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  And el administrador está en la página de etiquetas
  When el administrador crea una nueva etiqueta "Etiqueta de Prueba"
  Then la etiqueta debería aparecer en la lista de etiquetas

Scenario: Asignar una etiqueta a una publicación como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  And el administrador tiene una publicación existente
  Then hace clic en el boton de new post
  When el administrador puede ver la seccion de crear post
  Then hace click en el boton create post
  When el administrador ingresa un título "Nueva Publicación", "Contenido de la publicación"
  Then se agrega una etiqueta a la publicacion "Etiqueta de Prueba"
  Then hace clic en el botón de guardar
  Then la publicación debería aparecer en la lista de publicaciones

Scenario: Crear una nueva etiqueta como administrador base
  Given el administrador esta en la pagina de inicio de sesion base
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%" base
  And hace clic en el botón de inicio de sesión base
  And el administrador está en la página de etiquetas base
  When el administrador crea una nueva etiqueta "Etiqueta de Prueba" base
  Then la etiqueta debería aparecer en la lista de etiquetas base

Scenario: Asignar una etiqueta a una publicación como administrador base
  Given el administrador esta en la pagina de inicio de sesion base
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%" base
  And hace clic en el botón de inicio de sesión base
  And el administrador tiene una publicación existente base
  Then hace clic en el boton de new post base
  When el administrador puede ver la seccion de crear post base
  Then hace click en el boton create post base
  When el administrador ingresa un título "Nueva Publicación", "Contenido de la publicación" base
  Then se agrega una etiqueta a la publicacion "Etiqueta de Prueba" base
  Then hace clic en el botón de guardar base
  Then la publicación debería aparecer en la lista de publicaciones base


