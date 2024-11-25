import React, { Component } from 'react'
// import { a } from 'react-router-dom'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand">News Aa Gyi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"to="/business">Business</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link"to="/Entertainment">Entertainment</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link"to="/General">General</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link"to="/Health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"to="/Science">Science</Link>
            </li> 
             <li className="nav-item">
              <Link className="nav-link"to="/Sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"to="/Technology">Technology</Link>
            </li> 
            </ul>
            {/* <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={()=>country=({country:"in"})} className="dropdown-item">INDIA</li>
            <li  onClick={()=>country=({country:"us"})} className="dropdown-item">US</li>
            <li  onClick={()=>country=({country:"rs"})} className="dropdown-item">RUSSIA</li>
          </ul>
        </div> */}
        </div>
      </div>
    </nav>
    )
  }
}

// export default Navbar;
