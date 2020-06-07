const express = require('express');
const router = express.Router();
let ioc = require('../../container/ioc.js');
const { validateToken } = require('../../middle-ware/middle-ware');
const userController = require('../controller/user-controller.js');

router.post('/create', userController.createUser);
router.post('/getAll', validateToken, userController.getAll);

module.exports = router;
