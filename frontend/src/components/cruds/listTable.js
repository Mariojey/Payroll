import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './table.css'
function ListTable() {


  const [data, setData] = useState([])
  


  

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(){
    
    const URL = `http://127.0.0.1:8888/api/payroll/`

    const res = await fetch(URL, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })

    const list = await res.json()

    setData(list)
    
  }

  
  return (
    <div className="App">
      
        <table className='table'>
            <thead>
                <tr>
                    <th>EDYTUJ</th>
                    <th>USUŃ</th>
                    <th>IMIE</th>
                    <th>NAZWISKO</th>
                    <th>PENSJA_ZASADNICZA</th>
                    <th>PREMIA_MOTYWACYJNA</th>
                    <th>PREMIA_UZ_MIES_PR_STYCZEN</th>
                    <th>PREMIA_UZ_MIES_PR_LUTY</th>
                    <th>PREMIA_UZ_MIES_PR_MARZEC</th>
                    <th>PREMIA_UZ_MIES_PR_KWIECIEN</th>
                    <th>PREMIA_UZ_MIES_PR_MAJ</th>
                    <th>PREMIA_UZ_MIES_PR_CZERWIEC</th>
                    <th>PREMIA_UZ_MIES_PR_LIPIEC</th>
                    <th>PREMIA_UZ_MIES_PR_SIERPIEN</th>
                    <th>PREMIA_UZ_MIES_PR_WRZESIEN</th>
                    <th>PREMIA_UZ_MIES_PR_PAZDZIERNIK</th>
                    <th>PREMIA_UZ_MIES_PR_LISTOPAD</th>
                    <th>PREMIA_UZ_MIES_PR_GRUDZIEN</th>
                    <th>PREMIA_UZ_MIES_WA_STYCZEN</th>
                    <th>PREMIA_UZ_MIES_WA_LUTY</th>
                    <th>PREMIA_UZ_MIES_WA_MARZEC</th>
                    <th>PREMIA_UZ_MIES_WA_KWIECIEN</th>
                    <th>PREMIA_UZ_MIES_WA_MAJ</th>
                    <th>PREMIA_UZ_MIES_WA_CZERWIEC</th>
                    <th>PREMIA_UZ_MIES_WA_LIPIEC</th>
                    <th>PREMIA_UZ_MIES_WA_SIERPIEN</th>
                    <th>PREMIA_UZ_MIES_WA_WRZESIEN</th>
                    <th>PREMIA_UZ_MIES_WA_PAZDZIERNIK</th>
                    <th>PREMIA_UZ_MIES_WA_LISTOPAD</th>
                    <th>PREMIA_UZ_MIES_WA_GRUDZIEN</th>
                    <th>PREMIA_CAL_MIES_STY</th>
                    <th>PREMIA_CAL_MIES_LUT</th>
                    <th>PREMIA_CAL_MIES_MAR</th>
                    <th>PREMIA_CAL_MIES_KWI</th>
                    <th>PREMIA_CAL_MIES_MAI</th>
                    <th>PREMIA_CAL_MIES_CZE</th>
                    <th>PREMIA_CAL_MIES_LIP</th>
                    <th>PREMIA_CAL_MIES_SIE</th>
                    <th>PREMIA_CAL_MIES_WRZ</th>
                    <th>PREMIA_CAL_MIES_PAZ</th>
                    <th>PREMIA_CAL_MIES_LIS</th>
                    <th>PREMIA_CAL_MIES_GRU</th>
                    <th>PENSJA_CAL_MIES_STY</th>
                    <th>PENSJA_CAL_MIES_LUT</th>
                    <th>PENSJA_CAL_MIES_MAR</th>
                    <th>PENSJA_CAL_MIES_KWI</th>
                    <th>PENSJA_CAL_MIES_MAI</th>
                    <th>PENSJA_CAL_MIES_CZE</th>
                    <th>PENSJA_CAL_MIES_LIP</th>
                    <th>PENSJA_CAL_MIES_SIE</th>
                    <th>PENSJA_CAL_MIES_WRZ</th>
                    <th>PENSJA_CAL_MIES_PAZ</th>
                    <th>PENSJA_CAL_MIES_LIS</th>
                    <th>PENSJA_CAL_MIES_GRU</th>
                    <th>PENSJA_MINIMALNA</th>
                    <th>PENSJA_MAKSYMALNA</th>
                    <th>PENSJA_SREDNIA</th>
                    <th>PREMIA_MINIMALNA</th>
                    <th>PREMIA_MAKSYMALNA</th>
                    <th>PREMIA_SREDNIA</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((item) => {
                        return(
                            <tr key={data.ID}>
                                <td><Link to={`/employee/${data.ID}/edit`} className="editButton">
                                    Edit
                                </Link></td>
                                <td></td>
                                <td>{data.IMIE}</td>
                                <td>{data.NAZWISKO}</td>
                                <td>{data.PENSJA_ZASADNICZA}</td>
                                <td>{data.PREMIA_MOTYWACYJNA}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_STYCZEN}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_LUTY}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_MARZEC}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_KWIECIEN}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_MAJ}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_CZERWIEC}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_LIPIEC}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_SIERPIEN}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_WRZESIEN}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_PAZDZIERNIK}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_LISTOPAD}</td>
                                <td>{data.PREMIA_UZ_MIES_PR_GRUDZIEN}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_STYCZEN}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_LUTY}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_MARZEC}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_KWIECIEN}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_MAJ}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_CZERWIEC}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_LIPIEC}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_SIERPIEN}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_WRZESIEN}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_PAZDZIERNIK}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_LISTOPAD}</td>
                                <td>{data.PREMIA_UZ_MIES_WA_GRUDZIEN}</td>
                                <td>{data.PREMIA_CAL_MIES_STY}</td>
                                <td>{data.PREMIA_CAL_MIES_LUT}</td>
                                <td>{data.PREMIA_CAL_MIES_MAR}</td>
                                <td>{data.PREMIA_CAL_MIES_KWI}</td>
                                <td>{data.PREMIA_CAL_MIES_MAI}</td>
                                <td>{data.PREMIA_CAL_MIES_CZE}</td>
                                <td>{data.PREMIA_CAL_MIES_LIP}</td>
                                <td>{data.PREMIA_CAL_MIES_SIE}</td>
                                <td>{data.PREMIA_CAL_MIES_WRZ}</td>
                                <td>{data.PREMIA_CAL_MIES_PAZ}</td>
                                <td>{data.PREMIA_CAL_MIES_LIS}</td>
                                <td>{data.PREMIA_CAL_MIES_GRU}</td>
                                <td>{data.PENSJA_CAL_MIES_STY}</td>
                                <td>{data.PENSJA_CAL_MIES_LUT}</td>
                                <td>{data.PENSJA_CAL_MIES_MAR}</td>
                                <td>{data.PENSJA_CAL_MIES_KWI}</td>
                                <td>{data.PENSJA_CAL_MIES_MAI}</td>
                                <td>{data.PENSJA_CAL_MIES_CZE}</td>
                                <td>{data.PENSJA_CAL_MIES_LIP}</td>
                                <td>{data.PENSJA_CAL_MIES_SIE}</td>
                                <td>{data.PENSJA_CAL_MIES_WRZ}</td>
                                <td>{data.PENSJA_CAL_MIES_PAZ}</td>
                                <td>{data.PENSJA_CAL_MIES_LIS}</td>
                                <td>{data.PENSJA_CAL_MIES_GRU}</td>
                                <td>{data.PENSJA_MINIMALNA}</td>
                                <td>{data.PENSJA_MAKSYMALNA}</td>
                                <td>{data.PENSJA_SREDNIA}</td>
                                <td>{data.PREMIA_MINIMALNA}</td>
                                <td>{data.PREMIA_MAKSYMALNA}</td>
                                <td>{data.PREMIA_SREDNIA}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  );
}

export default ListTable;
