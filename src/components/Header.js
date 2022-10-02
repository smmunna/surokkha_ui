import React from "react";
import NavbarLogo from "./images/surokkhaHeader.png";
import tooglerIcon from "./icons/open-list.png"
import Registration from "./main/Registration";
import Certificate from "./main/Certificate";
import Card from "./main/Card";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function Header() {
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
                <img src={tooglerIcon} className="tooglerIcon" height="30" width="30" alt="" srcset="" />
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
                <Link class="nav-link" to="/card">
                  Card
                </Link>
                <Link class="nav-link" to="/certificate">
                  Certificate
                </Link>
                <Link class="nav-link " to="#">
                  Verify Certificate
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
        <Route exact path="/" element={<h2>Home Page</h2>}/>
        <Route  path="/registration" element={<Registration/>}/>
        <Route  path="/card" element={<Card/>}/>
        <Route  path="/certificate" element={<Certificate/>}/>
      </Routes>
        {/* Navbar Ended */}
      </Router>
    </div>
  );
}

export default Header;
