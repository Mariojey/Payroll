//const Payroll = require('../models/Payroll')
const db = require('../config/db')
const oracledb = require('oracledb');

exports.getAllSalaries = async(req, res, next) => {

    let query = `SELECT * FROM lista_plac`;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try {
        connection = await oracledb.getConnection();
        const salaries = await connection.execute(query)
        res.status(200).json({ salaries })
    } catch (error) {
        console.log(error);
        next(error)
    }
}