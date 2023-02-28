require('dotenv').config();
const oracledb = require('oracledb');

let connection;

connection = oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionString: process.env.DB_HOST

})

module.exports = connection;