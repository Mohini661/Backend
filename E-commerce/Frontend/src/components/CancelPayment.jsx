import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CancelPayment = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="modal fade show"
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
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title fw-bold alert-heading">
              Payment Cancelled
            </h5>
          </div>
          <div className="modal-body text-center">
            <i
              className="fa fa-times-circle text-danger mb-4"
              style={{ fontSize: "50px" }}
            ></i>
            <p className="mb-4 text-muted">
              Your payment was cancelled. Please try again or contact support if
              the issue persists.
            </p>
            <Link
              className="btn btn-danger px-4 alert-link"
              onClick={() => {
                setShowCancelModal(false);
                // Optional: Navigate to a different page or clear cart
                navigate("/cart");
              }}
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPayment;
