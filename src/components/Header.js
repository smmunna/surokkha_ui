import React from 'react'
import NavbarLogo from './images/surokkhaHeader.png';

function Header() {
  return (
    <div>
        {/* Navbar */}

        <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src={NavbarLogo}  className='navbar-brand-image' alt="SurokkhaImage" srcset="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Registration</a>
            <a class="nav-link" href="#">Card</a>
            <a class="nav-link ">Certificate</a>
            <a class="nav-link ">Verify Certificate</a>
          </div>
        </div>
      </div>
    </nav>

        {/* Navbar Ended */}
    </div>
  )
}

export default Header