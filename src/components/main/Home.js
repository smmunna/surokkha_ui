/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import RegImage from '../images/registration (2).png'
import RegProcess from '../images/registration.png'
import Tick from '../images/status.png'
import VaccineCard from '../images/vaccine_card.png'
import Certificate from '../images/certificate.png'
import Faq from '../images/faq.png'
function Home() {
  return (
    <div>
    
        <div className="home-body">
            <div className="row">
                <div className="col-lg-6">
                        {/* Vaccine Registration  */}
                        <div className="home-vaccinereg">
                            <div className="vaccinereg-box">
                                <div className="row">
                                    <div className="col-lg-6">
                                         <img src={RegImage} alt="" srcset="" />
                                    </div>
                                    <div className="col-lg-6 vc-reg">
                                            <h4>VACCINE REGISTRATION</h4>
                                            
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 vc-reg1">
                                            <h6>During Registration You Need</h6>
                                            <img src={RegProcess} className="RegProcess" alt="" srcset="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div className="col-lg-6">
                    {/* Check status */}
                    <div className="home-checkstatus">
                        <div className="home-checkstatus1">
                                <div className="checkstatus-img-text">
                                     {/* Image and Text.. */}
                                     <img src={Tick} alt="" srcset="" />
                                     <a href="#">CHECK STATUS</a>
                                </div>
                        </div>
                        <div className="home-checkstatus1 vaccineCard">
                                <div className="checkstatus-img-text">
                                     {/* Image and Text.. */}
                                     <img src={VaccineCard} alt="" srcset="" />
                                     <a href="#">VACCINE CARD</a>
                                </div>
                        </div>
                        <div className="home-checkstatus1 certificate">
                                <div className="checkstatus-img-text">
                                     {/* Image and Text.. */}
                                     <img src={Certificate} alt="" srcset="" />
                                     <a href="#">CERTIFICATE</a>
                                </div>
                        </div>
                        <div className="home-checkstatus1 faq">
                                <div className="checkstatus-img-text">
                                     {/* Image and Text.. */}
                                     <img src={Faq} alt="" srcset="" />
                                     <a href="#">FAQ</a>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Home