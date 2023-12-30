const express = require('express');
const router = express.Router();
const controller = require('../controllers/web.controllers')


//Servir Plantillas Pug desde Servidor Express:
//Index
router.get('/', controller.index) 
//Sobre Nosotros
router.get('/sobreNosotros', controller.sobreNosotros);
//Productos
router.get('/productos', controller.productos );
//Contacto
router.get('/contacto', controller.productos);
//Iniciar sesión
router.get('/iniciar', controller.iniciar);
//Crear Cuenta
router.get('/crearCuenta', controller.crear);
//Recuperar contraseña
router.get('/reset-password', controller.resetPassword);

module.exports = router