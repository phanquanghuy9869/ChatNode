const assert = require('assert');
const dotenv = require('dotenv');

dotenv.config();
const {
    COOKIE_ENCRYPT_PWD,
    SQL_SERVER,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD,
} = process.env;

// console.log(process.env);
// assert( COOKIE_ENCRYPT_PWD, 'COOKIE_ENCRYPT_PWD configuration is required. ' );
assert( SQL_SERVER, 'SQL_SERVER configuration is required. ' );
assert( SQL_DATABASE, 'SQL_DATABASE configuration is required. ' );
assert( SQL_USER, 'SQL_USER configuration is required. ' );
assert( SQL_PASSWORD, 'SQL_PASSWORD configuration is required. ' );

module.exports = {
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        // @ataft's comment helped me solve my issue as well - setting "encrypt" to false fixed my issue.
        encrypt: false
    }
}