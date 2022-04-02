const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const morgan = require('morgan');

//numero  de puerto
app.set('port',8080);

//middleware
//entender formularios 
app.use(express.urlencoded({extended: false}));
//procesar datos json
app.use(express.json());
//morgan
app.use(morgan('dev'))

//routes
//las lee desde el fichero routes declaramos que la ruta tenga antes /api
app.use(require('./routes/routes.js'));
//app.use('/api',require('./routes/routes.js'));

//creacion del servidor
app.listen(app.get('port'),()=>{
    console.log ("servidor corriendo en el puerto 8080")
})