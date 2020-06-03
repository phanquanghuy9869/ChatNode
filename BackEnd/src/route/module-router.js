
const authRouter = require('./auth-router');
const userRouter = require('./user-router');
const roomRouter = require('./room-router');
const { validateToken } = require('../../middle-ware/middle-ware');

exports.registerModule = (app) => {
    app.use('/auth', authRouter);
    app.use('/user', validateToken, userRouter);
    app.use('/room', validateToken, roomRouter);
}