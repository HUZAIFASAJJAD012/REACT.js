import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)" style={{fontFamily:"-moz-initial",fontWeight:"bold",fontSize:"25px"}}>MHK BLOG</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar" style={{marginLeft:"20%"}}>
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">BLOG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Social Media</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">plotfolio</a>
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
