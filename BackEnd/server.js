var express = require('express');
var app = express();
var authRouter = require('./src/route/auth-router.js');

app.use('/auth', authRouter);

var server = app.listen(689, function() {
    console.log('Server running ...');    
});
