Feature: Administración de Usuarios

Scenario: Invitar a un nuevo miembro como administrador
  Given el administrador ha iniciado sesión como administrador
  And está en la página de miembros
  When el administrador invita a un nuevo miembro con el correo "nuevo@miembro.com"
  Then el nuevo miembro debería aparecer en la lista de miembros

Scenario: Cambiar el rol de un miembro existente como administrador
  Given el administrador ha iniciado sesión como administrador
  And está en la página de miembros
  And hay un miembro existente "miembro@ejemplo.com"
  When el administrador cambia el rol del miembro a "Editor"
  Then el rol del miembro debería ser "Editor"