const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    nombre:{
        type: String,
       required: [true, 'El nombre es obligatorio']
    },
    correo:{
        type: String,
       required: [true ,'El correo es obligstorio'],
        unique : true

    },
    password:{
        type: String,
       required: [true, 'El password es obligstorio'],
    },
    telefono:{
        type: String,
       required: [true, 'El numero de contacto es obligstorio'],
    },
    img:{
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE', 'VENTAS_ROLE'],
        default: 'USER_ROLE' // Establece USER_ROLE como valor predeterminado
    }
,
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default:false
    }
})

module.exports = model('Usuario', UsuarioSchema);
