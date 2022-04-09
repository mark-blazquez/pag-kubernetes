const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const morgan = require('morgan');
const path = require('path');
const req = require("express/lib/request");
const url = 'http://localhost:80/pedidos.json';
let options = { json: true };
const request = require('request');

//numero  de puerto
app.set('port',3000);

//middleware
//entender formularios 
app.use(express.urlencoded({extended: false}));
//procesar datos json
app.use(express.json());
//morgan
app.use(morgan('dev'))

//routes
//conectando express con node
/*app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../asador/build', 'index.html'));
});*/

//rutas
//---------------------------------------------------------------------------------------------------
// metodo get - examina los elementos del json local 
const pedidos = require("./pedidos.json")
app.use( '/' , express.static( path.join(__dirname, '/asador/build')));

app.get('/',(req,res) => {
    console.log(pedidos)
})


//---------------------------------------------------------------------------------------------------
//metodo post pasando un json local 
app.post('/',(req,res) => {
    res.send('index de la pagina')

    //añadir id al pedido
    var id = Object.keys(pedidos).length + 1;
    //console.log(id)
    const newpedido = {id, ...req.body}
    //ver el nuevo pedido  
    //console.log(newpedido)
    //añadir el nuevo pedido al json obtenido del servidor 
    pedidos.push(newpedido)

    //ver el nuevo json con todos los pedidos
    console.log(pedidos);
});


//---------------------------------------------------------------------------------------------------
//metodo delete pasando un id
app.delete('/:id',(req,res) => {
    res.send('index de la pagina')
    request(url, options, (error, res, body) => {
        //obtengo los pedidos de el json y se guardan en la varible pedidos
        const pedidos = body
        //recupero el id pasado por parametro
        const {id} = req.params
        _.each(pedidos,(pedidos,i)=>{
            if (pedidos.id == id){
                pedidos.splice(i, 1)
            }
        })
    });
})

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
            console.log(accessToken)
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
app.get('/auth/google',
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