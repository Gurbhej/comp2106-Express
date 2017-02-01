/**
 * Created by GURBHEJ GILL on 2/1/2017.
 */
let express = require('express');
let router = express.Router();

//GET games index page

router.get('/', function(req, res, next) {
    res.render('games/index');

});


//make it public
module.exports = router;