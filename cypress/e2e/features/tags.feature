Feature: Administración de Etiquetas

Scenario: Crear una nueva etiqueta como administrador
  Given el administrador ha iniciado sesión
  And el administrador está en la página de etiquetas
  When el administrador crea una nueva etiqueta "Etiqueta de Prueba"
  Then la etiqueta debería aparecer en la lista de etiquetas

Scenario: Asignar una etiqueta a una publicación como administrador
  Given el administrador ha iniciado sesión
  And el administrador tiene una publicación existente
  And el administrador está en la página de edición de la publicación
  When el administrador asigna la etiqueta "Etiqueta de Prueba" a la publicación
  Then la etiqueta debería estar visible en la publicación