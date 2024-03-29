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
  
      const columns = [
          {
            name: "IMIE",
            selector: (row) => row.IMIE
          },
          {
            name: "NAZWISKO",
            selector: (row) => row.NAZWISKO
          },
          {
            name: "PENSJA_ZASADNICZA",
            selector: (row) => row.PENSJA_ZASADNICZA
          },
          {
            name: "PREMIA_MOTYWACYJNA",
            selector: (row) => row.PREMIA_MOTYWACYJNA
          },
          {
            name: "PREMIA_UZ_MIES_PR_STYCZEN",
            selector: (row) => row.PREMIA_UZ_MIES_PR_STYCZEN
          },
          {
            name: "PREMIA_UZ_MIES_PR_LUTY",
            selector: (row) => row.PREMIA_UZ_MIES_PR_LUTY
          },
          {
            name: "PREMIA_UZ_MIES_PR_MARZEC",
            selector: (row) => row.PREMIA_UZ_MIES_PR_MARZEC
          },
          {
            name: "PREMIA_UZ_MIES_PR_KWIECIEN",
            selector: (row) => row.PREMIA_UZ_MIES_PR_KWIECIEN
          },
          {
            name: "PREMIA_UZ_MIES_PR_MAJ",
            selector: (row) => row.PREMIA_UZ_MIES_PR_MAJ
          },
          {
            name: "PREMIA_UZ_MIES_PR_CZERWIEC",
            selector: (row) => row.PREMIA_UZ_MIES_PR_CZERWIEC
          },
          {
            name: "PREMIA_UZ_MIES_PR_LIPIEC",
            selector: (row) => row.PREMIA_UZ_MIES_PR_LIPIEC
          },
          {
            name: "PREMIA_UZ_MIES_PR_SIERPIEN",
            selector: (row) => row.PREMIA_UZ_MIES_PR_SIERPIEN
          },
          {
            name: "PREMIA_UZ_MIES_PR_WRZESIEN",
            selector: (row) => row.PREMIA_UZ_MIES_PR_WRZESIEN
          },
          {
            name: "PREMIA_UZ_MIES_PR_PAZDZIERNIK",
            selector: (row) => row.PREMIA_UZ_MIES_PR_PAZDZIERNIK
          },
          {
            name: "PREMIA_UZ_MIES_PR_LISTOPAD",
            selector: (row) => row.PREMIA_UZ_MIES_PR_GRUDZIEN
          },
          {
            name: "PREMIA_UZ_MIES_PR_GRUDZIEN",
            selector: (row) => row.PREMIA_UZ_MIES_PR_GRUDZIEN
          },
          {
            name: "PREMIA_UZ_MIES_WA_STYCZEN",
            selector: (row) => row.PREMIA_UZ_MIES_WA_STYCZEN
          },
          {
            name: "PREMIA_UZ_MIES_WA_LUTY",
            selector: (row) => row.PREMIA_UZ_MIES_WA_LUTY
          },
          {
            name: "PREMIA_UZ_MIES_WA_MARZEC",
            selector: (row) => row.PREMIA_UZ_MIES_WA_MARZEC
          },
          {
            name: "PREMIA_UZ_MIES_WA_KWIECIEN",
            selector: (row) => row.PREMIA_UZ_MIES_WA_KWIECIEN
          },
          {
            name: "PREMIA_UZ_MIES_WA_MAJ",
            selector: (row) => row.PREMIA_UZ_MIES_WA_MAJ
          },
          {
            name: "PREMIA_UZ_MIES_WA_CZERWIEC",
            selector: (row) => row.PREMIA_UZ_MIES_WA_CZERWIEC
          },
          {
            name: "PREMIA_UZ_MIES_WA_LIPIEC",
            selector: (row) => row.PREMIA_UZ_MIES_WA_LIPIEC
          },
          {
            name: "PREMIA_UZ_MIES_WA_SIERPIEN",
            selector: (row) => row.PREMIA_UZ_MIES_WA_SIERPIEN
          },
          {
            name: "PREMIA_UZ_MIES_WA_WRZESIEN",
            selector: (row) => row.PREMIA_UZ_MIES_WA_WRZESIEN
          },
          {
            name: "PREMIA_UZ_MIES_WA_PAZDZIERNIK",
            selector: (row) => row.PREMIA_UZ_MIES_WA_PAZDZIERNIK
          },
          {
            name: "PREMIA_UZ_MIES_WA_LISTOPAD",
            selector: (row) => row.PREMIA_UZ_MIES_WA_LISTOPAD
          },
          {
            name: "PREMIA_UZ_MIES_WA_GRUDZIEN",
            selector: (row) => row.PREMIA_UZ_MIES_WA_GRUDZIEN
          },
          {
            name: "PREMIA_CAL_MIES_STY",
            selector: (row) => row.PREMIA_CAL_MIES_STY
          },
          {
            name: "PREMIA_CAL_MIES_LUT",
            selector: (row) => row.PREMIA_CAL_MIES_LUT
          },
          {
            name: "PREMIA_CAL_MIES_MAR",
            selector: (row) => row.PREMIA_CAL_MIES_MAR
          },
          {
            name: "PREMIA_CAL_MIES_KWI",
            selector: (row) => row.PREMIA_CAL_MIES_KWI
          },
          {
            name: "PREMIA_CAL_MIES_MAI",
            selector: (row) => row.PREMIA_CAL_MIES_MAI
          },
          {
            name: "PREMIA_CAL_MIES_CZE",
            selector: (row) => row.PREMIA_CAL_MIES_CZE
          },
          {
            name: "PREMIA_CAL_MIES_LIP",
            selector: (row) => row.PREMIA_CAL_MIES_LIP
          },
          {
            name: "PREMIA_CAL_MIES_SIE",
            selector: (row) => row.PREMIA_CAL_MIES_SIE
          },
          {
            name: "PREMIA_CAL_MIES_WRZ",
            selector: (row) => row.PREMIA_CAL_MIES_WRZ
          },
          {
            name: "PREMIA_CAL_MIES_PAZ",
            selector: (row) => row.PREMIA_CAL_MIES_PAZ
          },
          {
            name: "PREMIA_CAL_MIES_LIS",
            selector: (row) => row.PREMIA_CAL_MIES_LIS
          },
          {
            name: "PREMIA_CAL_MIES_GRU",
            selector: (row) => row.PREMIA_UZ_MIES_WA_GRUDZIEN
          },
          {
            name: "PENSJA_CAL_MIES_STY",
            selector: (row) => row.PENSJA_CAL_MIES_STY
          },
          {
            name: "PENSJA_CAL_MIES_LUT",
            selector: (row) => row.PENSJA_CAL_MIES_LUT
          },
          {
            name: "PENSJA_CAL_MIES_MAR",
            selector: (row) => row.PENSJA_CAL_MIES_MAR
          },
          {
            name: "PENSJA_CAL_MIES_KWI",
            selector: (row) => row.PENSJA_CAL_MIES_KWI
          },
          {
            name: "PENSJA_CAL_MIES_MAI",
            selector: (row) => row.PENSJA_CAL_MIES_MAI
          },
          {
            name: "PENSJA_CAL_MIES_CZE",
            selector: (row) => row.PENSJA_CAL_MIES_CZE
          },
          {
            name: "PENSJA_CAL_MIES_LIP",
            selector: (row) => row.PENSJA_CAL_MIES_LIP
          },
          {
            name: "PENSJA_CAL_MIES_SIE",
            selector: (row) => row.PENSJA_CAL_MIES_SIE
          },
          {
            name: "PENSJA_CAL_MIES_WRZ",
            selector: (row) => row.PENSJA_CAL_MIES_WRZ
          },
          {
            name: "PENSJA_CAL_MIES_PAZ",
            selector: (row) => row.PENSJA_CAL_MIES_PAZ
          },
          {
            name: "PENSJA_CAL_MIES_LIS",
            selector: (row) => row.PENSJA_CAL_MIES_LIS
          },
          {
            name: "PENSJA_CAL_MIES_GRU",
            selector: (row) => row.PENSJA_CAL_MIES_GRU
          },
          {
            name: "PENSJA_MINIMALNA",
            selector: (row) => row.PENSJA_MINIMALNA
          },
          {
            name: "PENSJA_MAKSYMALNA",
            selector: (row) => row.PENSJA_MAKSYMALNA
          },
          {
            name: "PENSJA_SREDNIA",
            selector: (row) => row.PENSJA_SREDNIA
          },
          {
            name: "PREMIA_MINIMALNA",
            selector: (row) => row.PREMIA_MINIMALNA
          },
          {
            name: "PREMIA_MAKSYMALNA",
            selector: (row) => row.PREMIA_MAKSYMALNA
          },
          {
            name: "PREMIA_SREDNIA",
            selector: (row) => row.PREMIA_SREDNIA
          }]
  
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
  
      createTheme('dark', {
        background: {
          default: '#000',
        },
        color: {
          default: '#fff'
        }
      });

      return(
          <div className="Card">
            <DataTable
              title="Pracownik"
              columns={columns}
              data={employee}
              theme="dark"
              progressPending={loading}
              pagination
            />
      </div>
      )
  }
  export default EmployeeCard
  