const { Router } = require("express");
const router = Router ();
//routes
// /
/*router.get('/',(req,res) => {
    res.send('funciona')
})*/
router.use( '/' , express.static( '/asador/build',{ root: __dirname }));
//router.use( '/' , express.static( path.join(__dirname, '/asador/build')));


module.exports = router