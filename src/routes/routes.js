const { Router } = require("express");
const req = require("express/lib/request");
const router = Router ();
const request = require('request');
const url = 'http://localhost:80/pedidos.json';
let options = { json: true };

//rutas
//---------------------------------------------------------------------------------------------------

// metodo get - examina los elementos del json en la url especificada y la muestra por pantalla 
router.get('/',(req,res) => {
    res.send('index encargos')
    request(url, options, (error, res, body) => {
        if (error) {
            return console.log(error)
        };

        if (!error && res.statusCode == 200) {
            console.log(body)
        };
    });
})
//---------------------------------------------------------------------------------------------------
//metodo post pasando un json 
router.post('/',(req,res) => {
    res.send('index de la pagina')
    request(url, options, (error, res, body) => {
    //obtengo los pedidos de el json y se guardan en la varible pedidos
    const pedidos = body
    //recupero lo que pasa post y lo guardo en variables con nombre sirve x si quiero validar
    //const {pollo, patatas, nombre}= req.body
    const newpedido = {...req.body}
    //ver el nuevo pedido  
    //console.log(newpedido)
    //añadir el nuevo pedido al json obtenido del servidor 
    pedidos.push(newpedido)
    //ver el nuevo json con todos los pedidos
    console.log(pedidos);
    //habria que enviar pedidos de vuelta a el json y que sobrescriba lo que hay o solo añadir lo ultimo que se guarda en newpedido

    });
})
//---------------------------------------------------------------------------------------------------

//conectar express con react ruta fallan 

//router.use(express.static("/asador"));
//router.use( '/' ,express.static('../../asador/public'));
//router.use( '/' , express.static( path.join(__dirname, '/asador/build')));


module.exports = router