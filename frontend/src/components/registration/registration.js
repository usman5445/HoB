import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import loginBanner from "../../assests/registrationBanner.svg";
import "./registration.css";
import googleicon from "../../assests/icons8-google-18.svg";
import facebookicon from "../../assests/icons8-facebook-18.svg";

function Registration() {
  return (
    <div className="container-fluid ">
      <div className="row banner">
        <img src={loginBanner} alt="...."></img>
      </div>
      <div className="row heading d-flex justify-content-center">
        Register With Us
      </div>
      <div className="row subheading d-flex justify-content-center">
        and become a part of HOB cult
      </div>
      <div className="row login-via  d-flex justify-content-evenly">
        <button class="btn btn-facebook " type="button">
          <img src={facebookicon} alt="..." />
          Facebook
        </button>
        <button class="btn btn-google" type="button">
          <img src={googleicon} alt="..." />
          Google
        </button>
      </div>
      <div className="row d-flex justify-content-center text-or">OR</div>
      <div className="row d-flex justify-content-center ">
        <div className="row  input-group input-group-lg text-start">
          <input type="text" class="form-control" placeholder="First Name" />
        </div>
        <div className="row  input-group input-group-lg">
          <input
            type="text"
            class="form-control text-start"
            placeholder="Last Name"
          />
        </div>
        <div className="row input-group input-group-lg ">
          <input type="email" class="form-control" placeholder=" Email ID " />
        </div>
        <div className="row  input-group input-group-lg">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
      </div>
      <div className="row d-flex justify-content-center text-login">
        Receive Updates in Email
      </div>
      <div className="row d-flex justify-content-center ">
        <button class="btn btn-register" type="button">
          REGISTER
        </button>
      </div>
      <div className="row d-flex justify-content-center text-login">
        Have an Account? LOGIN
      </div>
    </div>
  );
}

export default Registration;
