Feature: Pool de Datos (Pseudo) Aleatorio Dinámico

Scenario: PSEUDO-01 Crear un usuario y validar su creación
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en nuevo miembro
  Then el administrador ingresa los datos del nuevo miembro pseudo
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de miembros
  Then el administrador deberia ver el nuevo miembro en la lista de miembros

Scenario: PSEUDO-02 Crear un tag y validar su creacion
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de tags
  Then el administrador hace click en nuevo tag
  Then el administrador ingresa los datos del nuevo tag pseudo
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de tags

Scenario: PSEUDO-03 Modificar un miembro con un email aleatorio.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador ingresa un email aleatorio
  Then el administrador hace click en el botón de guardar

Scenario: PSEUDO-04 Crear un newsletter y verificar su existencia.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de newsletters
  Then el administrador hace click en nuevo newsletter
  Then el administrador ingresa los datos del nuevo newsletter pseudo
  When el administrador hace click en el botón de guardar newsletter
  Then el administrador deberia ver el nuevo newsletter en la lista de newsletters

Scenario: PSEUDO-05 Modificar el titulo y la descripcion del sitio
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de configuracion
  Then el administrador modifica el titulo y la descripcion del sitio pseudo
  When el administrador hace click en el botón de guardar configuracion


Scenario: PSEUDO-06 Modificar a un usuario y agregarle 500 caracteres en nota el maximo permitido
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador modifica la nota del miembro pseudo
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de miembros

Scenario: PSEUDO-07 Modificar a un usuario y agregarle mas de 500 caracteres que no son los permitidos.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador modifica la nota del miembro y agrega mas de 500 caracteres
  Then el administrador hace click en el botón de guardar


Scenario: PSEUDO-08 Actualizar informacion de un tag y verificar la actualizacion
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de tags
  Then el administrador hace click en un tag aleatorio
  Then el administrador modifica la informacion del tag pseudo
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de tags

Scenario: PSEUDO-09 Agregar staff como contribuidor a la plataforma
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de staff
  Then el administrador hace click en invitar gente
  Then el administrador ingresa un correo y selecciona role de contribuidor pseudo
  Then el administrador hace click en el botón de invitar

Scenario: PSEUDO-10 Modificar la información de un miembro y verificar el cambio
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador modifica la informacion del miembro pseudo
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de miembros