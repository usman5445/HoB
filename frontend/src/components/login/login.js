import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import loginBanner from "../../assests/loginBanner.svg";
import "./login.css";
import googleicon from "../../assests/icons8-google-18.svg";
import facebookicon from "../../assests/icons8-facebook-18.svg";

function Login() {
  return (
    <div className="container-fluid ">
      <div className="row banner">
        <img src={loginBanner} alt="...."></img>
      </div>
      <div className="row heading d-flex justify-content-center">
        Login to Your Account
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
        <div className="row input-group input-group-lg ">
          <input type="email" class="form-control" placeholder="Your Email " />
        </div>
        <div className="row  input-group input-group-lg">
          <input
            type="password"
            class="form-control"
            placeholder="Your Password"
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center text-forget-password">
        Forgot Password | Help?
      </div>
      <div className="row d-flex justify-content-center">
        <button class="btn btn-login " type="button">
          LOG IN
        </button>
      </div>

      <div className="row d-flex justify-content-center text-register">
        Don’t have an account yet?
      </div>

      <div className="row d-flex justify-content-center ">
        <button class="btn btn-register" type="button">
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Login;
