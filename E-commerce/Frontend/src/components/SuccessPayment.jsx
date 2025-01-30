import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="modal fade show "
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "500px" }}
        role="document"
      >
        <div className="modal-content shadow-lg border-0">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title fw-bold alert-heading">
              Payment Successful
            </h5>
            {/* <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setShowSuccessModal(false)}
            ></button> */}
          </div>
          <div className="modal-body text-center">
            <i
              className="fa fa-check-circle text-success mb-4"
              style={{ fontSize: "50px" }}
            ></i>
            <p className="mb-4 text-muted">
              Your payment was processed successfully. Thank you for your order!
            </p>
            <Link
              className="btn btn-success px-4 alert-link"
              onClick={() => {
                setShowSuccessModal(false);
                // Optional: Navigate to home or clear cart
                // window.location.href = "/";
                navigate("/invoice");
              }}
            >
              Show Invoice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
