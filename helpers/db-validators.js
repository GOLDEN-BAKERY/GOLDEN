const Role = require('../models/role');
const Usuario = require('../models/ususario.model');


const esRoleValido = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la Base de Datos`);
    }
}

const comprobarEmail = async( correo) => {

    const existeCorreo = await  Usuario.findOne({correo});
    if (existeCorreo){
        throw new Error(`El usuario con ${correo} ya esta registrado. `);
    }
}

module.exports = {
    esRoleValido,
    comprobarEmail
}