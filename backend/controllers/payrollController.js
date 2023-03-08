//const Payroll = require('../models/Payroll')
const db = require('../config/db')
const oracledb = require('oracledb');

exports.getAllSalaries = async(req, res, next) => {

    let query = `SELECT * FROM lista_plac`;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try {
        connection = await oracledb.getConnection();
        const salaries = await connection.execute(query)
        res.status(200).json(salaries.rows)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getEmployeeById = async(req, res, next) => {


    let id = req.params.id;
    let query = `SELECT * FROM lista_plac WHERE ID = ${id}`;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const employee = await connection.execute(query)
        res.status(200).json(employee.rows)
    }catch(error){
        console.log(error);
        next(error)
    }

}

exports.createEmployee = async(req, res, next) => {

    //Params

    let name = req.body.name;
    let surname = req.body.surname;
    let basic_salary = req.body.basic_salary;
    let motivation_bonus = (basic_salary*0.1)

    let discreationary_bonus = []
    for (let i = 0; i < 12; i++) {
        discreationary_bonus.push((Math.random()*10).toFixed(0))
        
    }

    let discreationary_bonus_value = []
    for (let i = 0; i < 12; i++) {
        
        discreationary_bonus_value.push((discreationary_bonus[i] * basic_salary / 100).toFixed(0))
        
    }

    let all_bonus = []
    for (let i = 0; i < 12; i++) {
        
        all_bonus.push(parseInt(motivation_bonus)+parseInt(discreationary_bonus_value[i]))
        
    }

    let all_salary = []
    for (let i = 0; i < 12; i++) {
        
        all_salary.push(basic_salary+all_bonus[i])
        
    }

    let min_salary = Math.min(...all_salary);
    let max_salary = Math.max(...all_salary);
    
    function avg(tab){
        let result = 0
        for (let i = 0; i < tab.length; i++) {
            result += tab[i]
            
        }
        return result/tab.length;
    }

    let avg_salary = avg(all_salary)

    let min_bonus = Math.min(...all_bonus);
    let max_bonus = Math.max(...all_bonus);
    let avg_bonus = avg(all_bonus);


    //

    let querySave = `
    
    INSERT INTO LISTA_PLAC(
        ID,
        IMIE,
        NAZWISKO,
        PENSJA_ZASADNICZA,
        PREMIA_MOTYWACYJNA,
        PREMIA_UZ_MIES_PR_STYCZEN,
        PREMIA_UZ_MIES_PR_LUTY,
        PREMIA_UZ_MIES_PR_MARZEC,
        PREMIA_UZ_MIES_PR_KWIECIEN,
        PREMIA_UZ_MIES_PR_MAJ,
        PREMIA_UZ_MIES_PR_CZERWIEC,
        PREMIA_UZ_MIES_PR_LIPIEC,
        PREMIA_UZ_MIES_PR_SIERPIEN,
        PREMIA_UZ_MIES_PR_WRZESIEN,
        PREMIA_UZ_MIES_PR_PAZDZIERNIK,
        PREMIA_UZ_MIES_PR_LISTOPAD,
        PREMIA_UZ_MIES_PR_GRUDZIEN,
        PREMIA_UZ_MIES_WA_STYCZEN,
        PREMIA_UZ_MIES_WA_LUTY,
        PREMIA_UZ_MIES_WA_MARZEC,
        PREMIA_UZ_MIES_WA_KWIECIEN,
        PREMIA_UZ_MIES_WA_MAJ,
        PREMIA_UZ_MIES_WA_CZERWIEC,
        PREMIA_UZ_MIES_WA_LIPIEC,
        PREMIA_UZ_MIES_WA_SIERPIEN,
        PREMIA_UZ_MIES_WA_WRZESIEN,
        PREMIA_UZ_MIES_WA_PAZDZIERNIK,
        PREMIA_UZ_MIES_WA_LISTOPAD,
        PREMIA_UZ_MIES_WA_GRUDZIEN,
        PREMIA_CAL_MIES_STY,
        PREMIA_CAL_MIES_LUT,
        PREMIA_CAL_MIES_MAR,
        PREMIA_CAL_MIES_KWI,
        PREMIA_CAL_MIES_MAI,
        PREMIA_CAL_MIES_CZE,
        PREMIA_CAL_MIES_LIP,
        PREMIA_CAL_MIES_SIE,
        PREMIA_CAL_MIES_WRZ,
        PREMIA_CAL_MIES_PAZ,
        PREMIA_CAL_MIES_LIS,
        PREMIA_CAL_MIES_GRU,
        PENSJA_CAL_MIES_STY,
        PENSJA_CAL_MIES_LUT,
        PENSJA_CAL_MIES_MAR,
        PENSJA_CAL_MIES_KWI,
        PENSJA_CAL_MIES_MAI,
        PENSJA_CAL_MIES_CZE,
        PENSJA_CAL_MIES_LIP,
        PENSJA_CAL_MIES_SIE,
        PENSJA_CAL_MIES_WRZ,
        PENSJA_CAL_MIES_PAZ,
        PENSJA_CAL_MIES_LIS,
        PENSJA_CAL_MIES_GRU,
        PENSJA_MINIMALNA,
        PENSJA_MAKSYMALNA,
        PENSJA_SREDNIA,
        PREMIA_MINIMALNA,
        PREMIA_MAKSYMALNA,
        PREMIA_SREDNIA
    )VALUES(
        lista_pk.NEXTVAL,
        '${name}',
        '${surname}',
        ${basic_salary},
        ${motivation_bonus.toFixed(0)},
        ${discreationary_bonus[0]},
        ${discreationary_bonus[1]},
        ${discreationary_bonus[2]},
        ${discreationary_bonus[3]},
        ${discreationary_bonus[4]},
        ${discreationary_bonus[5]},
        ${discreationary_bonus[6]},
        ${discreationary_bonus[7]},
        ${discreationary_bonus[8]},
        ${discreationary_bonus[9]},
        ${discreationary_bonus[10]},
        ${discreationary_bonus[11]},
        ${discreationary_bonus_value[0]},
        ${discreationary_bonus_value[1]},
        ${discreationary_bonus_value[2]},
        ${discreationary_bonus_value[3]},
        ${discreationary_bonus_value[4]},
        ${discreationary_bonus_value[5]},
        ${discreationary_bonus_value[6]},
        ${discreationary_bonus_value[7]},
        ${discreationary_bonus_value[8]},
        ${discreationary_bonus_value[9]},
        ${discreationary_bonus_value[10]},
        ${discreationary_bonus_value[11]},
        ${all_bonus[0]},
        ${all_bonus[1]},
        ${all_bonus[2]},
        ${all_bonus[3]},
        ${all_bonus[4]},
        ${all_bonus[5]},
        ${all_bonus[6]},
        ${all_bonus[7]},
        ${all_bonus[8]},
        ${all_bonus[9]},
        ${all_bonus[10]},
        ${all_bonus[11]},
        ${all_salary[0]},
        ${all_salary[1]},
        ${all_salary[2]},
        ${all_salary[3]},
        ${all_salary[4]},
        ${all_salary[5]},
        ${all_salary[6]},
        ${all_salary[7]},
        ${all_salary[8]},
        ${all_salary[9]},
        ${all_salary[10]},
        ${all_salary[11]},
        ${min_salary},
        ${max_salary},
        ${avg_salary.toFixed(0)},
        ${min_bonus},
        ${max_bonus},
        ${avg_bonus.toFixed(0)}
    )
    

    `;
    
    let queryCheck = `
        SELECT * FROM lista_plac WHERE lista_plac.ID = lista_pk.NEXTVAL - 1
    `;
    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const save = await connection.execute(querySave);
        //const addedWorker = await connection.execute(queryCheck);
        res.status(200).json({save})
    }catch(error){
        console.log(error);
        next(error)
    }

}

exports.updateEmployee = async(req, res, next) => {

    let id = req.body.id;
    let basic_salary = req.body.basic_salary;
    let motivation_bonus = (basic_salary*0.1);

    let discreationary_bonus_value = []
    discreationary_bonus_value[0] = req.body.discreationary_bonus_value_jan; 
    discreationary_bonus_value[1] = req.body.discreationary_bonus_value_feb; 
    discreationary_bonus_value[2] = req.body.discreationary_bonus_value_mar; 
    discreationary_bonus_value[3] = req.body.discreationary_bonus_value_apr; 
    discreationary_bonus_value[4] = req.body.discreationary_bonus_value_mai; 
    discreationary_bonus_value[5] = req.body.discreationary_bonus_value_jul; 
    discreationary_bonus_value[6] = req.body.discreationary_bonus_value_jun; 
    discreationary_bonus_value[7] = req.body.discreationary_bonus_value_aug; 
    discreationary_bonus_value[8] = req.body.discreationary_bonus_value_sep; 
    discreationary_bonus_value[9] = req.body.discreationary_bonus_value_oct; 
    discreationary_bonus_value[10] = req.body.discreationary_bonus_value_nov; 
    discreationary_bonus_value[11] = req.body.discreationary_bonus_value_dec; 

    let all_bonus = []
    for (let i = 0; i < 12; i++) {
        
        all_bonus.push(parseInt(motivation_bonus)+parseInt(discreationary_bonus_value[i]))
        
    }

    let all_salary = []
    for (let i = 0; i < 12; i++) {
        
        all_salary.push(basic_salary+all_bonus[i])
        
    }

    let min_salary = Math.min(...all_salary);
    let max_salary = Math.max(...all_salary);
    
    function avg(tab){
        let result = 0
        for (let i = 0; i < tab.length; i++) {
            result += tab[i]
            
        }
        return result/tab.length;
    }

    let avg_salary = avg(all_salary)

    let min_bonus = Math.min(...all_bonus);
    let max_bonus = Math.max(...all_bonus);
    let avg_bonus = avg(all_bonus);

    let queryUpdate = `
    UPDATE lista_plac
    SET
    IMIE = '${req.body.name}',
    NAZWISKO = '${req.body.surname}',
    PENSJA_ZASADNICZA = ${basic_salary},
    PREMIA_MOTYWACYJNA = ${motivation_bonus},
    PREMIA_CAL_MIES_STY = ${all_bonus[0]},
    PREMIA_CAL_MIES_LUT = ${all_bonus[1]},
    PREMIA_CAL_MIES_MAR = ${all_bonus[2]},
    PREMIA_CAL_MIES_KWI = ${all_bonus[3]},
    PREMIA_CAL_MIES_MAI = ${all_bonus[4]},
    PREMIA_CAL_MIES_CZE = ${all_bonus[5]},
    PREMIA_CAL_MIES_LIP = ${all_bonus[6]},
    PREMIA_CAL_MIES_SIE = ${all_bonus[7]},
    PREMIA_CAL_MIES_WRZ = ${all_bonus[8]},
    PREMIA_CAL_MIES_PAZ = ${all_bonus[9]},
    PREMIA_CAL_MIES_LIS = ${all_bonus[10]},
    PREMIA_CAL_MIES_GRU = ${all_bonus[11]},
    PENSJA_CAL_MIES_STY = ${all_salary[0]},
    PENSJA_CAL_MIES_LUT = ${all_salary[1]},
    PENSJA_CAL_MIES_MAR = ${all_salary[2]},
    PENSJA_CAL_MIES_KWI = ${all_salary[3]},
    PENSJA_CAL_MIES_MAI = ${all_salary[4]},
    PENSJA_CAL_MIES_CZE = ${all_salary[5]},
    PENSJA_CAL_MIES_LIP = ${all_salary[6]},
    PENSJA_CAL_MIES_SIE = ${all_salary[7]},
    PENSJA_CAL_MIES_WRZ = ${all_salary[8]},
    PENSJA_CAL_MIES_PAZ = ${all_salary[9]},
    PENSJA_CAL_MIES_LIS = ${all_salary[10]},
    PENSJA_CAL_MIES_GRU = ${all_salary[11]},
    PENSJA_MINIMALNA = ${min_salary},
    PENSJA_MAKSYMALNA = ${max_salary},
    PENSJA_SREDNIA = ${avg_salary},
    PREMIA_MINIMALNA = ${min_bonus},
    PREMIA_MAKSYMALNA = ${max_bonus},
    PREMIA_SREDNIA = ${avg_bonus}
    WHERE ID = ${id}
    `

    let connection;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = true;

    try{
        connection = await oracledb.getConnection();
        const update = await connection.execute(queryUpdate);
        res.status(200).json({save})
    }catch(error){
        console.log(error);
        next(error)
    }

}
