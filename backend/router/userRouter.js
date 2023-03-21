require('dotenv').config();
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.route('/users').get(
    userController.getAllUsers
).post(
    userController.createUser
)
router.route('/user').post(
    userController.getUserByEmail
)
router.route('/admins').get(
    userController.getAllAdmins
)
router.route('/admin').post(
    userController.getAdminByEmail
)

module.exports = router