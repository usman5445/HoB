import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import loginBanner from "../../assests/registrationBanner.svg";
import "./registration.css";
import googleicon from "../../assests/icons8-google-18.svg";
import facebookicon from "../../assests/icons8-facebook-18.svg";
import { registerCust } from "../../api/customers";

function Registration() {
  const [fNameRef, lNameRef, emailRef, passRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  function handleRegister() {
    const data = {
      first_name: fNameRef.current.value,
      last_name: lNameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    registerCust(data);
  }

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
          <input
            ref={fNameRef}
            type="text"
            class="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="row  input-group input-group-lg">
          <input
            ref={lNameRef}
            type="text"
            class="form-control text-start"
            placeholder="Last Name"
          />
        </div>
        <div className="row input-group input-group-lg ">
          <input
            ref={emailRef}
            type="email"
            class="form-control"
            placeholder=" Email ID "
          />
        </div>
        <div className="row  input-group input-group-lg">
          <input
            ref={passRef}
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center text-login">
        Receive Updates in Email
      </div>
      <div className="row d-flex justify-content-center ">
        <button onClick={handleRegister} class="btn btn-register" type="button">
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
