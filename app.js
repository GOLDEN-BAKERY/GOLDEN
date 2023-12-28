require('dotenv').config();

const express = require('express')
const app = express()

//Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views')

//
app.use(express.static('img'));

//Servir Plantillas Pug desde Servidor Express:
app.get('/', (req, res) => {
    res.render('index', { title: 'Golden Bakery Shop' });
});
app.get('/sobreNosotros', (req, res) => {
    res.render('sobreNosotros', { title: 'Sobre Nosotros' });
});


app.listen(process.env.PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${process.env.PORT}`)
});
