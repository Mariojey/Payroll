const oracledb = require('oracledb');

const sha512 = require('js-sha512');
const tokenHandler = require('../modules/authtoken');


exports.getAllUsers = async(req, res, next) => {
    let query = `SELECT 
    lista_plac_users.id,
    lista_plac_users.employee_id, 
    lista_plac_users.email,
    lista_plac.imie,
    lista_plac.nazwisko 
    FROM lista_plac_users
    JOIN lista_plac 
    ON lista_plac_users.employee_id = lista_plac.id
    `;

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

exports.createUser = async(req, res, next) => {
    let email = req.body.EMAIL;
    let password = req.body.PASSWORD;
    let employee_id = req.body.EMPLOYEE_ID;

    const encodedPassword = sha512(password)
    console.log(req.body);
    console.log(email, password, parseInt(employee_id));
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    let count_of_emials = 0
    async function checkUniqueEmail(email){
        let queryCheckEmail = `
        SELECT email FROM lista_plac_users WHERE email = '${email}'
        `;
        try{
            connection = await oracledb.getConnection();
            const emails = await connection.execute(queryCheckEmail);
            count_of_emials = emails.length;
        }catch(error){
            console.log(error)
            next(error)
        }
    }
    checkUniqueEmail(email)
    console.log(count_of_emials);
    if (count_of_emials > 0) {
        res.status(406).send({status: "NOT OK", message: "User who using this email is already saved in our database, please choose something else email"})
    }else{
        let query=`
            INSERT INTO LISTA_PLAC_USERS(
                ID,
                EMPLOYEE_ID,
                EMAIL,
                PASSWORD
            )VALUES(
                place_users_seq.NEXTVAL,
                ${employee_id},
                '${email}',
                '${encodedPassword}'
            )
        `;
        try{
            connection = await oracledb.getConnection();
            const save = await connection.execute(query);
            
            res.status(200).json({save})
        }catch(error){
            console.log(error);
            next(error)
        }
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
    let encodedPassword = sha512(password_req)


    let query = `
    SELECT * FROM lista_plac_users
    WHERE email = '${email_req}' 
    AND password = '${encodedPassword}'
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