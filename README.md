
# Golden Bakery Shop - Aplicación Web

## Descripción del Proyecto

Golden Bakery Shop es una aplicación web para una panadería especializada en repostería y postres. Este proyecto es un sitio web informativo que permite a los usuarios ver diversos productos, crear listas de favoritos y monitorear la disponibilidad de productos en stock.

## Funcionalidad

- **Inicio de sesión a través de base de datos:** Permite el acceso a funciones personalizadas.
- **Listas de favoritos:** Los usuarios pueden guardar productos favoritos para futuras consultas.
- **Seguimiento de productos en stock:** Muestra la disponibilidad actual de los productos en stock.
- **Creación de lista de compras:** Funcionalidad para gestionar una lista de compras sin opción de compra en línea.

## Arquitectura

- **Frontend:** Implementado en React, proporciona una interfaz de usuario interactiva.
- **Backend:** Node.js con Express para manejar solicitudes y rutas.
- **Base de Datos:** _[especifique el tipo de base de datos]_, usada para almacenar datos de usuarios, productos y disponibilidad.
- **Autenticación:** _[describa el mecanismo de autenticación, si es aplicable]_.

## Tecnologías y Versiones


- Node.js: v18.16.0
- Npm: 8.19.2
- Express: 4.18.2
- Nodemon: 3.0.2
- Base de Datos: MongoDB
- pug: 3.0.2
- tailwindcss: 3

## Hosts y Servicios

- **Repositorio:** https://github.com/GOLDEN-BAKERY/GOLDEN
- **Proveedor de Hosting:** _[nombre del proveedor de hosting]_
- **Servidor de la Aplicación:** _[información del servidor de la aplicación]_
- **Servidor de la Base de Datos:** _[información del servidor de la base de datos]_
- **Balanceador de Carga:** _[información sobre el balanceador de carga, si se utiliza]_

## Instrucciones de Instalación y Ejecución

Para ejecutar el proyecto "Golden Bakery Shop" en tu computadora local, sigue estos pasos:

### Instalación de Dependencias

Antes de ejecutar el proyecto, necesitas instalar todas las dependencias. Abre la terminal y navega hasta el directorio del proyecto, luego ejecuta el siguiente comando:

```javascript
npm install
```

Este comando instalará todos los paquetes necesarios listados en tu archivo `package.json`.

### Ejecución de la Aplicación

Después de instalar las dependencias, puedes iniciar la aplicación ejecutando:

```javascript
npm start
```

Este comando iniciará el servidor Node.js y abrirá la aplicación. Normalmente, la aplicación estará disponible en `http://localhost:8088` en tu navegador (el puerto puede variar según tu configuración).

```javascript
npm run dev
```

Este comando iniciará el servidor usando `nodemon`. Nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js reiniciando automáticamente el servidor cada vez que se detectan cambios en los archivos del proyecto.

```javascript
npm run build
```

Este comando ejecutará el proceso de purga de estilos no utilizados y aplicará las utilidades de Tailwind para crear una hoja de estilos optimizada.

