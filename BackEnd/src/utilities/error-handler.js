const ValidationError = require('../utilities/app-error.js');

exports.handleError = function (err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(500).json({
            isSuccess: false,
            message: err.message
        })
    }

    res.status(500).json({
        isSuccess: false,
        message: 'Unhandle error'
    })
}