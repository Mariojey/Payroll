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
        all_month_bonus_jan,
        all_month_bonus_feb,
        all_month_bonus_mar,
        all_month_bonus_apr,
        all_month_bonus_mai,
        all_month_bonus_jul,
        all_month_bonus_jun,
        all_month_bonus_aug,
        all_month_bonus_sep,
        all_month_bonus_oct,
        all_month_bonus_nov,
        all_month_bonus_dec,
        all_month_salary_jan,
        all_month_salary_feb,
        all_month_salary_mar,
        all_month_salary_apr,
        all_month_salary_mai,
        all_month_salary_jul,
        all_month_salary_jun,
        all_month_salary_aug,
        all_month_salary_sep,
        all_month_salary_oct,
        all_month_salary_nov,
        all_month_salary_dec,
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
        this.all_month_bonus_jan = all_month_bonus_jan;
        this.all_month_bonus_feb = all_month_bonus_feb;
        this.all_month_bonus_mar = all_month_bonus_mar;
        this.all_month_bonus_apr = all_month_bonus_apr;
        this.all_month_bonus_mai = all_month_bonus_mai;
        this.all_month_bonus_jul = all_month_bonus_jul;
        this.all_month_bonus_jun = all_month_bonus_jun;
        this.all_month_bonus_aug = all_month_bonus_aug;
        this.all_month_bonus_sep = all_month_bonus_sep;
        this.all_month_bonus_oct = all_month_bonus_oct;
        this.all_month_bonus_nov = all_month_bonus_nov;
        this.all_month_bonus_dec = all_month_bonus_dec;
        this.all_month_salary_jan = all_month_salary_jan;
        this.all_month_salary_feb = all_month_salary_feb;
        this.all_month_salary_mar = all_month_salary_mar;
        this.all_month_salary_apr = all_month_salary_apr;
        this.all_month_salary_mai = all_month_salary_mai;
        this.all_month_salary_jul = all_month_salary_jul;
        this.all_month_salary_jun = all_month_salary_jun;
        this.all_month_salary_aug = all_month_salary_aug;
        this.all_month_salary_sep = all_month_salary_sep;
        this.all_month_salary_oct = all_month_salary_oct;
        this.all_month_salary_nov = all_month_salary_nov;
        this.all_month_salary_dec = all_month_salary_dec;
        this.min_salary = min_salary;
        this.max_salary = max_salary;
        this.avg_salary = avg_salary;
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