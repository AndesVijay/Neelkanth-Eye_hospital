import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import  { useState } from "react";
import Navbar from "./Navbar";
import {useForm} from "react-hook-form";
import user from "E:/OneHealth-master/client/src/images/user.png";
import email from "E:/OneHealth-master/client/src/images/email.png";
import feedback from "E:/OneHealth-master/client/src/images/checklist.png";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'


export default function Review() {
  useEffect(() =>{
    Aos.init({});
    },[]);

    const {register,handleSubmit,formState:{errors},reset,trigger}=useForm();
    const onSubmit=(data,e)=>
    {
      console.log(data)
      e.preventDefault();
      emailjs.sendForm(
      "service_ohxp26b",
      "template_dst8wfa",
      e.target,
      "lp0hSTOPf5-fhMJMt"
      )
      .then(res=>
        {
          console.log(res);
        }
      ).catch(err=>console.log(err));
      toast("Thank You for your feedback ",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      reset();
     
      
    }
   console.log(errors);

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
    <div style={{backgroundColor:"#002E2C"}}>
    <Navbar bg={bg} toggle= {toggle} />

    <div className="alert alert-warning alert-dismissible fade show mt-5" role="alert">
      <strong >Hello!</strong > Welcome To The Neelkanth Eye hospital 
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
          <fieldset className="mt-5 mx-5  " style={{marginTop:"-45px" , width:"500px"}}>
            
          <h1 className="fs-1 text-light " style={{marginTop:"80px"}} data-aos="fade-up" data-aos-duration="2000">“We all need people who will give us feedback.
           That’s how we improve.”
          </h1>
          
          <img src={feedback} alt="FEED " style={{width:"160px",height:"160",marginLeft:"50px"}} data-aos="zoom-in-up" data-aos-duration="2000"/>

          <form onSubmit={handleSubmit(onSubmit)}    className=" bg-secondary shadow-lg  mb-5 rounded " style={{marginTop:"-30px" ,marginLeft:"700px", width:"500px",marginBottom:"50px"}} >

          <h1 className="d-flex justify-content-center text-light " style={{marginTop:"-350px", backgroundColor:"#3E5641",fontSize:"50px"}}>Feedback Form</h1>

          {/* ******************************Name Input************************************** */}
          <div className="mb-3 mt-2">
		  <div style ={{marginTop:"50px"}}>
		  <span><img src={user} ALT="USER'S_PIC" style={{width:"30px",height:"30px",marginLeft:"179px",marginBottom:"-25px"}}/></span>
          <label htmlFor="exampleFormControlInput1" className="form-label text-light d-flex justify-content-center fw-bold ">Name</label>
		  </div>
          
          <input type="text" name="name" className="form-control d-flex justify-content-center rounded-pill mx-4" placeholder="Enter Name.." aria-label="First Name"  style={{width:"450px",marginTop:"25px"}} {...register("name",{required:"Please Entyer Your Name !" ,pattern:{value:/^[a-zA-Z][a-zA-Z\\s_ ]+$/,message:"Please Input Alphabets Only !"},maxLength:{value:20,message:"Maximum Required Lenth is 20"}})}
                  onKeyUp={()=>
                  {
                    trigger("name");
                  }}/>
          {errors.name && (<small className=" mx-5 fw-bolder" style={{color:'#D72638'}}>{errors.name.message}</small>)}
          </div>

          {/* ***************************Email Input *********************************** */}
          <div style={{marginTop:"-25px"}}>
          <span><img src={email} alt="mail icon" style={{width:"30px",height:"30px",marginLeft:"160px",marginBottom:"-30px",marginTop:"50px"}}/></span>
          <label htmlFor="exampleFormControlInput1" className="form-label text-light d-flex justify-content-center fw-bold ">Email address</label>
          <input type="email"  name="email" className="form-control d-flex justify-content-center rounded-pill mx-4" id="exampleFormControlInput1" placeholder="Name@gmail.com" style={{width:"450px"}} 
           {...register("email",{required:"Please Enter Your Email !" ,pattern:{value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
           ,message:"Please Enter Valid Email !"}})}
           onKeyUp={()=>
           {
             trigger("email");
           }} />
             {errors.email && (<small className=" mx-5 fw-bolder" style={{color:'#D72638'}}>{errors.email.message}</small>)}
          </div>
          

          {/* ************************Subject Input ************************  */}
          {/* <div className='mt-4'>
          <label htmlFor="exampleFormControlInput1" className="form-label text-light d-flex justify-content-center fw-bold ">Subject</label>
          <input type="text"  name="subject" className="form-control d-flex justify-content-center m-1 rounded-pill mx-4" id="exampleFormControlInput1" placeholder="Enter Subject.." style={{width:"450px"}} 
          {...register("subject",{required:"Please Enter Your Subject !",maxLength:{value:50,message:"Subject must be less than 50 character!"} ,pattern:{value:/[a-zA-Z]/
          ,message:"Only Alphabets Are Allowed !"}})}
          onKeyUp={()=>
          {
            trigger("subject");
          }}/>
          {errors.subject && (<small className=" mx-5 fw-bolder" style={{color:'#D72638'}}>{errors.subject.message}</small>)}
          </div> */}
          
          {/* ********************************** Textarea For message Input *********************************  */}
          <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlTextarea1" className="d-flex justify-content-center form-label text-light fw-bold ">How Can We Improve Our Services</label>
          <textarea  name="message" className="form-control mx-4 rounded-pill" id="exampleFormControlTextarea1 " rows="3" placeholder="Enter Message.." style={{width:"450px"}} 
          {...register("message",{required:"Please Enter Message !",maxLength:{value:150,message:"Subject must be less than 50 character!"} ,pattern:{value:/[a-zA-Z]{1,50}/
          ,message:"Only Alphabets Are Allowed!"}})}
          onKeyUp={()=>
          {
            trigger("message");
          }}></textarea>
           {errors.message && (<small className=" mx-5 fw-bolder" style={{color:'#D72638'}}>{errors.message.message}</small>)}

          </div>
          <button type="submit" className="btn btn-success rounded-pill p-2 w-5" style={{width:"150px",marginLeft:"160px",marginBottom:"20px"}}>Submit</button>
          <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
          </form>
          
          </fieldset>
<Footer/>
    </div>
  
    
    </>
  )
}
