import DataTable, {createTheme} from 'react-data-table-component';
import {useState, useEffect} from 'react';

function App() {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(20)


  const columns = [
    {
      name: "IMIE",
      selector: (row) => row.name
    },
    {
      name: "NAZWISKO",
      selector: (row) => row.family_name
    },
    {
      name: "PENSJA_ZASADNICZA",
      selector: (row) => row.basic_salary
    },
    {
      name: "PREMIA_MOTYWACYJNA",
      selector: (row) => row.motivation_bonus
    },
    {
      name: "PREMIA_UZ_MIES_PR_STYCZEN",
      selector: (row) => row.bonus_u_month_proc_jan
    },
    {
      name: "PREMIA_UZ_MIES_PR_LUTY",
      selector: (row) => row.bonus_u_month_proc_feb
    },
    {
      name: "PREMIA_UZ_MIES_PR_MARZEC",
      selector: (row) => row.bonus_u_month_proc_mar
    },
    {
      name: "PREMIA_UZ_MIES_PR_KWIECIEN",
      selector: (row) => row.bonus_u_month_proc_arp
    },
    {
      name: "PREMIA_UZ_MIES_PR_MAJ",
      selector: (row) => row.bonus_u_month_proc_mai
    },
    {
      name: "PREMIA_UZ_MIES_PR_CZERWIEC",
      selector: (row) => row.bonus_u_month_proc_jul
    },
    {
      name: "PREMIA_UZ_MIES_PR_LIPIEC",
      selector: (row) => row.bonus_u_month_proc_jun
    },
    {
      name: "PREMIA_UZ_MIES_PR_SIERPIEN",
      selector: (row) => row.bonus_u_month_proc_aug
    },
    {
      name: "PREMIA_UZ_MIES_PR_WRZESIEN",
      selector: (row) => row.bonus_u_month_proc_sep
    },
    {
      name: "PREMIA_UZ_MIES_PR_PAZDZIERNIK",
      selector: (row) => row.bonus_u_month_proc_oct
    },
    {
      name: "PREMIA_UZ_MIES_PR_LISTOPAD",
      selector: (row) => row.bonus_u_month_proc_nav
    },
    {
      name: "PREMIA_UZ_MIES_PR_GRUDZIEN",
      selector: (row) => row.bonus_u_month_proc_dec
    },
    {
      name: "PREMIA_UZ_MIES_WA_STYCZEN",
      selector: (row) => row.bonus_u_month_val_jan
    },
    {
      name: "PREMIA_UZ_MIES_WA_LUTY",
      selector: (row) => row.bonus_u_month_val_feb
    },
    {
      name: "PREMIA_UZ_MIES_WA_MARZEC",
      selector: (row) => row.bonus_u_month_val_mar
    },
    {
      name: "PREMIA_UZ_MIES_WA_KWIECIEN",
      selector: (row) => row.bonus_u_month_val_apr
    },
    {
      name: "PREMIA_UZ_MIES_WA_MAJ",
      selector: (row) => row.bonus_u_month_val_mai
    },
    {
      name: "PREMIA_UZ_MIES_WA_CZERWIEC",
      selector: (row) => row.bonus_u_month_val_jul
    },
    {
      name: "PREMIA_UZ_MIES_WA_LIPIEC",
      selector: (row) => row.bonus_u_month_val_jun
    },
    {
      name: "PREMIA_UZ_MIES_WA_SIERPIEN",
      selector: (row) => row.bonus_u_month_val_aug
    },
    {
      name: "PREMIA_UZ_MIES_WA_WRZESIEN",
      selector: (row) => row.bonus_u_month_val_sep
    },
    {
      name: "PREMIA_UZ_MIES_WA_PAZDZIERNIK",
      selector: (row) => row.bonus_u_month_val_oct
    },
    {
      name: "PREMIA_UZ_MIES_WA_LISTOPAD",
      selector: (row) => row.bonus_u_month_val_nov
    },
    {
      name: "PREMIA_UZ_MIES_WA_GRUDZIEN",
      selector: (row) => row.bonus_u_month_val_dec
    },
    {
      name: "PREMIA_CAL_MIES_STY",
      selector: (row) => row.all_month_bonus_jan
    },
    {
      name: "PREMIA_CAL_MIES_LUT",
      selector: (row) => row.all_month_bonus_feb
    },
    {
      name: "PREMIA_CAL_MIES_MAR",
      selector: (row) => row.all_month_bonus_mar
    },
    {
      name: "PREMIA_CAL_MIES_KWI",
      selector: (row) => row.all_month_bonus_apr
    },
    {
      name: "PREMIA_CAL_MIES_MAI",
      selector: (row) => row.all_month_bonus_mai
    },
    {
      name: "PREMIA_CAL_MIES_CZE",
      selector: (row) => row.all_month_bonus_jul
    },
    {
      name: "PREMIA_CAL_MIES_LIP",
      selector: (row) => row.all_month_bonus_jun
    },
    {
      name: "PREMIA_CAL_MIES_SIE",
      selector: (row) => row.all_month_bonus_aug
    },
    {
      name: "PREMIA_CAL_MIES_WRZ",
      selector: (row) => row.all_month_bonus_sep
    },
    {
      name: "PREMIA_CAL_MIES_PAZ",
      selector: (row) => row.all_month_bonus_oct
    },
    {
      name: "PREMIA_CAL_MIES_LIS",
      selector: (row) => row.all_month_bonus_nov
    },
    {
      name: "PREMIA_CAL_MIES_GRU",
      selector: (row) => row.all_month_bonus_dec
    },
    {
      name: "PENSJA_CAL_MIES_STY",
      selector: (row) => row.all_month_salary_jan
    },
    {
      name: "PENSJA_CAL_MIES_LUT",
      selector: (row) => row.all_month_salary_feb
    },
    {
      name: "PENSJA_CAL_MIES_MAR",
      selector: (row) => row.all_month_salary_mar
    },
    {
      name: "PENSJA_CAL_MIES_KWI",
      selector: (row) => row.all_month_salary_apr
    },
    {
      name: "PENSJA_CAL_MIES_MAI",
      selector: (row) => row.all_month_salary_mai
    },
    {
      name: "PENSJA_CAL_MIES_CZE",
      selector: (row) => row.all_month_salary_jul
    },
    {
      name: "PENSJA_CAL_MIES_LIP",
      selector: (row) => row.all_month_salary_jun
    },
    {
      name: "PENSJA_CAL_MIES_SIE",
      selector: (row) => row.all_month_salary_aug
    },
    {
      name: "PENSJA_CAL_MIES_WRZ",
      selector: (row) => row.all_month_salary_sep
    },
    {
      name: "PENSJA_CAL_MIES_PAZ",
      selector: (row) => row.all_month_salary_oct
    },
    {
      name: "PENSJA_CAL_MIES_LIS",
      selector: (row) => row.all_month_salary_nov
    },
    {
      name: "PENSJA_CAL_MIES_GRU",
      selector: (row) => row.all_month_salary_dec
    },
    {
      name: "PENSJA_MINIMALNA",
      selector: (row) => row.min_salary
    },
    {
      name: "PENSJA_MAKSYMALNA",
      selector: (row) => row.max_salary
    },
    {
      name: "PENSJA_SREDNIA",
      selector: (row) => row.avg_salary
    },
    {
      name: "PREMIA_MINIMALNA",
      selector: (row) => row.min_bonus
    },
    {
      name: "PREMIA_MAKSYMALNA",
      selector: (row) => row.max_bonus
    },
    {
      name: "PREMIA_SREDNIA",
      selector: (row) => row.avg_bonus
    },


  ]

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(){
    setLoading(true)
    const URL = `https://jsonplaceholder.typicode.com/todos`

    const res = await fetch(URL, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })

    const list = await res.json()

    setData(list)
    setLoading(false)
  }

  createTheme('dark', {
    background: {
      default: '#000',
    },
    color: {
      default: '#fff'
    }
  });
  return (
    <div className="App">
      <DataTable
        title="Lista Plac"
        columns={columns}
        data={data}
        theme="dark"
        progressPending={loading}
        pagination
      />
    </div>
  );
}

export default App;
