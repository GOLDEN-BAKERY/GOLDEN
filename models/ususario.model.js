const {Shema, model} = require('mongoose');

const usuarioShema = Shema({

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
    img:{
        type: String
    },
    rol:{
        type: String,
        required: true,
        emun:['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default:false
    }
})

model.export = model('Usuario', usuarioShema);