/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../App.css'
import FooterIcon from './images/surokkhaHeader.png'
import Ict from './images/ict.png'
import Affiliate from './images/footerBanner.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="row">
          <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                      <img src={FooterIcon} className="footerIcon" alt="Surokkha Apps" />
                  </div>
                  <div className="col-lg-6">
                      <div className="footer-list">
                        <a href="#"><h6>FAQ</h6></a>
                        <a href="#"><h6>Manual</h6></a>
                        <a href="#"><h6>Privacy Policy</h6></a>
                        <a href="#"><h6>Terms of Service</h6></a>
                        <a href="#"><h6>Other Affiliate</h6></a>
                      </div>
                  </div>
                </div>
          </div>
          <div className="col-lg-4">
              <h6 className='developby'>Developed by- Sm Munna <span><i>For Practicing</i></span></h6>
              <img src={Ict} className='developby' alt="ICT" />
          </div>
          <div className="col-lg-4">
              <h6 className='developby affiliate'>Affiliates</h6>
              <img src={Affiliate} className='developby' alt="Affiliate" />
          </div>
        </div>
    </div>
  )
}

export default Footer