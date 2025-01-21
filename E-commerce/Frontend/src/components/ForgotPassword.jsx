import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5002/api/v1/users/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("A password reset link has been sent to your email.");
        navigate("/");
      } else {
        console.log(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error mail not sent", error.message);
    }
    console.log(email);
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "400px" }}
    >
      <div className="container-fluid pt-4 card" style={{ width: 700 }}>
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Forgot Password</span>
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5 mx-auto">
            <div className="contact-form">
              <div id="success">
                {/* {error && <div className="alert alert-danger">{error}</div>} */}
                {/* {success && (
                  <div className="alert alert-success">{success}</div>
                )} */}
              </div>

              <form
                name="sentMessage"
                id="contactForm"
                noValidate="noValidate"
                onSubmit={handleSubmit}
              >
                <div className="control-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Reset Link
                  </button>
                </div>
                {/* <div className="text-center mt-3 fw-bold">
                  <Link to="/" className="text-primary text-decoration-none">
                    Back to Home
                  </Link>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
