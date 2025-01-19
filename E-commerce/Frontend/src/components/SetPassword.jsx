import React, { useContext, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Context } from "../context/Context";

const SetPassword = () => {
  const host = "http://localhost:5002";
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("expiresAt"));
  const expiresAt = searchParams.get("expiresAt"); 
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== cpassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(
        `${host}/api/v1/users/set-password/${id}?expiresAt=${expiresAt}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            newPassword,
            cpassword,
          }),
        }
      );
      const password = await response.json();
      setSuccess("Password generated Successfully");
      console.log(password);
    } catch (error) {
      console.log("Error set Password");
    }
    setError("");
    setNewPassword("");
    setCpassword("");
    navigate("/");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: "500px" }}
    >
      <div className="container-fluid pt-4 card" style={{ width: 700 }}>
        <div className="text-center mb-4 ">
          <h2 className="section-title px-5">
            <span className="px-2">Set Password</span>
          </h2>
        </div>
        <div className="row px-xl-5 ">
          <div className="col-lg-7 mb-5 mx-auto">
            <div className="contact-form">
              <div id="success">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}
              </div>
              <form
                name="sentMessage"
                id="contactForm"
                noValidate="noValidate"
                onSubmit={handleSubmit}
              >
                <div className="control-group position-relative ">
                  <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    type={showPassword ? "text" : "password"}
                    className="form-control "
                    id="pass"
                    placeholder="Your Password"
                    required="required"
                    data-validation-required-message="Please enter your Password"
                  />
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
                <div className="control-group position-relative">
                  <input
                    onChange={(e) => setCpassword(e.target.value)}
                    value={cpassword}
                    type={showcPassword ? "text" : "password"}
                    className="form-control"
                    id="cpass"
                    placeholder="Your Confirm Password"
                    required="required"
                    data-validation-required-message="Please enter your confirm Password"
                  />
                  <i
                    className={`btn btn-link position-absolute bi ${
                      showcPassword ? "bi-eye-slash" : "bi-eye"
                    } `}
                    style={{
                      right: "18px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: 0,
                    }}
                    onClick={() => setShowcPassword((prev) => !prev)}
                  ></i>
                  <p className="help-block text-danger"></p>
                </div>

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Set Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
