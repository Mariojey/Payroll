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

exports.getUserByEmail = async(req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    let query = `
    SELECT * FROM lista_plac_users
    WHERE email = ${email} 
    AND password = ${password}
    `
    
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const user = await connection.execute(query);
        res.status(200).json(user)
    }catch(error){
        console.log(error);
        next(error)
    }
}