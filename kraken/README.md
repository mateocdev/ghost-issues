# Proyecto de Pruebas Automatizadas con Kraken

Este repositorio contiene un conjunto de pruebas automatizadas para la ABP Ghost utilizando Kraken.
Se ha cubierto 10 escenarios de 5 funcionalidades. Estas pruebas automatizadas se realizan a dos versiones
del ABP, una version base ZZZ y una RC YYY, durante la implementacion de las pruebas se utilizo
como version base Ghost 4.5.0 y como version RC Ghost 5.95.0. En resumen este proyecto contiene:

- Pruebas e2e en kraken para la version base y rc
- pruebas de regresion visual entre la version base y la rc 

## Contenidos

- [1. Requisitos Previos](#requisitos-previos)
- [2. Ejecutar Pruebas e2e version base](https://github.com/mateocdev/ghost-issues/blob/master/kraken/base/README.md)
- [3. Ejecutar Pruebas e2e version rc](https://github.com/mateocdev/ghost-issues/blob/master/kraken/rc/README.md)
- [4. Ejecutar Pruebas de regresion visual](#ejecutar-las-pruebas-de-regresion-visual)

## Requisitos Previos

Antes de comenzar con la instalación, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (normalmente incluido con Node.js)
- [Git](https://git-scm.com/)

Ahora debes tener una copia de nuestro proyecto

**Clona este repositorio a tu máquina local:**

   ```bash
   git clone https://github.com/tu-usuario/ghost-issues.git
   ```

**Antes de continuar, primero debe ejecutar las pruebas e2e para la version base y rc**
**siguiendo las instrucciones proporcionadas en sus respectivos README.**

- [Ejecutar Pruebas e2e version base](https://github.com/mateocdev/ghost-issues/blob/master/kraken/base/README.md)
- [Ejecutar Pruebas e2e version rc](https://github.com/mateocdev/ghost-issues/blob/master/kraken/rc/README.md)

## Ejecutar las pruebas de regresion visual
Una vez ejecutadas las pruebas e2e para ambas versiones se generaran los screenshots necesarios en los directorios:
- rc/screenshots
    - carpetas con el identificador del escenario y dentro las imagenes de cada step
- base/screenshots
    - carpetas con el identificador del escenario y dentro las imagenes de cada step

**Importante: para leer la documentacion de la herramienta que ejecuta las pruebas de regresion visual lea el siguiente README:**
- [Documentacion de herramienta de regresion visual](https://github.com/mateocdev/ghost-issues/blob/master/kraken/vrtool/README.md)

**Ahora esta listo para generar las pruebas de regresion visual. Dentro de la carpeta raiz del repositorio clonado:**
**Instala las dependencias de la herramienta de regresion visual (BackStopJS):**

Ejecuta el siguiente comando para instalar las dependencias necesarias para ejecutar la regresion visual:

```bash
   cd ghost-issues/kraken
   npm install
```

**Instala los siguientes comandos en diferentes instancias de tu shell:**

Debido a que BackstopJS necesita URLs para poder funcionar y probrar los escenarios
Los screenshots capturados previamente se expondran localmente con un http-server
Shell #1
```bash
cd ghost-issues/kraken
npm run serve-vr-base
```

Shell #2
```bash
cd ghost-issues/kraken
npm run serve-vr-rc
```

Ahora si estamos listos para ejecutar el script que inicia las pruebas de regresion visual.
El codigo de esta herramienta basada en BackstopJS se encuentra en la carpeta cd ghost-issues/kraken/vrtool
Shell #3
```bash
cd ghost-issues/kraken
npm run start
```
