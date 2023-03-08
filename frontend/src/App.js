import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListView from "./components/cruds/listView";
import Create from "./components/cruds/createForm";

function App(){

  return(
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListView />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App;