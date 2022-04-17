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
let pedidos = JSON.parse(json_pedidos)
var cors = require('cors')
//numero  de puerto
app.set('port',8080);

//middleware
//formulario
app.use(cors())

//entender formularios 
app.use(express.urlencoded({extended: false}));
//procesar datos json
app.use(express.json());
//morgan-para ver la respuestas desde consola
app.use(morgan('dev'))
app.set('view engine','ejs')
//---------------------------------------------------------------------------------------------------

//rutas pag gestion****
//app.use(express.static( path.join(__dirname, '../gestion/build')));


//---------------------------------------------------------------------------------------------------
// metodo get -devuelve el objeto pedidos a front end para que los muestre
app.get("/api", (req, res) => {
    //console.log(pedidos);
    res.send({pedidos: pedidos})
});
//---------------------------------------------------------------------------------------------------
//metodo post -pasando un json local --añade el pedido enviado del front end a los pedidso globales
app.post('/api/nuevo',(req,res) => {
    //obtenemos el pedido del form 
    //console.log(req.body)
    const newpedido = req.body
    //console.log(newpedido)
    //console.log(newpedido)
    //añadir el nuevo pedido al json obtenido del servidor 
    pedidos.push(newpedido)
    //cojemos el json de epdidos y lo guaradmos como texto
    const json_pedidos = JSON.stringify(pedidos)
    fs.writeFileSync(path.join(__dirname ,'pedidos.json'), json_pedidos,'utf-8')
    //ver el nuevo json con todos los pedidos
    //console.log(pedidos);
	res.redirect('/api/mid')
});
//---------------------------------------------------------------------------------------------------
//metodo delete -pasando un objeto de un formulario y x id lo borro 
app.post('/api/delete',(req,res) => {
    //recibo el id del produto por formulario oculto
    const pedidoeliminar = req.body
    //aplico la funcion que define un objeto nuevo menos el pedido que concide co la id pasada 
    pedidos = pedidos.filter(pedidos=> pedidos.id != pedidoeliminar.id )
    //console.log(pedidos); 
    //se codifica para poder escribirse en el fichero
    const json_pedidos = JSON.stringify(pedidos)
    //se pasa al fichero para guardar el nuevo resultado
    fs.writeFileSync(path.join(__dirname ,'pedidos.json'), json_pedidos,'utf-8')
	res.redirect('/api/mid')
})
app.get("/api/mid", (req, res) => {
	res.redirect('http://personal:81')
});
//---------------------------------------------------------------------------------------------------
//rutas pagina estatica index******
//app.use(express.static( path.join(__dirname, '../asador/build')));

//---------------------------------------------------------------------------------------------------

//cerrar session
app.get("/logout", (req, res) => {
	//hay k cerrar sesion 
	//redireccionamos a index
    res.redirect('/')
});

//---------------------------------------------------------------------------------------------------

//mostrar index pagina estatica

app.get("/", (req, res) => {
    //console.log(pedidos);
    //res.sendFile(path.resolve(__dirname, '../asador/build', 'index.html'));
    res.redirect('http://personal:80')
});

//---------------------------------------------------------------------------------------------------
//inicio de sesion con google
var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {Claves} = require('./claves/claves');
const { redirect } = require('express/lib/response');

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user , done) {
    done(null, user);
});
let usuario=""
passport.use(
    new GoogleStrategy(
        {
            callbackURL: '/auth/google/callback',
            clientID: Claves.client_id,
            clientSecret: Claves.client_secret,
        },
        (accessToken, refreshToken, profile, cb,) => {
            //console.log(accessToken)
            //console.log(profile)
            if(profile._json.email === "blazquezmark97@gmail.com"){
                //console.log("correct user")
				return cb (null, profile);
            }else{
                // fail 
                //console.log("bad user")
                //return usuario = "erroneo"
				cb(new Error("no eres el ususario adecuado!"));
            }
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
			successRedirect: '/api/mid',
			failureRedirect: '/'
			
    	}
	)
);
//---------------------------------------------------------------------------------------------------


//creacion del servidor
app.listen(app.get('port'),()=>{
    console.log ("servidor corriendo en el puerto 8080")
})