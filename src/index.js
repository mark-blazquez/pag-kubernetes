//varibales 
const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const morgan = require('morgan');
const path = require('path');
const req = require("express/lib/request");
const url = 'http://localhost:80/pedidos.json';
let options = { json: true };
const request = require('request');
//para escribir en un archivo
const fs = require('fs');
const json_pedidos = fs.readFileSync(path.join(__dirname ,'pedidos.json'),'utf-8')
const pedidos = JSON.parse(json_pedidos)
var cors = require('cors')
//numero  de puerto
app.set('port',3000);

//middleware
//formulario
app.use(cors())

//entender formularios 
app.use(express.urlencoded({extended: false}));
//procesar datos json
app.use(express.json());
//morgan-para ver la respuestas desde consola
app.use(morgan('dev'))

//rutas 
//conectando react con node -- para que cualquier get muestre index
/*app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../asador/build', 'index.html'));
});*/

//---------------------------------------------------------------------------------------------------
// metodo get - examina los elementos del json local 
//esto se hace para poder escribir sobre este fichero

//app.use(express.static( path.join(__dirname ,'/../asador/build')));

//const pedidos = require("../pedidos.json")

//ruta base devuelve el objeto pedidos a front end para que los muestre
app.get("/api", (req, res) => {
    //console.log(pedidos);
    res.send({pedidos: pedidos})
});

//---------------------------------------------------------------------------------------------------
//metodo post pasando un json local 
app.post('/api/nuevo',(req,res) => {
    //obtenemos el pedido del form 
    console.log(req.body)
    const newpedido = req.body
    console.log(newpedido)

    
    //añadir id al pedido
    //var id = Object.keys(pedidos).length + 1;
    //var id = (pedidos).length + 1;  
    //bject.keys(newpedido).add(id)
    //console.log(newpedido)

    //console.log(id)
    //ver el nuevo pedido  
    //console.log(newpedido)
    //añadir el nuevo pedido al json obtenido del servidor 
    pedidos.push(newpedido)
    //cojemos el json de epdidos y lo guaradmos como texto
    const json_pedidos = JSON.stringify(pedidos)
    fs.writeFileSync(path.join(__dirname ,'pedidos.json'), json_pedidos,'utf-8')
    //ver el nuevo json con todos los pedidos
    //console.log(pedidos);
    res.send("añadido")

});


//---------------------------------------------------------------------------------------------------
//metodo delete pasando un id a otro json 


//---------------------------------------------------------------------------------------------------
//inicio de sesion con google
var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {Claves} = require('./claves/claves');

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user , done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            callbackURL: '/auth/google/callback',
            clientID: Claves.client_id,
            clientSecret: Claves.client_secret,
        },
        (accessToken, refreshToken, profile, cb) => {
            //console.log(accessToken)
            //console.log(profile)
            if(profile._json.email === "blazquezmark97@gmail.com"){
                console.log("correct user")
            }else{
                // fail        
                console.log("bad user")
            }
            return cb (null, profile);
        }
    )
)
//google passport routes
app.get('/api/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/succes',
        failureRedirect: '/error'
    })
);

app.get('/error', (req, res) => {
    res.send('error')
  });
app.get('/succes', (req, res) => {
    res.send('succes')
});
//---------------------------------------------------------------------------------------------------


//creacion del servidor
app.listen(app.get('port'),()=>{
    console.log ("servidor corriendo en el puerto 3000")
})