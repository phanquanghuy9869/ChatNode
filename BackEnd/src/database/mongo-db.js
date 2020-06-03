const mongoClient = require('mongodb').MongoClient;
const config = require('../../config/config.js');

exports.connectDb = async function () {
    const client = await mongoClient.connect(config.db.server);
    const db = client.db(config.db.database);
    return { client: client, database: db }
}

exports.connectSingleDb = async function (callback, ...args) {
    const client = await mongoClient.connect(config.db.server);
    const db = client.db(config.db.database);
    try {
        await callback(db, ...args);
    } finally {
        client.close();
    }
}

exports.insertOne = async function (collectionName, record) {
    const ctx = await exports.connectDb();
    var client = ctx.client;
    var rs;
    try {
        const db = ctx.database;
        const collection = db.collection(collectionName);
        rs = await collection.insertOne(record);
        return rs.ops[0];
    } finally {
        client.close();
    }
}

exports.isExists = async function (collectionName, query) {
    const ctx = await exports.connectDb();
    try {
        const rs = await ctx.database.collection(collectionName).count(query, { limit: 1 });
        return rs === 1;
    } finally {
        ctx.client.close();
    }
}

exports.findOne = async function (collectionName, query, fields) {
    const ctx = await exports.connectDb();
    try {
        const record = await ctx.database.collection(collectionName).findOne(query, fields);
        return record;
    } finally {
        ctx.client.close();
    }
}

exports.findAll = async (collectionName) => {
    const ctx = await exports.connectDb();
    try {
        const record = await ctx.database.collection(collectionName).find().toArray();
        return record;
    } finally {
        ctx.client.close();
    }
}

exports.find = async (collectionName, query, field) => {
    const ctx = await exports.connectDb();
    try {
        const record = await ctx.database.collection(collectionName).find(query).project(field).toArray();
        return record;
    } finally {
        ctx.client.close();
    }
}

exports.getRecords = async function (collectionName, query, fields) {
    const ctx = await exports.connectDb();
    try {
        const records = await ctx.database.collection(collectionName).find(query, fields);
        return records;
    } finally {
        ctx.client.close();
    }
}
