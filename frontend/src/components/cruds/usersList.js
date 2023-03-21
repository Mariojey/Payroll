import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import './table.css';

function UsersList() {

    const [data, setData] = useState([])
    
    function fetchData(){
        const URL = 'http://127.0.0.1:8888/api/login/users'

        fetch(URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(dataResponse => {
            setData(dataResponse)
        })
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <div className="App">

        <Navbar />
        <div className="tableComponent">
            <h1>Lista Użytkowników</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="tableRowName">EMAIL</th>
                        <th className="tableRowName">IMIE</th>
                        <th className="tableRowName">NAZWISKO</th>
                        <th className="tableRow">SZCZEGÓŁY</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item) => {
                            return(
                                <tr key={item.ID}>
                                    <td className="tableRowName">{item.EMAIL}</td>
                                    <td className="tableRowName">{item.IMIE}</td>
                                    <td className="tableRowName">{item.NAZWISKO}</td>
                                    <td className="tableRow">
                                        <Link to={`/employee/${item.EMPLOYEE_ID}/`} className="showButton">
                                            Pokaż
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        </div>
    )
}
export default UsersList;