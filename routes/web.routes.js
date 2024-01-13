const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const controller = require('../controllers/web.controllers');
const { validarCampos } = require('../middlewares/validar-campos');

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
router.post('/crearCuenta',
[check('nombre', 'El nombre es obligatorio').not().isEmpty(),
check('correo').isEmail().withMessage('Ingrese un correo electrónico válido'),
check('telefono', 'El teléfono es obligatorio y debe seguir el formato correcto').matches(/^[0-9]{9}$/),
check('password', 'El password debe ser más de 6 letras').isLength({ min: 6 }),
validarCampos],
controller.saveUsuario )
router.post('/iniciar', controller.existe);


module.exports = router