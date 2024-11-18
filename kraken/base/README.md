# Proyecto de Pruebas Automatizadas con Kraken

Este repositorio contiene un conjunto de pruebas automatizadas para la aplicación Ghost version BASE utilizando Kraken.
Se ha cubierto 10 escenarios de 5 funcionalidades.

## Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Requisitos Previos

Los mismos que se solicitaron anteriormente.

## Instalación

Sigue estos pasos para configurar el entorno de prueba:

**Clona este repositorio a tu máquina local:**

   ```bash
   cd ghost-issues/kraken/base
   ```

**Instala las dependencias del proyecto:**

Ejecuta el siguiente comando para instalar Kraken y otras dependencias necesarias:

```bash
npm install
```

## Ejecución de Pruebas
Abrir el archivo properties.json (ubicado en la raiz del proyecto) y asegurese de proporcionar:
- USERNAME: Nombre de usuario de cuenta administrador de Ghost
- PASSWORD: Contrasena de la cuenta administrador de Ghost
- GHOST_URL: URL de la aplicacion Ghost version base (ej. http://localhost:8080/ghost/#/signin)
**IMPORTANTE: La version base a utilizar debe ser Ghost 5.95.0, las pruebas e2e estan construidas para esa version**

**Ejecución en la Interfaz de Usuario de Kraken:**

Esto abrirá la interfaz gráfica de Kraken, donde puedes ver las pruebas en tiempo real.

```bash
./node_modules/kraken-node/bin/kraken-node run
```

Esto ejecutará todas las pruebas que se encuentran en los archivos .feature dentro de la carpeta features.
Y adicionalmente tomara screenshots utilizando la herramienta BackstopJS

## Estructura del Proyecto
- Kraken/base

- features/: Contiene todos los archivos de prueba escritos en Gherkin.
   - web/step_definitions: definicion de los diferentes pasos usados en las diferentes escenarios de pruebas.
   - web/pages: Clases page object.
   - web/helpers: Utilitarios, como una funcion para capturar screenshots en cada step
   - features/: Archivos de características que describen los escenarios de prueba usando el lenguaje Gherkin.
- properties.json: Aquí se encuentran los datos que se inyectan a las pruebas, como las credenciales de sign in y la URL.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
