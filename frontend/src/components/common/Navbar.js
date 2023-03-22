import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './navbar.css';
import { clearTokenData } from "../../modules/TokenHandler";

function Navbar(){

    const navigate = useNavigate()

    function logOut(){
        clearTokenData()
        navigate('/login')
    }

    return(
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                <NavLink className="navLink" to="/">Strona Główna</NavLink>
                </li>
                <li className="navItem">
                <NavLink className="navLink" to="/employee">Pracownicy</NavLink>
                </li>
                <li className="navItem">
                <NavLink className="navLink" to="/create">Dodaj pracownika</NavLink>
                </li>
                <li className="navItem">
                <NavLink className="navLink" to="/users">Użytkownicy</NavLink>
                </li>
                <li className="navItem">
                <NavLink className="navLink" to="/createuser">Dodaj użytkownika</NavLink>
                </li>
                <li className="navItem">
                <a className="navLink" onClick={logOut}>Wyloguj się</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar