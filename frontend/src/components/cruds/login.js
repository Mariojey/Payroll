import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const initialState = {
        email: '',
        password: ''
    }
    const [data, setData] = useState(initialState)

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()

        
    }

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
						name="EMAIL"
						type="email"
						required
						value={data.login}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label>Hasło</label>
					<input
						name="PASSWORD"
						type="password"
						required
						value={data.password}
						onChange={handleChange}
						className="form-control"
					/>
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
    )
}
export default Login