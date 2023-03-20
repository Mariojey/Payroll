import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as tokenHandler from '../../modules/TokenHandler'
import './login.css'

function Login(){
    const initialState = {
        email: '',
        password: ''
    }
    const [dataLogin, setDataLogin] = useState(initialState)
    const [message, setMessage] = useState(` `)

    const [remember, setRemember] = useState(true)

    function toggleRemember() {
        setRemember(prevStatus => !prevStatus)
    }

    const navigate = useNavigate();


    function handleSubmit(event){
        event.preventDefault()

        async function checkData(){
            const URL = `http://127.0.0.1:8888/api/login/admin`;
            try{
                await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataLogin)
                }).then(res => res.json())
                .then(data => {
                    if(data.status === 'OK'){

                        const admin = data.user;
                        const token = data.token;
                        const role = data.role;

                        if(remember){
                            tokenHandler.saveTokenData(admin, token, role)
                        }else{
                            tokenHandler.tempSaveTokenData(admin, token, role)
                        }

                        navigate(`/employee/`)
                    }else{
                        const URLuser = `http://127.0.0.1:8888/api/login/user`;
                        try{
                            fetch(URLuser, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(dataLogin)
                            }).then(res => res.json())
                            .then(data => {
                                if(data.status === 'OK'){
                                    const userId = data.id;
                                    const user = data.user;
                                    const token = data.token;
                                    const role = data.role;
                                    console.log(data);
                                    console.log(userId);

                                    if(remember){
                                        tokenHandler.saveTokenData(user, token, role)
                                    }else{
                                        tokenHandler.tempSaveTokenData(user, token, role)
                                    }
                                    navigate(`/employee/${userId}`)
                                }else{
                                    setMessage(`Nie znaleziono takiego użytkownika w bazie danych`)
                                    console.log(data.status, data.user);
                                }
                            })
                            
                        }catch(error){
                            console.log(error);
                        }
                    }
                })
                
            }catch(error){
                console.log(error);
            }
        }
        checkData()
    }
    console.log(dataLogin);
    function handleChange(event){
        setDataLogin({...dataLogin, [event.target.name]: event.target.value});
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
						value={dataLogin.email}
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
						value={dataLogin.password}
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