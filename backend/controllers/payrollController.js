const Payroll = require('../models/Payroll')

exports.getAllSalaries = async(req, res, next) => {
    try {
        const salaries = await Payroll.findAll();

        res.status(200).json({ salaries })
    } catch (error) {
        console.log(error);
        next(error)
    }
}