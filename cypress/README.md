# Proyecto de Pruebas Automatizadas con Cypress

Este repositorio contiene un conjunto de pruebas automatizadas para la aplicación utilizando Cypress. Las pruebas están diseñadas para asegurar la correcta funcionalidad de las características clave desde la perspectiva de un administrador.

## Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución de Pruebas](#ejecución-de-pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Requisitos Previos

Antes de comenzar con la instalación, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) (normalmente incluido con Node.js)
- [Git](https://git-scm.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Instalación

Sigue estos pasos para configurar el entorno de prueba:

**Clona este repositorio a tu máquina local:**

   ```bash
   git clone https://github.com/tu-usuario/ghost-issues.git
   cd ghost-issues
   ```

**Instala las dependencias del proyecto:**

Ejecuta el siguiente comando para instalar Cypress y otras dependencias necesarias:

```bash
npm install
```


## Ejecución de Pruebas
Una vez que hayas instalado las dependencias, puedes ejecutar las pruebas de las siguientes maneras:

**Ejecución en la Interfaz de Usuario de Cypress:**

Instala cypress si no lo tienes instalado

```bash
npm install cypress --save-dev
```

Esto abrirá la interfaz gráfica de Cypress, donde puedes ver las pruebas en tiempo real.

```bash
npx cypress open
```

Una vez abierta la interfaz, selecciona el archivo de características que deseas ejecutar.

**Ejecución en la Línea de Comandos:**

Si prefieres ejecutar las pruebas en modo headless (sin interfaz gráfica), puedes hacerlo con:

```bash
npx cypress run
```

Esto ejecutará todas las pruebas en el directorio cypress/e2e.

**Ejecuccion script datos pseudoaleatorios:**

- Para poder crear datos pseudo aleatorios mediante faker-schema debemos ejectuar el siguiente comando:
```bash
node scripts/generateData.js
```
Esto generara datos pseudoaleatorios los cuales seran usados en la plataforma, podemos ver el archivo generado en fixtures/pseudoRandom.json



## Estructura del Proyecto
- cypress/

- e2e/: Contiene todos los archivos de prueba escritos en Gherkin.
- fixtures/: Aquí se encuentran los datos de prueba si son necesarios.
- support/page_object: Continene los archivos con patron de page object
- support/step_definitions/base: Contiene los archivos de cypress con page object y given when then para la version 4.5 de ghost
- support/step_definitions/rc: Contiene los archivos de cypress con page object y given when then para la version lastest de ghost
- features/: Archivos de características que describen los escenarios de prueba usando el lenguaje Gherkin.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.