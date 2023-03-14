const db = require('../config/db')
const oracledb = require('oracledb');

exports.getAllUsers = async(req, res, next) => {
    let query = `SELECT * FROM lista_plac_users`;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const users = await connection.execute(query);
        res.status(200).json(users.rows)
    }catch(error){
        console.log(error);
        next(error)
    }
}

exports.getAllAdmins = async(req, res, next) => {
    let query = `SELECT * FROM lista_plac_admins`;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const admins = await connection.execute(query);
        res.status(200).json(admins.rows)
    }catch(error){
        console.log(error);
        next(error)
    }
}

exports.getUserByEmail = async(req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    let query = `
    SELECT * FROM lista_plac_users
    WHERE email = '${email}' 
    AND password = '${password}'
    `
    
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const user = await connection.execute(query);
        if((user.rows).length != 0){
            res.status(200).json({status: 'OK', user})
        }else{
            res.status(200).json({status: 'ERROR', user})
        }
    }catch(error){
        console.log(error);
        next(error)
    }
}

exports.getAdminByEmail = async(req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    let query = `
    SELECT * FROM lista_plac_admins
    WHERE email = '${email}'
    AND password = '${password}'
    `
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const admin = await connection.execute(query);
        if((admin.rows).length != 0){
            res.status(200).json({status: 'OK', admin})
        }else{
            res.status(200).json({status: 'ERROR', admin})
        }
    }catch(error){
        console.log(error);
        next(error)
    }
}