const { Router } = require("express");
const router = Router ();
//routes

// root
router.get('/',(req,res) => {
    //res.send('index encargos')
    const url = 'http://localhost:80/pedidos.json';
    const request = require('request');
    let options = { json: true };
    request(url, options, (error, res, body) => {
        if (error) {
            return console.log(error)
        };

        if (!error && res.statusCode == 200) {
            console.log(body)
        };
    });
})



//conectar express con react ruta fallan 

//router.use(express.static("/asador"));
//router.use( '/' ,express.static('../../asador/public'));
//router.use( '/' , express.static( path.join(__dirname, '/asador/build')));


module.exports = router