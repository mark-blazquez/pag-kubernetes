const express = require ('express');
const app = express();
//numero  de puerto
app.set('port',8080);

//routes
//las lee desde el fichero routes 
app.use('/api/',require('./routes/routes.js'));


//middleware
//entender formularios 
app.use(express.urlencoded({extended: false}));
//procesar datos json
app.use(express.json());


//creacion del servidor
app.listen(app.get('port'),()=>{
    console.log ("servidor corriendo en el puerto 8080")
})