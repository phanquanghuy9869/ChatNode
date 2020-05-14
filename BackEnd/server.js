var express = require('express');
const middleWare = require('./middle_ware/middle_ware');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json());

// var authRouter = require('./src/route/auth-router.js');
// app.use('/auth', authRouter);

app.post('/login', middleWare.login);
app.get('/', middleWare.validateToken, middleWare.index);


var server = app.listen(689, function () {
    console.log('Server running ...');
});
