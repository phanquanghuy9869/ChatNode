const express = require('express');
const router = express.Router();
let ioc = require('../../container/ioc.js');
const userController = require('../controller/user-controller.js');

router.post('/create', userController.createUser);
router.post('/getAll', userController.getAll);

module.exports = router;
