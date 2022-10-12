import React from 'react'
import '../../../css/registration.css'

function RegInstruction() {
  return (
    <div>
        <div className="row">
            <div className="col-lg-12">
                <div className="reg-instruction">
                    <h2>PLEASE SELECT THE IDENTIFICATION OPTION FROM THE MENU</h2>
                    <div className="reg-instruction-text">
                        <p id='text'>1. Birth Reg. Certificate</p>
                        <p>Complete the registration by verifying your national identity card and mobile number in the form. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone.</p>
                    </div>
                    <div className="reg-instruction-text">
                        <p id='text'>2. National ID Card</p>
                        <p>Complete the registration by verifying your birth certificate number and mobile number in the form. To get registered for the vaccination, you must provide your 17 digit Birth Registration Certificate number. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone.</p>
                    </div>
                    <div className="reg-instruction-text">
                        <p id='text'>3. Passport</p>
                        <p>Complete the registration by verifying your passport and mobile number in the form. Remember, registering a vaccine with a passport will not work for everyone right now. According to the decision of the Government of Bangladesh, foreign nationals working in various foreign companies can register with these passport numbers only after the Ministry of Foreign Affairs and the foreign workers registered in BMET are whitelisted on “Surokkha” server. Please be patient for some time to complete this process. The place and date of delivery of the vaccine will be informed in due course through SMS message on the mobile phone.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegInstruction