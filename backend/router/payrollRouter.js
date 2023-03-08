require('dotenv').config();
const express = require('express');
const router = express.Router();
//version 1
const payrollController = require('../controllers/payrollController');

//version 2
//const oracledb = require('oracledb');
//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


//verion 1
router.route('/').get(
    payrollController.getAllSalaries
).post(
    payrollController.createEmployee
)

router.route('/:id').patch(
    payrollController.updateEmployee
).get(
    payrollController.getEmployeeById
)







    /* version 2
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
    */



module.exports = router