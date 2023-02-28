const express = require('express');
const router = express.Router();
const payrollController = require('../controllers/payrollController');

router.route('/').get(
    payrollController.getAllSalaries
)

module.exports = router