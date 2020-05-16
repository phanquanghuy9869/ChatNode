var bcrypt = require('bcrypt');

exports.cryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const rs = await bcrypt.hash(password, salt);
    return rs;
};

exports.comparePassword = async function (plainPass, hashword) {
    const isPasswordMatch = await bcrypt.compare(plainPass, hashword);
    return err == null ? callback(null, isPasswordMatch) : callback(err);
};

// var bcrypt = require('bcrypt');

// exports.cryptPassword = function(password, callback) {
//    bcrypt.genSalt(10, function(err, salt) {
//     if (err) 
//       return callback(err);

//     bcrypt.hash(password, salt, function(err, hash) {
//       return callback(err, hash);
//     });
//   });
// };

// exports.comparePassword = function(plainPass, hashword, callback) {
//    bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
//        return err == null ?
//            callback(null, isPasswordMatch) :
//            callback(err);
//    });
// };