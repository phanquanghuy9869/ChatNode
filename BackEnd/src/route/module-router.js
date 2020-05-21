
const authRouter = require('./auth-router');
const userRouter = require('./user-router');

exports.registerModule = (app) => {
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
}