import { useState } from "react";
import Navbar from "./Navbar";
import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from './Footer'
import React, { useEffect } from 'react';
export default function Services() {
  useEffect(() =>{
    Aos.init({});
    },[]);
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
    <div style={{backgroundColor:'#517664'}}>
      <Navbar bg={bg} toggle= {toggle}/>
      <div className="alert alert-warning alert-dismissible fade show mt-5" role="alert">
      <strong >Hello!</strong > Welcome To The Neelkanth Eye hospital 
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <h1 className="animate__animated animate__zoomInUp animate__slower" style={{fontFamily:'Times New Roman',marginTop:'60px',textAlign:'center',color:'#FFFFFF' , fontSize:'50px'}}>Our Services And Pakages</h1>
    <table style={{ marginLeft:'270px' ,marginTop:'50px'}}>
      <tbody>
        <tr>
          <th style={{ fontSize: "150%", color: "#F38375" }}>Package A</th>
        </tr>
        <tr />
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>I.</td>
          <td style={{ color: "white" }}>Pterigium C CLAG</td>
          <td style={{ color: "#F7A399" }}>Rs.3500</td>
        </tr>
        <tr></tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>II.</td>
          <td style={{ color: "white" }}>
            PMMA Lens[Aspheric]+ OT Charges + Intial Medicines{" "}
          </td>
          <td style={{ color: "#F7A399" }}>Rs.400</td>
        </tr>
        <tr />
        <tr />
        <tr>
          <th style={{ fontSize: "150%", color: "#F38375" }}>Package B</th>
        </tr>
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>I.</td>
          <td style={{ color: "white" }}>
            PMMA Lens + OT Charges + Intial Medicines
          </td>
          <td style={{ color: "#F7A399" }}>Rs.6500</td>
        </tr>
        <tr />
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>II.</td>
          <td style={{ color: "white" }}>
            Foldable IOL[Aspheric] + OT Charges + Intial Medicines
          </td>
          <td style={{ color: "#F7A399" }}>Rs.4500</td>
        </tr>
        <tr />
        <tr />
        <tr>
          <th style={{ fontSize: "150%", color: "#F38375" }}>Package C</th>
        </tr>
        <tr></tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>I.</td>
          <td style={{ color: "white" }}>
            Foldable IOL[Yellow Aspheric] + OT Charges + Intial Medicines
          </td>
          <td style={{ color: "#F7A399" }}>Rs.11000</td>
        </tr>
        <tr />
        <tr>
          <th style={{ fontSize: "150%", color: "#F38375" }}>Package D</th>
        </tr>
        <tr></tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>I.</td>
          <td style={{ color: "white" }}>
            {" "}
            Foldable IOL[Hydro Phobic] + OT Charges + Intial Medicines
          </td>
          <td style={{ color: "#F7A399" }}>Rs.14000</td>
        </tr>
      </tbody>
    </table>
    <h1
      style={{
        textAlign:'center',
        color: "#FFFFFF",
        fontSize: "200%",
        textTransform: "uppercase",
        marginTop:'40px',
        fontFamily:'Times New Roman'
      }} data-aos="fade-up"
      data-aos-duration="3000"
    >
      Other Opthalmic Surgery
    </h1>
    <table style={{ marginLeft:'380px', fontSize: "110%" ,marginTop:'40px'}}>
      <tbody>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>I.</td>
          <td style={{ color: "white" }}>Pterigium C CLAG</td>
          <td style={{ color: "#F7A399" }}>Rs.3500</td>
        </tr>
        <tr></tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>II.</td>
          <td width="417px" style={{ color: "white" }}>
            Chalezian
          </td>
          <td style={{ color: "#F7A399" }}>Rs.1500</td>
        </tr>
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>III.</td>
          <td style={{ color: "white" }}>Cyst Removal</td>
          <td style={{ color: "#F7A399" }}>Rs.2000</td>
        </tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>IV.</td>
          <td style={{ color: "white" }}>Syringing</td>
          <td style={{ color: "#F7A399" }}>Rs.350</td>
        </tr>
        <tr></tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>V.</td>
          <td style={{ color: "white" }}>Fungus Examinations</td>
          <td style={{ color: "#F7A399" }}>Rs.350</td>
        </tr>
        <tr></tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>VI.</td>
          <td style={{ color: "white" }}> Epilation</td>
          <td style={{ color: "#F7A399" }}>Rs.250 One Lid....</td>
        </tr>
        <tr></tr>
        <tr />
        <tr>
          <td style={{ textAlign: "right", color: "white" }}>VII.</td>
          <td style={{ color: "white" }}> Repairs of Injury</td>
          <td style={{ color: "#F7A399" }}>
            Charges Depend on the Nature of Injury
          </td>
        </tr>
      </tbody>
    </table>
    <p style={{ paddingRight: 90, paddingLeft: 200, color: "#F38375" }}>
      <em>
        {" "}
        Charges Included Surgeryo + OT Charge + Initial Medicine[for SI NO I to
        III]{" "}
      </em>
    </p>
    

     
<Footer />

    </div>
  )
}
