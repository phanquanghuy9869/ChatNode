var express = require('express');
var router = express.Router();
const { login } = require('../../middle-ware/middle-ware.js');

// router.get('/tok', function(rq, rp) {
//     rp.send('you need a token?');
// })

router.post('/tok', login);
module.exports = router;