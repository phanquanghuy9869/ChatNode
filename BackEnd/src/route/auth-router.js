var express = require('express');
var router = express.Router();
const middleWare = require('../../middle-ware/middle-ware.js');

// router.get('/tok', function(rq, rp) {
//     rp.send('you need a token?');
// })

router.post('/tok', middleWare.login);
module.exports = router;