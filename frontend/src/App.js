import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListView from "./components/cruds/listView";
import Create from "./components/cruds/createForm";
import EmployeeCard from "./components/cruds/employeeById";

function App(){

  return(
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListView />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/employee/:id" element={<EmployeeCard />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App;