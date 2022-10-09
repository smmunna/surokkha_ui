/* eslint-disable no-use-before-define */
import React from "react";
import "../../App.css";
import "../css/registration.css";
import {Link } from "react-router-dom";
import LeftNav from "./registration/LeftNav";


function Registration() {


  return (
    <div className="body">
          <div className="reg-heading ">
          <h2>Vaccine Registration</h2>
        </div>
      <div className="row">
        <div className="col-lg-3">
            <div className="left-nav">
            <LeftNav/>
            </div>
        </div>
        <div className="col-lg-9">

        </div>
      </div>
          
      </div>
  );
}

export default Registration;
