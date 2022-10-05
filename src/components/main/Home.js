/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RegImage from "../images/registration (2).png";
import RegProcess from "../images/registration.png";
import Tick from "../images/status.png";
import VaccineCard from "../images/vaccine_card.png";
import Certificate from "../images/certificate.png";
import Faq from "../images/faq.png";
import Hotline from "../images/helpline.png";
import Registration from "../images/online.png";
import Sms from "../images/sms.png";
import Vaccination from "../images/vaccination.png";
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
                    <img
                      src={RegProcess}
                      className="RegProcess"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* Check status */}
            <div className="home-checkstatus">
              <div className="home-checkstatus1 onecheckStatus">
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

      {/* Telephone Number's List */}
      <div className="home-telephone">
        <div className="row">
          <div className="col-lg-2 myline">
            <div className="hotline">
              <a href="tel:">
                <img src={Hotline} alt="Helpline" srcset="" />
              </a>
            </div>
            <h6>Hotline</h6>
          </div>
          <div className="col-lg-2 myline">
            <div className="hotline">
              <a href="tel:333">333</a>
            </div>
            <h6>National Call Center</h6>
          </div>
          <div className="col-lg-2 myline">
            <div className="hotline">
              <a href="tel:16263">16263</a>
            </div>
            <h6>Health Portal</h6>
          </div>
          <div className="col-lg-2 myline">
            <div className="hotline">
              <a href="tel:10655">10655</a>
            </div>
            <h6>IEDCR</h6>
          </div>
          <div className="col-lg-2 myline">
            <div className="hotline">
              <a href="tel:09666777222">09666777222</a>
            </div>
            <h6>Covid-19 Teleheath</h6>
          </div>
          <div className="col-lg-2 ">
            <div className="myhotline">
              <a href="tel:">
                <img src={Hotline} alt="Helpline" srcset="" />
              </a>
            </div>
            <h6>All Call Center</h6>
          </div>
        </div>
      </div>

      {/* Process For Taking the vaccine==> */}
      <div className="container Home-processVaccine">
        <div className="vaccine-process">
          <h2>The process of receiving the Covid-19 corona vaccine</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="vaccine-reg">
                <img src={Registration} alt="" srcset="" />
                <h3>Online Registration</h3>
                <p>
                  First, you have to complete the online registration by
                  verifying your national identity card and correct mobile
                  number through this portal.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="vaccine-reg">
                <img src={Sms} alt="" srcset="" />
                <h3>SMS Notification</h3>
                <p>
                  After registering online, you will receive a text message on
                  your mobile phone mentioning the date of vaccination and the
                  name of the vaccination center.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="vaccine-reg">
                <img src={Vaccination} alt="" srcset="" />
                <h3>Vaccination</h3>
                <p>
                  Subject to receiving a text message on the mobile phone, you
                  have to appear in person at the vaccination center on the
                  specified date with the vaccine card, national identity card
                  and signed consent form to receive the Covid-19 vaccine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
