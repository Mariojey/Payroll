require('dotenv').config();
const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.route('/users').get(
    loginController.getAllUsers
)
router.route('/user').post(
    loginController.getUserByEmail
)

module.exports = router