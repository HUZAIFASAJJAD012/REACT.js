import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Compunent/header"; 
import Home from "./Compunent/home";
import Footer from "./Compunent/footer";
import Post from "./Compunent/post";

function App() {
  return (
    <div>
 
 <Header />
        <Routes>
          
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Post/>}/>

        </Routes>
  <Footer/>
    </div>
  );
}

export default App;
