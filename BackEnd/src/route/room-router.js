const express = require('express');
const router = express.Router();
let ioc = require('../../container/ioc.js');
const roomController = require('../controller/room-controller');

router.post('/create', roomController.createRoom);
router.post('/getall', roomController.getAll);

module.exports = router;
