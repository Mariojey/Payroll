import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import * as tokenHandler from './modules/TokenHandler'

import ListView from "./components/cruds/listView";
import Create from "./components/cruds/createForm";
import EmployeeCard from "./components/cruds/employeeById";
import ListTable from "./components/cruds/listTable";
import Edit from "./components/cruds/edit";
import Navbar from "./components/common/Navbar";
import Login from "./components/cruds/login";
function App(){

  const [logged, setLogged] = useState(false)
  const [roleAdmin, setRoleAdmin] = useState(false)

  const navigate = useNavigate();

  function verifyCredentials(){
    tokenHandler.verifyCredentials()
    .then(data => {
      if(data.status === "OK"){
        if(data.role === "ADMIN"){
          setLogged(true)
          setRoleAdmin(true)
          navigate('/employee')
        }else if(data.role === "USER"){
          setLogged(true)
          setRoleAdmin(false)
          navigate(`/employee/${data.id}`)
          }else{
          navigate('/login')  
        }
      }
    })
  }

  useEffect(() => {
    verifyCredentials();
  }, [])

  return(
    <div className="App">

      {logged ? (
        roleAdmin ? (
          <Routes>
            <Route exact path="/list" element={<ListView />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/employee/:id/" element={<EmployeeCard />} />
            <Route exact path="/employee" element={<ListTable />} />
            <Route exact path="/employee/edit/:id" element={<Edit />} />
          </Routes>
        ) : (
          <Routes>
              <Route exact path="/employee/:id/" element={<EmployeeCard />} />
          </Routes>
        )
      ) : (
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      )
    
    }

    </div>
  )

}
export default App;