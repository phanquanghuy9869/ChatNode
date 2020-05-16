const assert = require('assert');
const dotenv = require('dotenv');
dotenv.config();

const {
    MONGO_SERVER,
    MONGO_DATABASE,    
} = process.env;

// console.log(process.env);
// assert( COOKIE_ENCRYPT_PWD, 'COOKIE_ENCRYPT_PWD configuration is required. ' );
assert( MONGO_SERVER, 'MONGO_SERVER configuration is required. ' );
assert( MONGO_DATABASE, 'MONGO_DATABASE configuration is required. ' );

module.exports = {
    db: {
        server: MONGO_SERVER,
        database: MONGO_DATABASE,
    },
    auth: {        
        secret: 'worldisfullofdevelopers'
    }
}