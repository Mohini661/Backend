import React from "react";
import { Link } from "react-router-dom";

const SuccessPassMsg = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      {/* <div className="container mt-5"> */}
      {/* Success Message Component */}
      <div
        className="alert alert-success alert-dismissible fade show p-5"
        role="alert"
      >
        <h4 className="alert-heading">Password Created Successfully!</h4>
        <p>
          Your password has been set up securely. You can now{" "}
          <Link to={"/"} className="alert-link">
            login
          </Link>{" "}
          to your account.
        </p>
        {/* <hr /> */}
        
      </div>
    </div>
    // </div>
  );
};

export default SuccessPassMsg;
