import React from 'react'
import RegImage from '../images/registration (2).png'
import RegProcess from '../images/registration.png'
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
                        <h3>I am from Check Status</h3>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Home