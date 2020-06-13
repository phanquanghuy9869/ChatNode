const mongoose = require('mongoose');
const config = require('../../config/config.js');

exports.connect = async function () {
    await mongoose.connect(config.db.server + '/' + config.db.database);
}

exports.insertOne = async function (model) {
    try {
        await exports.connect();
        return await model.save();
    } finally {
        await exports.disconnect();
    }
}

exports.disconnect = async function () {
    await mongoose.disconnect();
}

exports.find = async function (schema, where, field = null) {
    try {
        await exports.connect();
        let query = schema.find(where).select(field);
        // if (field != null) {
        //     query = query.select(field);
        // }
        return await query;
    } finally {
        // await exports.disconnect();
    }
}