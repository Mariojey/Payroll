import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar(){
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
            </ul>
        </nav>
    )
}

export default Navbar