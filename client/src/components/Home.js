import React, { useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Imageslider from "./Imageslider";
import Navbar from "./Navbar";


export default function Home() {
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
  };
  return (
    <div className="bg-dark" style={{width:"100%",height:"100%",overflow:"hidden"}}>
      <Navbar bg={bg} toggle= {toggle} />
      <Imageslider />
      <Cards />
      <Footer/>
      
    </div>
  )
}
