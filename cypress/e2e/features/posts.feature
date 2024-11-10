Feature: Administración de Publicaciones

Scenario: Crear una nueva publicación como administrador
  Given el administrador ha iniciado sesión
  And el administrador está en la página de creación de publicaciones
  When el administrador ingresa un título "Nueva Publicación" y contenido "Este es el contenido de la publicación"
  And hace clic en el botón de guardar
  Then la publicación debería aparecer en la lista de publicaciones

Scenario: Publicar y despublicar una entrada como administrador
  Given el administrador ha iniciado sesión
  And el administrador tiene una publicación existente
  When el administrador publica la entrada
  And luego despublica la entrada
  Then la entrada no debería estar visible al público