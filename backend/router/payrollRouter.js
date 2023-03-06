require('dotenv').config();
const express = require('express');
const router = express.Router();
//const payrollController = require('../controllers/payrollController');
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

router.get('/', (req, res, next) => {
    oracledb.getConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectionString: process.env.DB_HOST
    }, async (error, connection) => {
        if(error){
            res.send('Ups! Database error!')
        }else{
            let query = `SELECT * FROM LISTA_PLAC`;
            const data = await connection.execute(query)
            console.log(data.rows);
            res.send(data.rows)
        }
    })
})


module.exports = router