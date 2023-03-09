import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './form.css';

function Create(){
    const initialState = {
        name: '',
        surname: '',
        basic_salary: 0
    }
    const [employee, setEmployee] = useState(initialState)

    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();

        async function postEmployee(){
            const URL = `http://127.0.0.1:8888/api/payroll/`
            try{
                const res = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(employee)
                  })
                  navigate(`/payroll/${res.rows.ID}`)
              
            }catch(error){
                console.log(error);
            }
        }
        postEmployee()
    }

    function handleChange(event){
        setEmployee({...employee, [event.target.name]: event.target.value});
    }

    function handleCancel(){
        navigate('/')
    }


    return(
        <div className="container">
			<h1>Dodaj pracownika</h1>
			<hr />
			<form onSubmit={handleSubmit} className="form">
				<div className="form-group">
					<label>Imie</label>
					<input
						name="name"
						type="text"
						required
						value={employee.name}
						onChange={handleChange}
						className="form-control"
						placeholder="Wpisz imie pracownika..."
					/>
				</div>
                <div className="form-group">
					<label>Nazwisko</label>
					<input
						name="surname"
						type="text"
						required
						value={employee.surname}
						onChange={handleChange}
						className="form-control"
						placeholder="Wpisz nazwisko pracownika..."
					/>
				</div>
                <div className="form-group">
					<label>Pensja Zasadnicza</label>
					<input
						name="basic_salary"
						type="number"
						required
						value={employee.basic_salary}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Dodaj" className="btn-submit" onClick={handleCancel}/>
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

export default Create;