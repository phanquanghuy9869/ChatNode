var pool = require('./src/pool/sqlPool.js');
const pools = new pool();
console.log(pools);

async function dat() {
    var pool = await pools.getConnection();
    const request = pool.request();
    request.query('SELECT * FROM Kpi_Task WHERE TaskIndex = 1', async function (err, data) {
        console.log(data.recordset);
        await pools.closeConnection();
    });
}

dat();