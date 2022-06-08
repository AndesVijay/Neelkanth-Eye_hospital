import 'animate.css';
import React, { useState } from "react";
import Navbar from "./Navbar";
import img1 from 'E:/OneHealth-master/client/src/images/opt.jpg';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import img2 from 'E:/OneHealth-master/client/src/images/img1.jpg';
import img3 from 'E:/OneHealth-master/client/src/images/img2.jpg';
import img4 from 'E:/OneHealth-master/client/src/images/img3.jpg';
import img5 from 'E:/OneHealth-master/client/src/images/img4.jpg';
import img6 from 'E:/OneHealth-master/client/src/images/img5.jpg';
import img7 from 'E:/OneHealth-master/client/src/images/img6.jpg';
import img8 from 'E:/OneHealth-master/client/src/images/img7.jpg';
import img9 from 'E:/OneHealth-master/client/src/images/img8.jpg';
import img10 from 'E:/OneHealth-master/client/src/images/img9.jpg';
import img11 from 'E:/OneHealth-master/client/src/images/img10.jpg';
import img12 from 'E:/OneHealth-master/client/src/images/img11.jpg';
import img13 from 'E:/OneHealth-master/client/src/images/gallery.jpg';
import Footer from "./Footer"
export default function Gallary() {
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
      {/* <div >
      <img src={img1} className="img-fluid mt-5 " alt="main image"/>
      </div> */}
      <>
      {/* style={{backgroundImage:`url(${img1})`}} */}
      <div className=" " style={{backgroundColor:"#2F4F4F"}} > 
      <h1 className="animate__animated animate__bounceInLeft  text-light mt-5 text-center " style={{fontSize:'70px',fontFamily:'Times New Roman'}}>Our Memories</h1>
    <img src={img13} alt="maingaleeryimg" className='container  animate__animated animate__fadeIn animate___delay-3' />
  <div className="container mt-3 ">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img1}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>
      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img2}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img3}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img4}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img5}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img6}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img7}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img8}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img9}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>
      
      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img10}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>
      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img11}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>
      </div>

      <div className="col mt-3">
      <Zoom>
        <picture>
          <source media="(max-width: 500px)" srcSet="/path/to/teAraiPoint.jpg" />
          <img
            alt="that wanaka tree"
            src={img12}
            width="500"
            className='img-thumbnail animate__animated animate__backInDown'
          />
        </picture>
      </Zoom>

      </div>
    </div>
  </div>

  </div>

      </>
<Footer />
    </>
  )
  
}


