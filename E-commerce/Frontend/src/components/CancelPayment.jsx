import React from "react";
import { Link } from "react-router-dom";

const CancelPayment = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="alert alert-danger alert-dismissible fade show p-5"
        role="alert"
      >
        <h2 className="alert-heading">Payment Cancelled!</h2>
        <p>Your payment was not completed.</p>
        <p>
          <Link to={"/"} className="alert-link">
            Back to Home
          </Link>{" "}
        </p>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default CancelPayment;
