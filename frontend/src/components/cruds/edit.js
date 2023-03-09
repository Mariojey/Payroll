import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        PREMIA_UZ_MIES_PR_GRUDZIEN:0
    }

    const [data, setData] = useState({});

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

                    setData(list)
                }catch(error){
                    console.log(error);
                }
            }
            getEmployee()
        }, [props]
    );
        console.log(data);
    function handleSubmit(event){
        event.preventDefault();
        async function updateEmployee(){
            try{
                const URL = `http://127.0.0.1:8888/api/payroll/${id}`

                    const res = await fetch(URL, {
                      method: 'PATCH',
                      headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    })
                    navigate(`/employee/${data.id}`);
            }catch(error){
                console.log(error);
            }
        }
        updateEmployee()
    }

    function handleChange(event){
        setData({...data, [event.target.name]: event.target.value});
    }

    function handleCancel(){
        navigate(`/employee/`);
    }

    return(
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
    )
}

export default Edit