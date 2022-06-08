import React from 'react';
import { Link } from 'react-router-dom';
// import {Link } from "react-scroll";
 import img1 from 'E:/OneHealth-master/client/src/images/Logo.png';
// import {scroller} from "react-scroll";
// import {useHistory} from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-light bg-${props.bg} fixed-top ml-4`} >
    <div className="container-fluid  ">
      <span className=" mr-0 p-0">
      { <Link   to="#"><img src={img1} alt='logo' className='ml-2 float-start' /></Link>}
      <Link  className="navbar-brand text-warning m-2 " to="#">Nelkanth Eye Hospital</Link>
      </span>
      
      <span>
      <span className="form-check form-switch float-start ">
      <input className="form-check-input" type="checkbox" onClick={props.toggle}  role="switch" id="flexSwitchCheckDefault" style={{marginRight:"30px"}}/>
      </span>
      <button className="navbar-toggler border-light"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon" ></span>
      </button>
      </span>
      <div className="offcanvas offcanvas-end bg-dark text-warning border-light 5px" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Neelkanth Eye Hospital</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body ">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 border-light">
            <li className="nav-item  border-light">
              <Link  className="nav-link active text-light " aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light" to="/About">About Us</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light" to="/Services">Our Services</Link>
            </li><li className="nav-item">
              <Link  className="nav-link text-light" to="/login">Get Appointment</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light" to="/Gallary">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light" to="/Contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light" to="/Review">Review</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}
