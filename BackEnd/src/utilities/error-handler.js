exports.handleError = function (err, req, res, next) {
    res.status(500).json({
        isSuccess: false,
        message: 'Unhandle error'
    })
}