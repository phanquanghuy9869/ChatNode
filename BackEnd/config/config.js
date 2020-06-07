const assert = require('assert');
const dotenv = require('dotenv');
// dotenv.config();

var envFromRealEnvironment = process.env.NODE_ENV || 'development'
var path = `.env.${ envFromRealEnvironment }`;

dotenv.config({ path, silent: envFromRealEnvironment === 'production' })


// if (process.env && process.env.NODE_ENV) {
//     dotenv.config({ path: '.env.' + process.env.NODE_ENV });
// } else {
//     dotenv.config({ path: '.env.development' });
// }

const {
    MONGO_SERVER,
    MONGO_DATABASE,
} = process.env;

// console.log(process.env);
// assert( COOKIE_ENCRYPT_PWD, 'COOKIE_ENCRYPT_PWD configuration is required. ' );
assert(MONGO_SERVER, 'MONGO_SERVER configuration is required. ');
assert(MONGO_DATABASE, 'MONGO_DATABASE configuration is required. ');

module.exports = {
    db: {
        server: MONGO_SERVER,
        database: MONGO_DATABASE,
    },
    auth: {
        secret: 'worldisfullofdevelopers'
    }
}