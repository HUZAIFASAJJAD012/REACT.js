import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Compunent/header"; 
import Home from "./Compunent/home";
import Footer from "./Compunent/footer";
import Post from "./Compunent/post";
import Portfolio from "./Compunent/Portfolio";
import Post2 from "./Compunent/post2";
import Login from "./Compunent/login";
function App() {
  return (
    <div>
 
 <Header />
        <Routes>
          
    <Route path="/" element={<Home/>}/>
    <Route path="Post" element={<Post/>}/>
    <Route path="Portfolio" element={<Portfolio/>}/>
    <Route path="Post2" element={<Post2/>}/>
    <Route path="Login" element={<Login/>}/>


        </Routes>
  <Footer/>
    </div>
  );
}

export default App;
