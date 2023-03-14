import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../common/Navbar";
import './form.css'

function Edit(props){
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

    const [data, setData] = useState(initialState);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(
        function (){
            async function getEmployee(){
                const URL = `http://127.0.0.1:8888/api/payroll/${id}`
                try{

                    const res = await fetch(URL, {
                      method: 'GET',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      }
                    })
                    const list = await res.json()

                    setData(list[0])
                }catch(error){
                    console.log(error);
                }
            }
            getEmployee()
        }, [props]
    );
       
    function handleSubmit(event){
        event.preventDefault();
        async function updateEmployee(){
            const URL = `http://127.0.0.1:8888/api/payroll/${id}`
            try{

                    const res = await fetch(URL, {
                      method: 'PATCH',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    })
                    navigate(`/employee/`);
            }catch(error){
                console.log(error);
            }
        }
        updateEmployee()
    }
    console.log(data);

    function handleChange(event){
        setData({...data, [event.target.name]: event.target.value});
    }

    function handleCancel(){
        navigate(`/employee/`);
    }

    return(
        <div className="App">

        <Navbar />

        <div className="container">
			<h1>Edytuj paracownika</h1>
			<hr />
			<form onSubmit={handleSubmit} className="form">
				<div className="form-group">
					<label>Imie</label>
					<input
						name="IMIE"
						type="text"
						required
						value={data.IMIE}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>Nazwisko</label>
					<input
						name="NAZWISKO"
						type="text"
						required
						value={data.NAZWISKO}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>Pensja Zasadnicza</label>
					<input
						name="PENSJA_ZASADNICZA"
						type="number"
						required
						value={data.PENSJA_ZASADNICZA}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Edytuj" className="btn-submit"/>
					<button
						type="button"
						onClick={handleCancel}
						className="btn-submit"
					>
						Anuluj
					</button>
				</div>
			</form>
		</div>
        </div>
    )
}

export default Edit