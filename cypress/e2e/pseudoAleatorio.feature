Feature: Pool de Datos (Pseudo) Aleatorio Dinámico

Scenario: PDAD-01 Generar un usuario aleatorio y verificar su creación.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en nuevo miembro
  Then el administrador ingresa los datos del nuevo miembro con faker
  Then el administrador hace click en el botón de guardar


Scenario: PDAD-02 Crear un tag aleatorio y validar su creacion
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de tags
  Then el administrador hace click en nuevo tag
  Then el administrador ingresa los datos del nuevo tag con faker
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de tags

Scenario: PDAD-03 Modificar un miembro con un email invalido.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador ingresa un email invalido
  Then el administrador hace click en el botón de guardar
  Then el administrador tiene un error

Scenario: PDAD-04 Crear un newsletter con contenido aleatorio y verificar..
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de newsletters
  Then el administrador hace click en nuevo newsletter
  Then el administrador ingresa los datos del nuevo newsletter con faker
  When el administrador hace click en el botón de guardar newsletter
  Then el administrador deberia ver el nuevo newsletter en la lista de newsletters

Scenario: PAPD-05 Modificar el titulo y la descripcion del sitio con nombres aleatorios
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de configuracion
  Then el administrador modifica el titulo y la descripcion del sitio aleatorio
  When el administrador hace click en el botón de guardar configuracion

Scenario: PAPD-06 Cambiar aleatoriamente con texto aleatorio de 500 caractares.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador modifica la nota del miembro con texto aleatorio
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de miembros

Scenario: PAPD-07 Cambiar aleateoriamente con texto aleatorio de mas de 500 caracteres no permitidos.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador modifica la nota del miembro y agrega mas de 500 caracteres aleatorios
  Then el administrador hace click en el botón de guardar
  Then el administrador debe ver un error de que la nota no puede tener mas de 500 caracteres

Scenario: PAPD-08 Actualizar un tag con un nombre aleatorio
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de tags
  Then el administrador hace click en un tag aleatorio
  Then el administrador modifica la informacion del tag con informacion aleatoria
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de tags

Scenario: PAPD-09 Agregar a staff como contribuidor con datos aleatorios a la plataforma
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de staff
  Then el administrador hace click en invitar gente
  Then el administrador ingresa un correo aleatorio y selecciona role de contribuidor
  Then el administrador hace click en el botón de invitar

Scenario: PAPD-10 Cambiar aleatoriamente la informacion de un miembro y verificar el cambio
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador modifica la informacion del miembro aleatoriamente
  Then el administrador hace click en el botón de guardar
  Then el administrador ingresa a la pagina de miembros