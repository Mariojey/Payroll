import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import './form.css';

function CreateUser(){
    const initialState = {
        EMAIL: '',
        PASSWORD: '',
    }
    const [user, setUser] = useState(initialState)
    const [data, setData] = useState([])
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();

        async function postUser(){
            const URL = `http://127.0.0.1:8888/api/login/users/`
            
                fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }).then(res => res.json())
                .then(res => {
                    navigate(`/users`)
                })
            

            }
        postUser()
    }


function handleChange(event){
    setUser({...user, [event.target.name]: event.target.value})
}

function handleCancel(){
    navigate('/users')
}
function getAllEmployees(){
    const URLEmploees = 'http://127.0.0.1:8888/api/payroll';
    
        fetch(URLEmploees, {
            method: 'GET',
            headers: {
                'Accept': 'application/type',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            setData(data)
        })
}

useEffect(() => {
    getAllEmployees()
},[])
console.log(data);
return(
    <div className="App">
        <Navbar />

        <div className="container">
            <h1>Dodaj użytkownika</h1>
            <hr />
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="EMAIL"
                        required
                        value={user.EMAIL}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Wpisz adres email pracownika..." />
                </div>
                <div className="form-group">
                    <label>Hasło</label>
                    <input 
                        type="password"
                        name="PASSWORD"
                        required
                        value={user.PASSWORD}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Podaj hasło wygenerowane dla pracownika..."
                        />
                </div>
                <div className="form-group">
                    <label>Wybierz Pracownika do którego chcesz przypisać konto</label>
                    <select name="EMPLOYEE_ID" id="employee_id" className="selectEmployeeId" onChange={handleChange}>
                        {data && data.map((item) => {
                            return(
                                <option key={item.ID} value={item.ID}>{item.IMIE}  {item.NAZWISKO}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="btn-group">
					<input type="submit" value="Dodaj" className="btn-submit"/>
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

export default CreateUser;