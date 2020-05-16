const express = require('express');
const router = express.Router();
let ioc = require('../../container/ioc.js');
const userController = require('../controller/user-controller.js');

router.post('/create', async function (rq, rp) {
    userController.createUser(rq,rp);
});

module.exports = router;
