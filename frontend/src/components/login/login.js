import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import loginBanner from "../../assests/loginBanner.svg";
import "./login.css";
import { Modal } from "react-bootstrap";
import Registration from "../registration/registration";
import googleicon from "../../assests/icons8-google-18.svg";
import facebookicon from "../../assests/icons8-facebook-18.svg";
import set from "../../components/login/login";
import { loginCust } from "../../api/customers";
import { AlertComponent } from "../AlertComponent";
import { newCart } from "../../api/cart";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Registration />
      </Modal.Body>
    </Modal>
  );
}

function Login() {
  const [registershow, setregisterShow] = React.useState(false);
  const [emailRef, passwordRef] = [useRef(), useRef()];
  const [alertData, setAlertData] = useState({
    isOpen: false,
    message: { heading: "", message: "" },
    variant: "success",
  });
  const [loading, setLoading] = useState(false);
  function handleLogin() {
    setLoading(true);
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginCust(data)
      .then((resp) => {
        console.log(resp);
        setAlertData({
          isOpen: true,
          message: { heading: "Login Successfully" },
          variant: "success",
        });
        localStorage.setItem("customer", JSON.stringify(resp.data));
        newCart(resp.data.accessToken).then((resp) => {
          localStorage.setItem(
            "cart",
            JSON.stringify(resp.data.cartCreate.cart)
          );
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setAlertData({
          isOpen: true,
          message: {
            heading: "Please enter correct email and password",
          },
          variant: "danger",
        });
        setLoading(false);
      });
  }
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
          <input
            ref={emailRef}
            type="email"
            class="form-control"
            placeholder="Your Email "
          />
        </div>
        <div className="row  input-group input-group-lg">
          <input
            ref={passwordRef}
            type="password"
            class="form-control"
            placeholder="Your Password"
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center text-forget-password">
        Forgot Password | Help?
      </div>
      <AlertComponent data={alertData} setData={setAlertData} />
      <div className="row d-flex justify-content-center">
        <button onClick={handleLogin} class="btn btn-login " type="button">
          {!loading ? "LOG IN" : "Loging In..."}
        </button>
      </div>

      <div className="row d-flex justify-content-center text-register">
        Don’t have an account yet?
      </div>

      <div className="row d-flex justify-content-center ">
        <button
          class="btn btn-register"
          type="button"
          onClick={() => setregisterShow(true)}
        >
          REGISTER
        </button>
        <MyVerticallyCenteredModal
          show={registershow}
          onHide={() => setregisterShow(false)}
        />
      </div>
    </div>
  );
}

export default Login;
