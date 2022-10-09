import React from 'react'
import Ads from  '../../images/advertise.jpg'
import {Link} from 'react-router-dom'
import '../../css/leftnav.css'

function LeftNav() {
  return (
    <div className='body'>
        <div className="row">
            <div className="col-lg-12">
                 <div className="form">
                    {/* Form-> */}
                    <button className='left-nav-reg'> <Link to="#" className='link'>Registration</Link> </button> <br />
                    <button className='left-nav-reg'> <Link to="#" className='link'>Birth Reg. Certificate</Link> </button> <br />
                    <button className='left-nav-reg'> <Link to="#" className='link'>Passport</Link> </button> <br />
 

                 </div>
                 <div className="ads">
                    {/* Ads image */}
                    <img src={Ads} alt="" className='ads-image' srcset="" />
                 </div>
            </div>
        </div>
    </div>
  )
}

export default LeftNav