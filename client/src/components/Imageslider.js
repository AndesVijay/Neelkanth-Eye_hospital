import 'animate.css';
import React from 'react';
import {Link} from "react-router-dom";
import img1 from 'E:/OneHealth-master/client/src/images/image1.jpg';
import img3 from 'E:/OneHealth-master/client/src/images/image3.jpg';
import img4 from 'E:/OneHealth-master/client/src/images/image4.jpg';

export default function Imageslider() {
  
  return (
<>
{/* <div class="alert alert-warning alert-dismissible fade show mt-5" role="alert">
  <strong>Hello!</strong>Welcome To the eye Hospital
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}
<div id="carouselExampleCaptions  " className="bg-dark carousel slide border-warning " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img  src={img1} class="animate__animated animate__flipInY border border-5 border-dark img-fluid w-100 h-0 " alt="one" style={{height:500}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className='animate__animated animate__slideInUp text-light' style={{fontSize:'38px'}}>Welcome To The Neelkanth Eye Hospital</h1>
        <Link  to='/About'><button className='animate__animated animate__slideInUp btn btn-outline-danger bg-dark '>Read More</button></Link>
        <a href='#'><button className='animate__animated animate__slideInUp btn btn-outline-success bg-dark mx-2 '>Get Started Now</button></a>
      </div>
    </div>
    <div class="carousel-item">
    <img  src={img3} class="animate__animated animate__flipInY border border-5 border-dark img-fluid w-100 h-0" alt="two" style={{height:500}}/>
    <div class="carousel-caption d-none d-md-block">
        <h1 className='animate__animated animate__slideInUp text-light'>Welcome To The Neelkanth Eye Hospital</h1>
        <a href='#'><button className='animate__animated animate__slideInUp btn btn-outline-danger bg-dark '>Read More</button></a>
        <a href='#'><button className='animate__animated animate__slideInUp btn btn-outline-success bg-dark mx-2 '>Get Started Now</button></a>
      </div>
    </div>
    <div class="carousel-item">
    <img  src={img4} class="animate__animated animate__flipInY border border-5 border-dark img-fluid w-100 h-0" alt="three" style={{height:500}}/>
    <div class="carousel-caption d-none d-md-block">
        <h1 className='animate__animated animate__slideInUp text-light'>Welcome To The Neelkanth Eye Hospital</h1>
        <Link to='/About'><button className='animate__animated animate__slideInUp btn btn-outline-danger bg-dark '>Read More</button></Link>
        <a href='#'><button className='animate__animated animate__slideInUp btn btn-outline-success bg-dark mx-2 '>Get Started Now</button></a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</>
  )
}
