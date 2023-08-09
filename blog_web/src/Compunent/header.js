import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" style={{ fontWeight: "bold", fontFamily: "alignContent", fontSize: "25px" }}>
            MHK BLOG
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll" style={{ marginLeft: "20%" }}>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: "100px" }}>
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link active">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link active">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/social-media" className="nav-link active">Social media</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit" style={{ color: "black" }}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
