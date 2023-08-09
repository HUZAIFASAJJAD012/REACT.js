import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Compunent/header"; 
import Home from "./Compunent/home";
import Footer from "./Compunent/footer";
import Post from "./Compunent/post";
import Portfolio from "./Compunent/Portfolio";

function App() {
  return (
    <div>
 
 <Header />
        <Routes>
          
    <Route path="/" element={<Home/>}/>
    <Route path="Post" element={<Post/>}/>
    <Route path="Portfolio" element={<Portfolio/>}/>

        </Routes>
  <Footer/>
    </div>
  );
}

export default App;
