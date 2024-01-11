const express = require('express');
const router = express.Router();
const Usuario = require('../models/ususario.model');
const controller = require('../controllers/web.controllers')

//Index
router.get('/', controller.index) 
//Sobre Nosotros
router.get('/sobreNosotros', controller.sobreNosotros);
//Productos
router.get('/productos', controller.productos );
//Contacto
router.get('/contacto', controller.contacto);
//Iniciar sesión
router.get('/iniciar', controller.iniciar);
//Crear Cuenta
router.get('/crearCuenta', controller.crear);
//Recuperar contraseña
router.get('/reset-password', controller.resetPassword);


//Peticiones POST
router.post('/crearCuenta', controller.saveUsuario );
router.post('/iniciar', controller.existe);


module.exports = router