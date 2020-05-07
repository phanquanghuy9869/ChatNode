const sql = require('mssql');
const config = require('../../config/config.js');

const sqlPool = function() {
    let pool = null;
    const sqlConfig = config.sql;
    sqlConfig.port = 1433;
    this.closePool = async () => {
        if (pool == null) return;
        await pool.close();
        pool = null;
    }

    this.closeConnection = async() => {
        await this.closePool();
        await sql.close();
    }

    this.getConnection = async() => {
       try {
           if (pool) return pool;
           pool = await sql.connect(sqlConfig);
           return pool;
       } catch (error) {
           console.log(error);
           await this.closePool();
           return null;
       }
    }
}

module.exports = sqlPool;