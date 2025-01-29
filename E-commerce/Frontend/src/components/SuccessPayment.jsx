import React from "react";
import { Link } from "react-router-dom";

const SuccessPayment = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="alert alert-success alert-dismissible fade show p-5"
        role="alert"
      >
        <h2 className="alert-heading">Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        <p>
          <Link to={"/invoice"} className="alert-link">
            Download your receipt
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SuccessPayment;
