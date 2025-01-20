import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const response = await fetch("http://localhost:5002/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      emailRef.current.value = "";
      passwordRef.current.value = "";

      const userData = await response.json();
      console.log(userData);

      if (userData.success) {
        sessionStorage.setItem("token", userData.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      console.log("Error while login ", error);
    }
  };
  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "180px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Login</h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <Link to="/register" className="m-0">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 card" style={{ width: 700 }}>
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Sign In Page</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5 mx-auto">
            <div className="contact-form">
              <div id="success"></div>
              <form
                name="sentMessage"
                id="contactForm"
                noValidate="noValidate"
                onSubmit={handleLogin}
              >
                <div className="control-group">
                  <input
                    type="email"
                    ref={emailRef}
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
                    type="password"
                    ref={passwordRef}
                    className="form-control"
                    id="pass"
                    placeholder="Your Password"
                    required="required"
                    data-validation-required-message="Please enter password"
                  />
                  <p className="help-block text-danger"></p>
                </div>

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Sign In
                  </button>
                </div>
                <p className="text-center mt-4 fw-bold">
                  <Link to="/forgot-password" className="text-decoration-none">
                    Forgot Password?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
