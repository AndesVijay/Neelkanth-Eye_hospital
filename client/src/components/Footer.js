import { x } from 'joi'
import React from 'react'
// import mail from 'E:/OneHealth-master/client/src/images/mail.png'
// import phone from 'E:/OneHealth-master/client/src/images/phone.png'
// import twitter from 'E:/OneHealth-master/client/src/images/twitter.png'
import facebook from 'E:/OneHealth-master/client/src/images/facebook1.jpg'
import insta from 'E:/OneHealth-master/client/src/images/insta1.png'
import linkdin from 'E:/OneHealth-master/client/src/images/linkdin.jpg'
import twitter from 'E:/OneHealth-master/client/src/images/twitter1.jpg'

export default function Footer() {
  return (
<>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="mt-2 ml-3">
    <footer
      className="text-white text-center text-lg-start border-light border-5"
      style={{ backgroundColor: "#347C98"}}
    >
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row mt-4">
          {/*Grid column*/}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0 " style={{marginLeft:'-100px'}}>
            <p style={{fontSize:"25px"}}>
            "Everything that is made beautiful and fair and 
            lovely is made for the eye of one who sees "
            </p>
            <div className="mt-4">
              {/* Facebook */}
              <a href="https://twitter.com/A1_3_2307" type="button" className="btn btn-floating   btn-lg mx-1" target="_blank">
              <img src={twitter} alt='twitter' className="rounded-circle"/>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/uppoliceresults_official/" target="_blank" type="button" className="btn btn-floating btn-lg mx-1">
              <img src={insta} alt='mail' className="rounded-circle" />
              </a>
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/andes-vijay-9052271ab/" type="button" className="btn btn-floating btn-lg mx-1" target="_blank">
              <img src={linkdin} alt='phone' className="rounded-circle" />
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/Neelkanth-Eye-Hospital-Gosaiganj-Lucknow-110897690409405" type="button" className="btn btn-floating  btn-lg mx-1" target="_blank">
              <img src={facebook} alt='phone' className="rounded-circle" />
              </a>
              {/* Linkedin */}
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0" style={{marginLeft:'60px'}}>
            <h5 className="text-uppercase mb-4 pb-1">Reach Us</h5>
            <div className="form-outline form-white mb-4">
              
            </div>
            <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
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
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0"  style={{marginLeft:'40px'}}>
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <table className="table text-center text-white">
              <tbody className="font-weight-normal">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright
        <a className="text-white" href="https://mdbootstrap.com/">
        </a>
      </div>
      {/* Copyright */}
    </footer>
  </div>
  {/* End of .container */}
</>
  )
}
