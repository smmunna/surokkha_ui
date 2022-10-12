import React,{useEffect,useState} from "react";
import NavbarLogo from "./images/surokkhaHeader.png";
import tooglerIcon from "./icons/open-list.png";
import Registration from "./main/Registration";
// import Certificate from "./main/Certificate";
// import Card from "./main/Card";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Home from "./main/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function Header() {

  const [error, setError] = useState('');

  // Function for the alert message;
    const noAccess = () =>{
          alert("Software is under the development....")
    }


  return (
    <div>
      {/* Navbar */}
      <Router>
        <nav class="navbar fixed-top navbar-expand-lg bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="#">
              <img
                src={NavbarLogo}
                className="navbar-brand-image"
                alt="SurokkhaImage"
                srcset=""
              />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src={tooglerIcon}
                className="tooglerIcon"
                height="30"
                width="30"
                alt=""
                srcset=""
              />
              {/* <span class="navbar-toggler-icon"></span> */}
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link class="nav-link" to="/registration">
                  Registration
                </Link>
                <Link onClick={noAccess} class="nav-link" to="#">
                  Card
                </Link>
                <Link onClick={noAccess} class="nav-link" to="#">
                  Certificate
                </Link>
                <Link onClick={noAccess} class="nav-link " to="#">
                  Verify Certificate
                </Link>
                
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          {/* <Route path="/card" element={<Card />} />
          <Route path="/certificate" element={<Certificate />} /> */}
          
        </Routes>
        {/* Navbar Ended */}
      </Router>
    </div>
  );
}

export default Header;
