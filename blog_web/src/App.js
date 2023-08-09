import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Compunent/header"; 
import Home from "./Compunent/home";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
    <Route path="Home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
