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
    <div className="tableComponent">
        <h1>LISTA PRACOWNIKÓW</h1>
        <table className="table">
            <thead>
                <tr>
                    <th className='tableRow'>EDYTUJ</th>
                    <th className='tableRow'>USUŃ</th>
                    <th className='tableRowName'>IMIE</th>
                    <th className='tableRowName'>NAZWISKO</th>
                    <th className="tableRowSalary">PENSJA_ZASADNICZA</th>
                    <th className="tableRowSalary">PREMIA_MOTYWACYJNA</th>
                    <th className='tableRow'>POKAŻ</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((item) => {
                        return(
                            <tr key={item.ID}>
                                <td className='tableRow'><Link to={`/employee/${item.ID}/edit`} className="editButton">
                                    Edit
                                </Link></td>
                                <td className='tableRow'><Link to={`/employee/${item.ID}/delete`} className="deleteButton">
                                    Delete
                                </Link></td>
                                <td className='tableRowName'>{item.IMIE}</td>
                                <td className='tableRowName'>{item.NAZWISKO}</td>
                                <td className="tableRowSalary">{item.PENSJA_ZASADNICZA}</td>
                                <td className="tableRowSalary">{item.PREMIA_MOTYWACYJNA}</td>
                                <td className='tableRow'><Link to={`/employee/${item.ID}/`} className="showButton">
                                    Pokaż
                                </Link></td>
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
