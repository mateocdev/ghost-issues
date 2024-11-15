Feature: Administracion de Publicaciones

Scenario: Crear una nueva publicacion como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  Then el administrador debería ver el panel de control
  Then hace clic en el boton de new post
  When el administrador puede ver la seccion de crear post
  Then hace click en el boton create post
  When el administrador ingresa un título "Nueva Publicación", "Contenido de la publicación"
  Then hace clic en el botón de guardar
  Then la publicación debería aparecer en la lista de publicaciones

Scenario: Publicar y despublicar una entrada como administrador
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo "mateo.castano1@yahoo.com" y una contraseña "1qa2w3ed$%"
  And hace clic en el botón de inicio de sesión
  Then el administrador debería ver el panel de control
  Then hace clic en el boton de new post
  When el administrador puede ver la seccion de crear post
  Then hace click en el boton create post
  When el administrador ingresa un título "uniandes", "Creando una nueva publicación"
  When el administrador publica la entrada
  Then luego despublica la entrada