import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login(){
    const initialState = {
        email: '',
        password: ''
    }
    const [data, setData] = useState(initialState)
    const [message, setMessage] = useState(` `)

    const navigate = useNavigate();


    function handleSubmit(event){
        event.preventDefault()

        async function checkData(){
            const URL = `http://127.0.0.1:8888/api/login/admin`;
            try{
                const res = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                if(res.status === 'OK'){
                    navigate(`/employee/`)
                }else{
                    const URL = `http://127.0.0.1:8888/api/login/user`;
                    try{
                        const res = await fetch(URL, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        })
                        if(res.status === 'OK'){
                            navigate(`/employee/`)
                        }else{
                            setMessage(`Nie znaleziono takiego użytkownika w bazie danych`)
                        }
                    }catch(error){
                        console.log(error);
                    }
                }
            }catch(error){
                console.log(error);
            }
        }
        checkData()
    }
    console.log(data);
    function handleChange(event){
        setData({...data, [event.target.name]: event.target.value});
    }

    return(
        <div className="loginContainer">
            <h1>Zaloguj się</h1>
            <hr />
            <form onSubmit={handleSubmit} className="form">
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						required
						value={data.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>Hasło</label>
					<input
						name="password"
						type="password"
						required
						value={data.password}
						onChange={handleChange}
						className="form-control"
					/>
				</div>


				<div className="btn-group">
					<input type="submit" value="Zaloguj" className="btn-submit"/>

				</div>
			</form>
            <p>{message}</p>
        </div>
    )
}
export default Login