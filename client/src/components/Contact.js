import React, { useState } from "react";
import Navbar from "./Navbar";
import contact from 'E:/OneHealth-master/client/src/images/contact2.jpg';
// import home from 'E:/OneHealth-master/client/src/images/home.png';
// import call from 'E:/OneHealth-master/client/src/images/call.png';

export default function Contact() {
  const [bg, setBg]= useState("dark");
  const toggle= ()=>{
    if(bg==='light')
    {
      setBg("dark");
      document.body.style.backgroundColor='warning';
    }
    else{
      setBg("light");
      document.body.style.backgroundColor='success';
    }
  }
  return (
    <div>
      <Navbar bg={bg} toggle= {toggle}/>
      <div className="alert alert-warning alert-dismissible fade show mt-5" role="alert">
        <strong >Hello!</strong > Welcome To The Neelkanth Eye hospital 
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  <div style={{marginTop:"130px"}}>
        <img src={contact} alt="map" style={{marginTop:"-80px",marginLeft:'-10px',marginRight:"0px",backgroundSize:'cover'}}/>
        <div className="row float-end" style={{marginRight:"30px",marginTop:"60px"}}>
        <ul className="fa-ul fw-bolder fs-5" style={{ marginLeft: "1em",marginTop:"-450px" , marginRight:"50px"}}>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-home" />
                </span>
                <span className="ms-2">Gosaiganj , Gomtinagar Lucknow</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-envelope" />
                </span>
                <span className="ms-2">vyyadav6767@gmail.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-phone" />
                </span>
                <span className="ms-2">+ 91 9026872179</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-print" />
                </span>
                <span className="ms-2">+ 91 9696792050</span>
              </li>
            </ul>
        </div>
    </div>
</div>
  )
}