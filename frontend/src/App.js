import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListView from "./components/cruds/listView";
import Create from "./components/cruds/createForm";
import EmployeeCard from "./components/cruds/employeeById";
import ListTable from "./components/cruds/listTable";
import Edit from "./components/cruds/edit";
import Navbar from "./components/common/Navbar";
function App(){

  return(
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ListView />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/employee/:id" element={<EmployeeCard />} />
          <Route exact path="/employee" element={<ListTable />} />
          <Route exact path="/employee/:id/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App;