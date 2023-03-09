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
                <NavLink className="navLink" to="/employee">Lista</NavLink>
                </li>
                <li className="navItem">
                <NavLink className="navLink" to="/create">Dodaj</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar