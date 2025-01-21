import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "400px" }}
    >
      <div className="container-fluid pt-4 card" style={{ width: 700 }}>
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            {" "}
            <span className="px-2">Change Password</span>
          </h2>
        </div>
        <div className="row px-xl-5 ">
          <div className="col-lg-7 mb-5 mx-auto">
            <div className="contact-form">
              {/* Show Error or Success message */}
              {/* {error && (
        <div className="alert alert-danger text-center">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success text-center">
          {success}
        </div>
      )} */}

              <form name="sentMessage" id="contactForm" noValidate="noValidate">
                <div className="control-group position-relative mb-3">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    className="form-control"
                    id="oldPassword"
                    placeholder="Enter your old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                  <i
                    className={`btn btn-link position-absolute bi ${
                      showOldPassword ? "bi-eye-slash" : "bi-eye"
                    }`}
                    style={{
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: 0,
                    }}
                    onClick={() => setShowOldPassword((prev) => !prev)}
                  ></i>
                </div>

                <div className="control-group position-relative mb-3">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="form-control"
                    id="newPassword"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <i
                    className={`btn btn-link position-absolute bi ${
                      showNewPassword ? "bi-eye-slash" : "bi-eye"
                    }`}
                    style={{
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: 0,
                    }}
                    onClick={() => setShowNewPassword((prev) => !prev)}
                  ></i>
                </div>

                <div className="control-group position-relative mb-3">
                  <input
                    type={showConfirmNewPassword ? "text" : "password"}
                    className="form-control"
                    id="confirmNewPassword"
                    placeholder="Confirm your new password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                  />
                  <i
                    className={`btn btn-link position-absolute bi ${
                      showConfirmNewPassword ? "bi-eye-slash" : "bi-eye"
                    }`}
                    style={{
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      padding: 0,
                    }}
                    onClick={() => setShowConfirmNewPassword((prev) => !prev)}
                  ></i>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary py-2 px-4"
                    id="sendMessageButton"
                  >
                    Change Password
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

export default UpdatePassword;
