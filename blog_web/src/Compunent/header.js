import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" style={{fontFamily:"-moz-initial",fontWeight:"bold",fontSize:"25px"}}>MHK BLOG</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar" style={{marginLeft:"20%"}}>
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Post2">BLOG</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="Portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Login">Login</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;
