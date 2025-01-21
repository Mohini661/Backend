import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { emailRef, passwordRef, login } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await login(email, password);

      emailRef.current.value = "";
      passwordRef.current.value = "";

      navigate("/");
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
                <div className="control-group position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    ref={passwordRef}
                    className="form-control"
                    id="pass"
                    placeholder="Your Password"
                    required="required"
                    data-validation-required-message="Please enter password"
                  />{" "}
                  <i
                    className={`btn btn-link position-absolute bi ${
                      showPassword ? "bi-eye-slash" : "bi-eye"
                    } `}
                    style={{
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: 0,
                    }}
                    onClick={() => setShowPassword((prev) => !prev)}
                  ></i>
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
