const mongoose = require('mongoose');
const config = require('../../config/config.js');

exports.connect = async function () {
    mongoose.connect(config.db.server + '/' + config.db.database);
}

exports.insertOne = async function (model) {
    try {
        exports.connect();
        return await model.save();
    } finally {
        exports.disconnect();
    }
}

exports.disconnect = async function () {
    mongoose.disconnect();
}