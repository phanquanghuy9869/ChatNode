const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: 'username is required',
        unique: true,
    },
    password: String,
    email: {
        type: String,
        required: 'email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});
exports.User = mongoose.model('User', userSchema);

const roomSchema = new Schema({
    name: {
        type: String,
        required: 'name is required',
        unique: true,
    },
    user: [String]
});

exports.Room = mongoose.model('Room', roomSchema);