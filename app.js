require('dotenv').config();

const express = require('express');
const app = express()

const { dbConection } = require('./database/configDB');

//Rutas
app.use(require('./routes/web.routes'))

      /*Midellwar*/
// Configuración de Archivos estaticos
app.use(express.static('img'));
app.use(express.static('public'));
//Parsear  el cuerpo de las peticiones JSON
app.use(express.json());

//Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views')



//Inialización de servidor
app.listen(process.env.PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${process.env.PORT}`)
});

//Conectar base de datos
dbConection();
