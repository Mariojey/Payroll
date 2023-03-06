const Payroll = require('../models/Payroll')

exports.getAllSalaries = (req, res, next) => {
    try {
        const salaries = Payroll.getAll();

        res.status(200).json({ salaries })
    } catch (error) {
        console.log(error);
        next(error)
    }
}