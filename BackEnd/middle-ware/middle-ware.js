let jwt = require('jsonwebtoken');
let config = require('../config/config.js');
const userService = require('../src/service/user-service');

let validateToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        return res.json({
            isSuccess: false,
            message: 'Invalid authentication'
        });
    }

    if (token.includes('Bearer ')) {
        token = token.slice(7, token.lenth);
    }

    if (token) {
        jwt.verify(token, config.auth.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    isSuccess: false,
                    message: 'Invalid authentication'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            isSuccess: false,
            message: 'Invalid authentication'
        });
    }
};

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let user = null;

    try {
        user = await userService.login(username, password);
    } catch (error) {
        res.send(400).json({
            isSuccess: false,
            message: error.message
        });
    }
    if (user == null) {
        res.send(200).json({
            isSuccess: false,
            message: 'User không tồn tại'
        });
    }

    let token = jwt.sign({ username: username }, config.auth.secret, { expiresIn: '69h' });
    res.json({
        isSuccess: true,
        token: token,
        message: 'Authentication successful!'
    });
}

const index = (req, res) => {
    res.json({
        success: true,
        message: 'Index page'
    });
}

module.exports = {
    validateToken: validateToken,
    login: login,
    index: index
}


