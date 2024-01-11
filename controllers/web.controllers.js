const { response } = require('express');
const Usuario = require('../models/ususario.model');

const controller = {};

//Index 
controller.index = (req, res = response) => {
    res.render('index', { title: 'Golden Bakery Shop' });
};
//Sobre Nosotros
controller.sobreNosotros = (req, res = response) => {
    res.render('sobreNosotros', { title: 'Sobre Nosotros' });
};
//Productos
controller.productos = (req, res = response) => {
    res.render('productos', { title: 'Productos' });
};
//Contacto
controller.contacto = (req, res = response) => {
    res.render('contacto', { title: 'Contacto' });
};
//Iniciar sesión
controller.iniciar = (req, res = response) => {
    res.render('iniciar', { title: 'Iniciar Sesión' });
};
//Crear Cuenta
controller.crear = (req, res = response) => {
    res.render('crearCuenta', { title: 'Crear Cuenta' });
};
//Recuperar contraseña
controller.resetPassword = (req, res = response) => {
    res.render('reset-password', { title: 'Recuperar Contraseña' });
};

//Peticiones Post

controller.saveUsuario = async (req, res = response) => {
    const body = req.body;

    try {
        const usuario = new Usuario(body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};


controller.existe = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const usuario = await Usuario.findOne({ correo });

        if (correo && password === usuario.password) {
            res.status(200).send('éxito');
        } else {
            res.status(401).send('usuario no existe o error de login');
        }
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
};




module.exports = controller
