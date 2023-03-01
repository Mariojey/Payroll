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
      name: "PREMIA_CALKOWITA_MIESIECZNA",
      selector: (row) => row.all_month_bonus
    },
    {
      name: "PENSJA_CALKOWITA_MIESIECZNA",
      selector: (row) => row.all_month_salary
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

    const res = await fetch(URL)

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
