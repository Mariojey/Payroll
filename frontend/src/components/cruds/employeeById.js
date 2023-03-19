import React, { useState, useEffect } from "react";
import DataTable, {createTheme} from 'react-data-table-component';
import { Link, useNavigate, useParams } from "react-router-dom";
import './card.css';

function EmployeeCard(props){
  const initialState = {
    ID: 0,
    IMIE: '',
    NAZWISKO: '',
    PENSJA_ZASADNICZA: 0,
    PREMIA_UZ_MIES_PR_STYCZEN:0,
    PREMIA_UZ_MIES_PR_LUTY:0,
    PREMIA_UZ_MIES_PR_MARZEC:0,
    PREMIA_UZ_MIES_PR_KWIECIEN:0,
    PREMIA_UZ_MIES_PR_MAJ:0,
    PREMIA_UZ_MIES_PR_CZERWIEC:0,
    PREMIA_UZ_MIES_PR_LIPIEC:0,
    PREMIA_UZ_MIES_PR_SIERPIEN:0,
    PREMIA_UZ_MIES_PR_WRZESIEN:0,
    PREMIA_UZ_MIES_PR_PAZDZIERNIK:0,
    PREMIA_UZ_MIES_PR_LISTOPAD:0,
    PREMIA_UZ_MIES_PR_GRUDZIEN:0,
    PREMIA_UZ_MIES_WA_STYCZEN:0,
    PREMIA_UZ_MIES_WA_LUTY:0,
    PREMIA_UZ_MIES_WA_MARZEC:0,
    PREMIA_UZ_MIES_WA_KWIECIEN:0,
    PREMIA_UZ_MIES_WA_MAJ:0,
    PREMIA_UZ_MIES_WA_CZERWIEC:0,
    PREMIA_UZ_MIES_WA_LIPIEC:0,
    PREMIA_UZ_MIES_WA_SIERPIEN:0,
    PREMIA_UZ_MIES_WA_WRZESIEN:0,
    PREMIA_UZ_MIES_WA_PAZDZIERNIK:0,
    PREMIA_UZ_MIES_WA_LISTOPAD:0,
    PREMIA_UZ_MIES_WA_GRUDZIEN:0,
    PENSJA_CAL_MIES_STY:0,
    PENSJA_CAL_MIES_LUT:0,
    PENSJA_CAL_MIES_MAR:0,
    PENSJA_CAL_MIES_KWI:0,
    PENSJA_CAL_MIES_MAJ:0,
    PENSJA_CAL_MIES_CZE:0,
    PENSJA_CAL_MIES_LIP:0,
    PENSJA_CAL_MIES_SIE:0,
    PENSJA_CAL_MIES_WRZ:0,
    PENSJA_CAL_MIES_PAZ:0,
    PENSJA_CAL_MIES_LIS:0,
    PENSJA_CAL_MIES_GRU:0,
    PREMIA_CAL_MIES_STY:0,
    PREMIA_CAL_MIES_LUT:0,
    PREMIA_CAL_MIES_MAR:0,
    PREMIA_CAL_MIES_KWI:0,
    PREMIA_CAL_MIES_MAJ:0,
    PREMIA_CAL_MIES_CZE:0,
    PREMIA_CAL_MIES_LIP:0,
    PREMIA_CAL_MIES_SIE:0,
    PREMIA_CAL_MIES_WRZ:0,
    PREMIA_CAL_MIES_PAZ:0,
    PREMIA_CAL_MIES_LIS:0,
    PREMIA_CAL_MIES_GRU:0,
    PREMIA_MOTYWACYJNA:0,
    PENSJA_MINIMALNA:0,
    PENSJA_MAKSYMALNA:0,
    PENSJA_SREDNIA:0,
    PREMIA_MAKSYMALNA:0,
    PREMIA_MINIMALNA:0,
    PREMIA_SREDNIA:0
}
    const [employee, setEmployee] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [perPage, setPerPage] = useState(20)

    const {id} = useParams();
    const navigate = useNavigate();

    
    useEffect(
        () => {
            function getEmployeeById(){
                const URL = `http://127.0.0.1:8888/api/payroll/${id}`
                try{
                    

                    fetch(URL, {
                      method: 'GET',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      }
                    }).then(res => res.json())
                    .then(data => {
                      setEmployee(data)
                      
                    })
                    
                }catch(error){
                    console.log(error);
                }
            }
            getEmployeeById();
        },[]
    )

    console.log(employee);


    return(
        <div className="Card">
          <h1>Profil Pracownika</h1>
          <table>
            <tr>
              <td>Imie</td>
              <td>{employee[0].IMIE}</td>
            </tr>
            <tr>
              <td>Nazwisko</td>
              <td>{employee[0].NAZWISKO}</td>
            </tr>
            <tr>
              <td>Pensja Zasadnicza</td>
              <td>{employee[0].PENSJA_ZASADNICZA}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Styczeń</td>
              <td>{employee[0].PENSJA_CAL_MIES_STY}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Luty</td>
              <td>{employee[0].PENSJA_CAL_MIES_LUT}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Marzec</td>
              <td>{employee[0].PENSJA_CAL_MIES_MAR}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Kwiecień</td>
              <td>{employee[0].PENSJA_CAL_MIES_KWI}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Maj</td>
              <td>{employee[0].PENSJA_CAL_MIES_MAJ}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Czerwiec</td>
              <td>{employee[0].PENSJA_CAL_MIES_CZE}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Lipiec</td>
              <td>{employee[0].PENSJA_CAL_MIES_LIP}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Sierpnień</td>
              <td>{employee[0].PENSJA_CAL_MIES_SIE}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Wrzesień</td>
              <td>{employee[0].PENSJA_CAL_MIES_WRZ}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Październik</td>
              <td>{employee[0].PENSJA_CAL_MIES_PAZ}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Listopad</td>
              <td>{employee[0].PENSJA_CAL_MIES_LIS}</td>
            </tr>
            <tr>
              <td>Pensja Całkowita Miesięczna- Grudzień</td>
              <td>{employee[0].PENSJA_CAL_MIES_GRU}</td>
            </tr>


          </table>
    </div>
    )
}
export default EmployeeCard