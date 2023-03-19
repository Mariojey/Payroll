import React, { useState, useEffect } from "react";
import DataTable, {createTheme} from 'react-data-table-component';
import { Link, useNavigate, useParams } from "react-router-dom";

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
          <h1>{employee[0].IMIE}</h1>
          <h2>{employee[0].NAZWISKO}</h2>
    </div>
    )
}
export default EmployeeCard