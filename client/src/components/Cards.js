import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from 'E:/OneHealth-master/client/src/images/image3.jpg';
import feedback from 'E:/OneHealth-master/client/src/images/feedback.png';
import appointment from 'E:/OneHealth-master/client/src/images/apointment.png';
import Login from 'E:/OneHealth-master/client/src/images/Login.png';

import img2 from 'E:/OneHealth-master/client/src/images/1.jpg';
import img3 from 'E:/OneHealth-master/client/src/images/2.jpg';
import img4 from 'E:/OneHealth-master/client/src/images/3.jpg';
import img5 from 'E:/OneHealth-master/client/src/images/4.jpg';
export default function Cards() {
  useEffect(() =>{
    Aos.init({});
    },[]);
  return (
    <div style={{backgroundColor:'#023436'}}>
    <h1 className="animate__animated animate__backInRight text-center  text-light  fw-bolder bg-dark "  style={{fontFamily:'Tmes New Roman', fontSize:"50px"}} >Our Specialists</h1>
    <div className='mt-2  '>
      <div className=" card-group p-2">
  <div className="animate__animated animate__slideInLeft  card   border-light border-3 m-2 p-3" style={{backgroundColor:"#7F95D1"}}>
    <img src={img2} className="card-img-top " alt=""/>
    <div className="card-body">
      <h5 className="card-title  text-dark">Sqn Ldr Doctor Atul Mishra</h5>
      <p className="card-text text-light">
      <div class="g-col-4 ">. B.H.M.S</div>
      <div class="g-col-4 ">. B.O.O.T</div>
      <div class="g-col-4 ">. D.R.O.P.T</div>
      <div class="g-col-4 ">. Ex-Intern - Ram Manohar Lohiya Hospital</div>
      </p>
      <form>
      <Link to='/About'><button className='animate__animated animate__slideInUp btn btn-outline-danger  bg-dark' style={{marginTop:'180px'}}>Read More</button></Link>
      </form>
    </div>
  </div>
  <div className="animate__animated animate__slideInRight card border-light  border-3 m-2 p-3" style={{backgroundColor:"#FFC0BE"}}>
    <img src={img3} className="card-img-top" alt=""/>
    <div className="card-body p-3">
      <h5 className="card-title text-dark">Doctor Sarvesh Srivastava</h5>
      <p className="card-text text-light">
      <div class="grid">
      <div class="g-col-4 ">. M.B.B.S</div>
      <div class="g-col-4 ">. Ex-director Uttarpradesh Health Services</div>
      <div class="g-col-4 ">. Ex-HOD(Eye Department) -Balrampur Hospital ,Ram Manohar Lohiya Hospital</div>
      <div class="g-col-4 ">. D.O.M.S </div>
      <div class="g-col-4 ">. Feco Surgion</div>
      <div class="g-col-4 ">. Fellowship-Retina Laser(Arvind Eye Hospital, Madurai)</div>
      <div class="g-col-4 ">. Vitro retinal(Hyderabad)</div>
      <div class="g-col-4 ">. Cornia Transplant(Pune)</div>
    </div>
      </p>
      <form>
      <Link to='/About'><button className='animate__animated animate__slideInUp btn btn-outline-danger bg-dark ' style={{marginTop:'10px'}}>Read More</button></Link>
      </form>
    </div>
  </div>
  <div className="card animate__animated animate__slideInLeft animate__delay-5s border-light  border-3 m-2 p-3" style={{backgroundColor:"#FF82A9"}}>
    <img src={img4} className="card-img-top" alt=""/>
    <div className="card-body ">
      <h5 className="card-title text-dark">Doctor Ankit Awasthi</h5>
      <p className="card-text text-light">
      <div class="g-col-4 ">. M.B.B.S</div>
      <div class="g-col-4 ">. Medical Director - D.J.N Gomtinagar Lucknow</div>
      <div class="g-col-4 ">. D.N.B (Othal)</div>
      <div class="g-col-4 ">. Vitreoretinal Consultant</div>
      <div class="g-col-4 ">. Ex - HOD -Indira Gandhi Eye Hospital and Arvind Eye Hospital, Tamil Nadu</div>
      </p>
      <form>
      <Link to='/About'><button className='animate__animated animate__slideInUp btn btn-outline-danger bg-dark ' style={{marginTop:'110px'}}>Read More</button></Link>
      </form>
    </div>
  </div>
  <div className="animate__animated animate__slideInRight animate__delay-3s card border-light  border-3 m-2 p-3"
  style={{backgroundColor:"#000000"}}>
    <img src={img5} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title text-light">Doctor Ajay Mishra</h5>
      <p className="card-text text-light">
      <div class="g-col-4 ">. M.B.B.S, M.D</div>
      <div class="g-col-4 ">. Professor(Medicine) - Era Medical College, Lucknow</div>
      </p>
      <form>
      <Link to='/About'><button className='animate__animated animate__slideInUp btn btn-outline-danger bg-dark 'style={{marginTop:'230px'}}>Read More</button></Link>
      </form>
    </div>
  </div>
</div>
<section className=' m-4 shadow-lg p-3 mb-5  rounded'>
<h1 className='text-center fw-bolder text-danger mt-3 ' style={{fontSize:"50px"}} data-aos="flip-left"  data-aos-duration="2000">Mission</h1>
 {/* <img src={img1} alt="" placeholder='doc_image' className="image rounded-circle  float-start border-light 2 w-20 imgshow slide-in-up" style={{width:320 ,height:250}}/> */}
<div className='container border border-light  mt-4 rounded-pill ' data-aos="zoom-in-left"  data-aos-duration="3000" style={{backgroundColor:'#F7C59F',padding:'40px',margin:"40px",fontFamily:'Times New Roman', fontSize:"38px"}}>
  <p className='p-4'>The mission of Neelkanth Eye Hospital is to provide quality healthcare with vast efficiency. To promote an environment in the hospital that facilitates protection of patient’s rights and commitment towards patient care To include preventive healthcare practices in addition to treatment applications without discrimination of religion, Language, Race and Gender. </p>
</div>
<h1 className='text-center fw-bolder text-danger mt-3 ' data-aos="flip-left"  style={{fontSize:"50px"}} data-aos-duration="2000">Vision</h1>
 {/* <img src={img1} alt="" placeholder='doc_image' className="image rounded-circle  float-start border-light 2 w-20 imgshow slide-in-up" style={{width:320 ,height:250}}/> */}
<div className='container border border-light text-light mt-4 rounded-pill' data-aos="fade-right"  data-aos-duration="3000" style={{backgroundColor:'#2A324B',fontFamily:'Tmes New Roman',padding:'40px',margin:"40px", fontSize:"38px" }}>
  <p className='p-4' >We aim to be pioneering center of excellence in eye care services through continuous up gradation of technology, bringing countries best eye care professionals under one roof and spreading knowledge through education and training.
</p>
</div>
<h1 className='text-center fw-bolder text-danger mt-3 ' data-aos="flip-left"  style={{fontSize:"50px"}} data-aos-duration="2000">Quality Policy</h1>
 {/* <img src={img1} alt="" placeholder='doc_image' className="image rounded-circle  float-start border-light 2 w-20 imgshow slide-in-up" style={{width:320 ,height:250}}/> */}
<div className='container border border-light text-dark mt-4 mb-3 rounded-pill ' data-aos="fade-left"  data-aos-duration="3000" style={{backgroundColor:'#767B91',padding:'40px',margin:"40px",fontFamily:'Tmes New Roman',fontSize:"38px"}}>
  <p>Neelkanth Eye Hospital is committed to deliver high quality patient care through applications of latest technology coupled with medical excellence, ensuring safety of treatment during patient's stay, promoting and environment of continuous quality improvement and complying with statutory regulations.</p>
</div>
    </section>
    </div>
    <div className='shadow-lg p-3 mb-5  rounded  m-3'>
    
    
    
    </div>
	<div className= 'row'>
		<div className="col">
			<span className=' rounded-pill mx-5' >
      <Link to='/login'><img src={Login} alt="" data-aos="zoom-in-up" data-aos-duration="2000" style={{marginLeft:'150px'}}/></Link>
    </span>
		</div>
		<div className="col">
		<span className=' rounded-pill'>
      <Link to="/Appointment"><img src={appointment} alt="" data-aos="zoom-in-up" data-aos-duration="2000" style={{marginLeft:'200px'}}/></Link>
    </span>
		</div>
		<div className="col">
		<span className=' rounded-pill mx-5 '>
      <Link to="/Review "><img src={feedback} alt="" data-aos="zoom-in-up" data-aos-duration="2000"  style={{marginLeft:'200px'}}/></Link>
    </span>
		</div>
	</div>
    </div>
  )
}
