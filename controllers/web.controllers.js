const controller = {};

//Index 
controller.index = (req, res) => {
    res.render('index', { title: 'Golden Bakery Shop' });
};
//Sobre Nosotros
controller.sobreNosotros = (req, res) => {
    res.render('sobreNosotros', { title: 'Sobre Nosotros' });
};
//Productos
controller.productos = (req, res) => {
    res.render('productos', { title: 'Productos' });
};
//Contacto
controller.contacto = (req, res) => {
    res.render('contacto', { title: 'Contacto' });
};
//Iniciar sesión
controller.iniciar = (req, res) => {
    res.render('iniciar', { title: 'Iniciar Sesión' });
};
//Crear Cuenta
controller.crear = (req, res) => {
    res.render('crearCuenta', { title: 'Crear Cuenta' });
};
//Recuperar contraseña
controller.resetPassword = (req, res) => {
    res.render('reset-password', { title: 'Recuperar Contraseña' });
};




module.exports = controller

