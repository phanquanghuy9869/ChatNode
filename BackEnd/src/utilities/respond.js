exports.success = function (data) {
    return { isSuccess: true, data: data, message: '' };
}

exports.fail = function (msg) {
    return { isSuccess: false, message: msg };
}