const db = require('../config/db')

class Payroll {
    constructor(
        id,
        name,
        family_name,
        basic_salary,
        motivation_bonus,
        bonus_u_month_proc_jan,
        bonus_u_month_proc_feb,
        bonus_u_month_proc_mar,
        bonus_u_month_proc_apr,
        bonus_u_month_proc_mai,
        bonus_u_month_proc_jul,
        bonus_u_month_proc_jun,
        bonus_u_month_proc_aug,
        bonus_u_month_proc_sep,
        bonus_u_month_proc_oct,
        bonus_u_month_proc_nov,
        bonus_u_month_proc_dec,
        bonus_u_month_val_jan,
        bonus_u_month_val_feb,
        bonus_u_month_val_mar,
        bonus_u_month_val_apr,
        bonus_u_month_val_mai,
        bonus_u_month_val_jul,
        bonus_u_month_val_jun,
        bonus_u_month_val_aug,
        bonus_u_month_val_sep,
        bonus_u_month_val_oct,
        bonus_u_month_val_nov,
        bonus_u_month_val_dec,
        all_month_bonus,
        all_month_salary,
        min_salary,
        max_salary,
        avg_salary,
        min_bonus,
        max_bonus,
        avg_bonus
    ) {
        this.id = id,
            this.name = name;
        this.family_name = family_name;
        this.basic_salary = basic_salary;
        this.motivation_bonus = motivation_bonus;
        this.bonus_u_month_proc_jan = bonus_u_month_proc_jan;
        this.bonus_u_month_proc_feb = bonus_u_month_proc_feb;
        this.bonus_u_month_proc_mar = bonus_u_month_proc_mar;
        this.bonus_u_month_proc_apr = bonus_u_month_proc_apr;
        this.bonus_u_month_proc_mai = bonus_u_month_proc_mai;
        this.bonus_u_month_proc_jul = bonus_u_month_proc_jul;
        this.bonus_u_month_proc_jun = bonus_u_month_proc_jun;
        this.bonus_u_month_proc_aug = bonus_u_month_proc_aug;
        this.bonus_u_month_proc_sep = bonus_u_month_proc_sep;
        this.bonus_u_month_proc_oct = bonus_u_month_proc_oct;
        this.bonus_u_month_proc_nov = bonus_u_month_proc_nov;
        this.bonus_u_month_proc_dec = bonus_u_month_proc_dec;
        this.bonus_u_month_val_jan = bonus_u_month_val_jan;
        this.bonus_u_month_val_feb = bonus_u_month_val_feb;
        this.bonus_u_month_val_mar = bonus_u_month_val_mar;
        this.bonus_u_month_val_apr = bonus_u_month_val_apr;
        this.bonus_u_month_val_mai = bonus_u_month_val_mai;
        this.bonus_u_month_val_jul = bonus_u_month_val_jul;
        this.bonus_u_month_val_jun = bonus_u_month_val_jun;
        this.bonus_u_month_val_aug = bonus_u_month_val_aug;
        this.bonus_u_month_val_sep = bonus_u_month_val_sep;
        this.bonus_u_month_val_oct = bonus_u_month_val_oct;
        this.bonus_u_month_val_nov = bonus_u_month_val_nov;
        this.bonus_u_month_val_dec = bonus_u_month_val_dec;
        this.all_month_bonus = all_month_bonus;
        this.all_month_salary = all_month_salary;
        this.min_salary = min_salary;
        this.max_salary = max_salary;
        this.avg_salary = avg_bonus;
        this.min_bonus = min_bonus;
        this.max_bonus = max_bonus;
        this.avg_bonus = avg_bonus;
    }

    static findAll() {
        let query = `SELECT * FROM LISTA_PLAC;`;
        return db.execute(query)
    }
}

module.exports = Payroll