import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './form.css'

function Edit(props){
    const initialState = {
        name: '',
        surname: '',
        basic_salary: 0
    }

    const [data, setData] = useState(initialState);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(
        ()=>{
            async function getEmployee(){
                try{
                    const URL = `http://127.0.0.1:8888/api/payroll/${id}`

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
        }
    );

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
						name="name"
						type="text"
						required
						value={data.name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>Nazwisko</label>
					<input
						name="surname"
						type="text"
						required
						value={data.surname}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>Pensja Zasadnicza</label>
					<input
						name="basic_salary"
						type="number"
						required
						value={data.basic_salary}
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