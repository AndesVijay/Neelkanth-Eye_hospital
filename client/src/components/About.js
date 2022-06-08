import  { useState } from "react";
import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Footer from "./Footer";
import img1 from 'E:/OneHealth-master/client/src/images/hospital1.jpg';
import img2 from 'E:/OneHealth-master/client/src/images/doctor.jpg';
import Navbar from "./Navbar";

import img3 from 'E:/OneHealth-master/client/src/images/1.jpg';
import img4 from 'E:/OneHealth-master/client/src/images/2.jpg';
import img5 from 'E:/OneHealth-master/client/src/images/3.jpg';
import img6 from 'E:/OneHealth-master/client/src/images/4.jpg';
import img7 from 'E:/OneHealth-master/client/src/images/5.jpg';
import img8 from 'E:/OneHealth-master/client/src/images/6.jpg';
export default function About() {
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
    <>
     <Navbar bg={bg} toggle= {toggle} />
     <div>
     <div class="alert alert-warning alert-dismissible fade show mt-5" role="alert">
      <strong>Hello!</strong> Welcome To The Neelkanth Eye hospital 
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
     <h1 className="fontFamily-sans-sarif fw-bold d-flex justify-content-center text-danger animate__animated animate__fadeInUp" style={{marginTop:'60px',fontSize:'100px'}}>History</h1>
     <img src={img1} alt="hospital image" className="img-thumbnail  container float-start bg-light animate__animated animate__zoomIn" style={{width:'300px',height:'300px' ,marginTop:'40px',marginLeft:'20px'}}/>
     <p className="fontFamily-sans-sarif fw-bold d-flex justify-content-center  d-flex-justify-content-center p-5" data-aos="fade-up" data-aos-duration="3000" style={{marginTop:'-20px', fontSize:"18px"}}>
	 Neelkanth Eye Hospital was established in January 2020 by the highly respected Squadron Leader Air Force, which has an unblemished and uninterrupted history of selfless service for India. The Hospital has since been providing top quality Eye Care facilities in the region of Lucknow.

Neelkanth Eye Hospital has been totally immersed in charitable activities in the field of Education and Medical aid right from its inception. The birth of the Hospital is an offshoot of a long felt need for a well-equipped Eye hospital in the Malabar region which resulted in the Board of Trustees deciding to set up an exclusive Eye Hospital and Research Centre in the city of Calicut. The impetus for its beginning was the discovery of the acute lack of accessible Eye Care in this region and the appalling and sad state of available eye care facilities, especially for the poor. Keeping these two critical requirements in mind, the Neelkanth Eye Hospital went about creating this hospital in a very humble way.

The Hospital was inaugurated in January 2020 and the foundation stone was laid by Dr. Sarvesh Srivastava, former Sqdrn. Leader Air Force . The Hospital opened its doors with an initial strength of 2 doctors and 5 other staff. </p>
{/* ***************DIRECTOR ************* */}
     <h1 className="fontFamily-sans-sarif fw-bold d-flex justify-content-center text-danger animate__animated animate__fadeInUp" style={{marginTop:'10px',fontSize:'60px',marginBottom:"100px"}}>Director</h1>
     <img src={img4} alt="hospital image" className="img-thumbnail  container float-start bg-light " data-aos="zoom-in-up" data-aos-duration="3000" style={{width:'300px',height:'300px' ,marginTop:'-10px',marginLeft:'20px'}}/>
     <p className="fontFamily-sans-sarif fw-bold d-flex justify-content-center  d-flex-justify-content-center p-5" data-aos="fade-up" data-aos-duration="3000" style={{marginTop:'-20px', fontSize:"18px"}}>
	 Dr. Sarvesh Srivastava is the  the Chairman of Neelkanth Eye Hospitals group.  He is a pioneer in Eye related disease and has rolled out quite a few innovations from the surgical tables of his hospital. Be it a glued IOL on a senior patient or an anterior segment transplantation in a four months old child, Dr. Sarvesh Srivastava is simply an artist, when it comes to complicated eye surgeries.

Dr. Sarvesh Srivastava has won many awards for his revolutionary innovations in ophthalmology. His patients remember every single interaction with him and feel that with a single magical word “Beta” (child in Hindi), he is able to put them at absolute ease even at the most difficult times.
	 </p>

   <h1 className="fontFamily-sans-sarif fw-bold d-flex justify-content-center text-danger animate__animated animate__fadeInUp" style={{marginTop:'100px',fontSize:'60px',marginBottom:"50px"}}>Sqn. Ldr. Dr. Atul Mishra
</h1>
     <img src={img3} alt="hospital image" className="img-thumbnail  container float-start bg-light " data-aos="zoom-in-up" data-aos-duration="3000" style={{width:'300px',height:'300px' ,marginTop:'0px',marginLeft:'20px'}}/>
     <p className="fontFamily-sans-sarif fw-bold d-flex justify-content-center  d-flex-justify-content-center p-5" data-aos="fade-up" data-aos-duration="3000" style={{marginTop:'0px', fontSize:"18px"}}>
     Sqn. Ldr. Dr. Atul Mishra is the  the Chairman of Neelkanth Eye Hospitals group.  He is a pioneer in Eye related disease and has rolled out quite a few innovations from the surgical tables of his hospital. Be it a glued IOL on a senior patient or an anterior segment transplantation in a four months old child,Sqn. Ldr. Dr. Atul Mishra is simply an artist, when it comes to complicated eye surgeries.
     Sqn. Ldr. Dr. Atul Mishra has won many awards for his revolutionary innovations in ophthalmology. His patients remember every single interaction with him and feel that with a single magical word “Beta” (child in Hindi), he is able to put them at absolute ease even at the most difficult times.
	 </p>


   <h1 className="fontFamily-sans-sarif fw-bold d-flex justify-content-center text-danger animate__animated animate__fadeInUp" style={{marginTop:'100px',fontSize:'60px',marginBottom:"50px"}}>Dr. Ankit Awasthi</h1>
     <img src={img5} alt="hospital image" className="img-thumbnail  container float-start bg-light " data-aos="zoom-in-up" data-aos-duration="3000" style={{width:'300px',height:'300px' ,marginTop:'0px',marginLeft:'20px'}}/>
     <p className="fontFamily-sans-sarif fw-bold d-flex justify-content-center  d-flex-justify-content-center p-5" data-aos="fade-up" data-aos-duration="3000" style={{marginTop:'0px', fontSize:"18px"}}>
     Dr. Ankit Awasthi is the  the Chairman of Neelkanth Eye Hospitals group.  He is a pioneer in Eye related disease and has rolled out quite a few innovations from the surgical tables of his hospital. Be it a glued IOL on a senior patient or an anterior segment transplantation in a four months old child, Dr. Ankit Awasthi is simply an artist, when it comes to complicated eye surgeries.

     Dr. Ankit Awasthi has won many awards for his revolutionary innovations in ophthalmology. His patients remember every single interaction with him and feel that with a single magical word “Beta” (child in Hindi), he is able to put them at absolute ease even at the most difficult times.
	 </p>

   <h1 className="fontFamily-sans-sarif fw-bold d-flex justify-content-center text-danger animate__animated animate__fadeInUp" style={{marginTop:'100px',fontSize:'60px',marginBottom:"50px"}}>Dr. Ajay Mishra</h1>
     <img src={img6} alt="hospital image" className="img-thumbnail  container float-start bg-light " data-aos="zoom-in-up" data-aos-duration="3000" style={{width:'300px',height:'300px' ,marginTop:'0px',marginLeft:'20px'}}/>
     <p className="fontFamily-sans-sarif fw-bold d-flex justify-content-center  d-flex-justify-content-center p-5" data-aos="fade-up" data-aos-duration="3000" style={{marginTop:'0px', fontSize:"18px"}}>
     Dr. Ajay Mishra is the  the Chairman of Neelkanth Eye Hospitals group.  He is a pioneer in Eye related disease and has rolled out quite a few innovations from the surgical tables of his hospital. Be it a glued IOL on a senior patient or an anterior segment transplantation in a four months old child, Dr. Ajay Mishra is simply an artist, when it comes to complicated eye surgeries.

     Dr. Ajay Mishra has won many awards for his revolutionary innovations in ophthalmology. His patients remember every single interaction with him and feel that with a single magical word “Beta” (child in Hindi), he is able to put them at absolute ease even at the most difficult times.
	 </p>

   <h1 className="fontFamily-sans-sarif fw-bold d-flex justify-content-center text-danger animate__animated animate__fadeInUp" style={{marginTop:'100px',fontSize:'60px',marginBottom:"50px"}}>Dr. Sanchit Saxena</h1>
     <img src={img7} alt="hospital image" className="img-thumbnail  container float-start bg-light " data-aos="zoom-in-up" data-aos-duration="3000" style={{width:'300px',height:'300px' ,marginTop:'0px',marginLeft:'20px'}}/>
     <p className="fontFamily-sans-sarif fw-bold d-flex justify-content-center  d-flex-justify-content-center p-5" data-aos="fade-up" data-aos-duration="3000" style={{marginTop:'0px', fontSize:"18px"}}>
     Dr. Sanchit Saxena is the  the Chairman of Neelkanth Eye Hospitals group.  He is a pioneer in Eye related disease and has rolled out quite a few innovations from the surgical tables of his hospital. Be it a glued IOL on a senior patient or an anterior segment transplantation in a four months old child, Dr. Sanchit Saxena is simply an artist, when it comes to complicated eye surgeries.

     Dr. Sanchit Saxena has won many awards for his revolutionary innovations in ophthalmology. His patients remember every single interaction with him and feel that with a single magical word “Beta” (child in Hindi), he is able to put them at absolute ease even at the most difficult times.
	 </p>

   <h1 className="fontFamily-sans-sarif fw-bold d-flex justify-content-center text-danger animate__animated animate__fadeInUp" style={{marginTop:'100px',fontSize:'60px',marginBottom:"50px"}}>Dr. Rajesh Mishra</h1>
     <img src={img8} alt="hospital image" className="img-thumbnail  container float-start bg-light " data-aos="zoom-in-up" data-aos-duration="3000" style={{width:'300px',height:'300px' ,marginTop:'0px',marginLeft:'20px'}}/>
     <p className="fontFamily-sans-sarif fw-bold d-flex justify-content-center  d-flex-justify-content-center p-5" data-aos="fade-up" data-aos-duration="3000" style={{marginTop:'0px', fontSize:"18px"}}>
     Dr. Rajesh Mishra is the  the Chairman of Neelkanth Eye Hospitals group.  He is a pioneer in Eye related disease and has rolled out quite a few innovations from the surgical tables of his hospital. Be it a glued IOL on a senior patient or an anterior segment transplantation in a four months old child,Dr. Rajesh Mishra is simply an artist, when it comes to complicated eye surgeries.

     Dr. Rajesh Mishra has won many awards for his revolutionary innovations in ophthalmology. His patients remember every single interaction with him and feel that with a single magical word “Beta” (child in Hindi), he is able to put them at absolute ease even at the most difficult times.
	 </p>

     </div>
     <section>
     <div class="card-group" style={{marginTop:"200px"}}>
  <div class="card  m-3">
    <img src={img3} class="card-img-top" data-aos="zoom-in-up" data-aos-duration="3000" alt="" className="bg-dark"/>
    <h5 className="card-title text-dark">Sqn. Ldr. Dr. Atul Mishra</h5>
  </div>
  <div class="card  m-3">
    <img src={img4} class="card-img-top" alt="" data-aos="zoom-in-up" data-aos-duration="3000" className="bg-dark"/>
    <h5 className="card-title text-dark">Dr. Sarvesh Srivastava</h5>
  </div>
  <div class="card  m-3">
    <img src={img5} class="card-img-top" alt="" data-aos="zoom-in-up" data-aos-duration="3000" className="bg-dark"/>
    <h5 className="card-title text-dark">Dr. Ankit Awasthi</h5>
  </div>
</div>
<div class="card-group">
  <div class="card  m-3">
    <img src={img6} class="card-img-top" alt="" data-aos="zoom-in-up" data-aos-duration="3000" className="bg-dark"/>
    <h5 className="card-title text-dark">Dr. Ajay Mishra</h5>
  </div>
  <div class="card  m-3">
    <img src={img7} class="card-img-top" alt="" data-aos="zoom-in-up" data-aos-duration="3000"  className="bg-dark"/>
    <h5 className="card-title text-dark">Dr. Sanchit Saxena</h5>
  </div>
  <div class="card  m-3">
    <img src={img8} class="card-img-top" alt="" data-aos="zoom-in-up" data-aos-duration="3000" className="bg-dark"/>
    <h5 className="card-title text-dark">Dr. Rajesh Mishra</h5>
  </div>
</div>


     </section>
     <Footer/>
    </>
     
  )
}
