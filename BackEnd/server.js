var express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./src/route/auth-router.js');
const userRouter = require('./src/route/user-router.js');

const userController = require('./src/controller/user-controller.js');

var app = express();
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json());

// var authRouter = require('./src/route/auth-router.js');
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.get('/', new userController().createUser);


app.get('/test', function (req, resp) {
    ctrl = new userController();
    const rs = ctrl.createUser();
    return resp.json({ msg: rs });
});

var server = app.listen(689, function () {
    console.log('Server running ...');
});
