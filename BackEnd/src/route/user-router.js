const express = require('express');
const router = express.Router();
let ioc = require('../../container/ioc.js');
let userController = require('../controller/user-controller.js');

router.post('/create', function (rq, rp) {
    ioc.userController().createUser(rq,rp);
});


router.post('/test', new userController().createUser);
module.exports = router;
