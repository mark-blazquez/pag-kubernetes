const { Router } = require("express");
const router = Router ();
const req = require("express/lib/request");
const url = 'http://localhost:80/pedidos.json';
const path = require('path');
let options = { json: true };
const request = require('request');

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
    //res.sendFile(path.join(__dirname+'../../asador/build/index.html'));

})

//---------------------------------------------------------------------------------------------------
//metodo post pasando un json 
router.post('/',(req,res) => {
    res.send('index de la pagina')
    request(url, options, (error, res, body) => {
    //obtengo los pedidos de el json y se guardan en la varible pedidos
        const pedidos = body
        //console.log(pedidos)
        //recupero lo que pasa post y lo guardo en variables con nombre sirve x si quiero validar k no va a ser el caso porque puede tener campos vacios
        //const {pollo, patatas, nombre}= req.body
        //añadir id al pedido
        const id = pedidos.leght + 1;
        //console.log(id)
        const newpedido = {id, ...req.body}
        //ver el nuevo pedido  
        console.log(newpedido)
        //añadir el nuevo pedido al json obtenido del servidor 
        pedidos.push(newpedido)
        //ver el nuevo json con todos los pedidos
        console.log(pedidos);
        //habria que enviar pedidos de vuelta a el json y que sobrescriba todo lo que hay o solo añadir lo ultimo que se guarda en newpedido hay que investigar
    });
})
//---------------------------------------------------------------------------------------------------
//metodo delete pasando un id
router.delete('/:id',(req,res) => {
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

//conectar express con react ruta fallan 

//router.use(express.static("/asador"));
//router.use( '/' ,express.static('../../asador/public'));
//router.use( '/' , express.static( path.join(__dirname, '/asador/build')));


module.exports = router