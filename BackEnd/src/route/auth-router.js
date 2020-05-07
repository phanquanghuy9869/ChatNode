var express = require('express');
var router = express.Router();

router.get('/tok', function(rq, rp) {
    rp.send('you need a token?');
})

module.exports = router;