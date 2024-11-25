Feature: Pool de Datos (Pseudo) Aleatorio Dinámico

# Scenario: PDAD-01 Generar un usuario aleatorio y verificar su creación.
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de miembros
#   Then el administrador hace click en nuevo miembro
#   Then el administrador ingresa los datos del nuevo miembro con faker
#   Then el administrador hace click en el botón de guardar


# Scenario: PDAD-02 Crear un tag aleatorio y validar su creacion
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de tags
#   Then el administrador hace click en nuevo tag
#   Then el administrador ingresa los datos del nuevo tag con faker
#   Then el administrador hace click en el botón de guardar
#   Then el administrador ingresa a la pagina de tags

Scenario: PDAD-03 Modificar un miembro con un email invalido.
  Given el administrador esta en la pagina de inicio de sesion
  When el administrador ingresa un correo y una contraseña
  When hace clic en el botón de inicio de sesión
  When el administrador ingresa a la pagina de miembros
  Then el administrador hace click en cualquier miembro
  Then el administrador ingresa un email invalido
  Then el administrador hace click en el botón de guardar
  Then el administrador tiene un error

# Scenario: APD-04 Crear un newsletter y verificar su existencia.
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de newsletters
#   Then el administrador hace click en nuevo newsletter
#   Then el administrador ingresa los datos del nuevo newsletter
#   When el administrador hace click en el botón de guardar newsletter
#   Then el administrador deberia ver el nuevo newsletter en la lista de newsletters

# Scenario: APD-05 Modificar el titulo y la descripcion del sitio
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de configuracion
#   Then el administrador modifica el titulo y la descripcion del sitio
#   When el administrador hace click en el botón de guardar configuracion


# Scenario: APD-06 Modificar a un usuario y agregarle 500 caracteres en nota el maximo permitido
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de miembros
#   Then el administrador hace click en el miembro existente
#   Then el administrador modifica la nota del miembro
#   Then el administrador hace click en el botón de guardar
#   Then el administrador ingresa a la pagina de miembros

# Scenario: APD-07 Modificar a un usuario y agregarle mas de 500 caracteres que no son los permitidos.
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de miembros
#   Then el administrador hace click en el miembro existente
#   Then el administrador modifica la nota del miembro y agrega mas de 500 caracteres
#   Then el administrador hace click en el botón de guardar
#   Then el administrador debe ver un error de que la nota no puede tener mas de 500 caracteres


# Scenario: APD-08 Actualizar informacion de un tag y verificar la actualizacion
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de tags
#   Then el administrador hace click en el tag existente
#   Then el administrador modifica la informacion del tag
#   Then el administrador hace click en el botón de guardar
#   Then el administrador ingresa a la pagina de tags

# Scenario: APD-09 Agregar staff como contribuidor a la plataforma
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de staff
#   Then el administrador hace click en invitar gente
#   Then el administrador ingresa un correo y selecciona role de contribuidor
#   Then el administrador hace click en el botón de invitar

# Scenario: APD-10 Modificar la información de un miembro y verificar el cambio
#   Given el administrador esta en la pagina de inicio de sesion
#   When el administrador ingresa un correo y una contraseña
#   When hace clic en el botón de inicio de sesión
#   When el administrador ingresa a la pagina de miembros
#   Then el administrador hace click en el miembro existente
#   Then el administrador modifica la informacion del miembro
#   Then el administrador hace click en el botón de guardar
#   Then el administrador ingresa a la pagina de miembros