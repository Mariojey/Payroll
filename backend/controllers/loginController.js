const oracledb = require('oracledb');

const sha512 = require('js-sha512');
const tokenHandler = require('../modules/authtoken')

exports.getAllUsers = async(req, res, next) => {
    let query = `SELECT * FROM lista_plac_users`;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try {
        connection = await oracledb.getConnection();
        const users = await connection.execute(query);
        res.status(200).json(users.rows)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getAllAdmins = async(req, res, next) => {
    let query = `SELECT * FROM lista_plac_admins`;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try {
        connection = await oracledb.getConnection();
        const admins = await connection.execute(query);
        res.status(200).json(admins.rows)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getUserByEmail = async(req, res, next) => {
    let email_req = req.body.email;
    let password_req = req.body.password;

    let query = `
    SELECT * FROM lista_plac_users
    WHERE email = '${email_req}' 
    AND password = '${password_req}'
    `

    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try {
        connection = await oracledb.getConnection();
        const user = await connection.execute(query);
        if ((user.rows).length > 0) {
            const email = user.rows[0].EMAIL;
            const id = user.rows[0].ID;

            const token = tokenHandler.generateToken(email, id, 'USER');

            res.status(200).json({ status: 'OK', user: email, token: token, role: 'USER', id: id })
            return;
        } else {
            res.status(400).json({ status: 'ERROR', user: email_req })
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getAdminByEmail = async(req, res, next) => {
    let email_req = req.body.email;
    let password_req = req.body.password;

    let query = `
    SELECT * FROM lista_plac_admins
    WHERE email = '${email_req}'
    AND password = '${password_req}'
    `
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try {
        connection = await oracledb.getConnection();
        const admin = await connection.execute(query);
        if ((admin.rows).length > 0) {
            const email = admin.rows[0].EMAIL;
            const id = admin.rows[0].ID;

            const token = tokenHandler.generateToken(email, id, 'ADMIN');

            res.status(200).json({ status: 'OK', user: email, role: 'ADMIN', token: token })
        } else {
            res.status(200).json({ status: 'NOT FOUND', admin })
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}