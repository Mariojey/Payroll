//const Payroll = require('../models/Payroll')
const db = require('../config/db')

exports.getAllSalaries = async(req, res, next) => {
    try {
        let query = `SELECT * FROM lista_plac`;
        const salaries = await db.executeQuery()
        res.status(200).json({ salaries })
    } catch (error) {
        console.log(error);
        next(error)
    }
}