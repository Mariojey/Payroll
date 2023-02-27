require('dotenv').config()
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectionString: process.env.DB_HOST
        });

        const result = await connection.execute(
            `SELECT * FROM emp_sals`, [100]
        );
        console.log(result.rows);
    } catch (err) {
        console.log(error);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.log(err);
            }
        }
    }
}