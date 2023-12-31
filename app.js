require('dotenv').config();

const express = require('express')
const app = express()



//Rutas
app.use(require('./routes/web.routes'))

//Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views')

// Configuración de Archivos estaticos
app.use( express.static('img'));
app.use(express.static('public'));

//Inialización de servidor
app.listen(process.env.PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${process.env.PORT}`)
});
