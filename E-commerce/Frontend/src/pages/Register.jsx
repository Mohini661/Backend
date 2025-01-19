import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { addUser, unameRef, emailRef, phoneRef } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let username = unameRef.current.value;
    let email = emailRef.current.value;
    let phone = phoneRef.current.value;

    // Phone number validation (example: 10-digit number)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number (10 digits).");
      return;
    }
    try {
      await addUser(username, email, phone);

      unameRef.current.value = " ";
      emailRef.current.value = " ";
      phoneRef.current.value = "";

      navigate("/");
    } catch (error) {
      console.log("Error adding user", error);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "180px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            User Regitration
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <Link to="/login" className="m-0">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-4 card" style={{ width: 800 }}>
        <div className="text-center mb-4 ">
          <h2 className="section-title px-5">
            <span className="px-2">Registration Page</span>
          </h2>
        </div>
        <div className="row px-xl-5 ">
          <div className="col-lg-7 mb-5 mx-auto">
            <div className="contact-form">
              <div id="success"></div>
              {/* {error && <div className="alert alert-danger">{error}</div>} */}
              <form
                name="sentMessage"
                id="contactForm"
                noValidate="noValidate"
                onSubmit={handleSubmit}
              >
                <div className="control-group">
                  <input
                    ref={unameRef}
                    type="text"
                    className="form-control"
                    id="uname"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    ref={phoneRef}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Your Phone"
                    required="required"
                    data-validation-required-message="Please enter your phone"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                {/* <div className="control-group">
                  <input
                    ref={passwordRef}
                    type="password"
                    className="form-control"
                    id="pass"
                    placeholder="Your Password"
                    required="required"
                    data-validation-required-message="Please enter your Password"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    ref={cpasswordRef}
                    type="password"
                    className="form-control"
                    id="cpass"
                    placeholder="Your Confirm Password"
                    required="required"
                    data-validation-required-message="Please enter your confirm Password"
                  />

                  <p className="help-block text-danger"></p>
                </div> */}

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
