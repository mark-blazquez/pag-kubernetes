const express = require ('express');
const app = express();
app.set('port',8080);

//routes

// route /
/*app.get('/',(req, res)=>{
    res.sendFile('index.html', { root: __dirname });
})*/
app.use( '/' , express.static( 'asador/build' ) );
//middleware

//server definition 
app.listen(app.get('port'),()=>{
    console.log ("servidor corriendo en el puerto 8080")
})