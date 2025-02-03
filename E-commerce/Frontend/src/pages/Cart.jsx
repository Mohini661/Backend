import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { ProductContext } from "../context/ProductContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QmCmlHgi7wVoxxX6kHPOpVeq4mTOu7fuqm7LdQI0EgdW5QZDKM1bepJ0gVtXINMP4HaDyl2RkMZkGcsFB9czNx200G3lrQC1k"
);

const Cart = () => {
  const { getCartProducts, cartProducts, removeFromCart, modifyQuantity } =
    useContext(CartContext);
  // const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const subtotal = cartProducts?.data?.items?.reduce(
    (acc, product) => acc + product.productId.price * product.quantity,
    0
  );
  const shipping = 10; // Static shipping cost
  const total = subtotal + shipping;
  localStorage.setItem("cartData", JSON.stringify({ total, cartProducts }));

  const handleStripePayment = async () => {
    // Get Stripe instance
    const stripe = await stripePromise;
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5002/api/v1/payment/stripe-checkout-session",
        {
          totalAmount: Math.round(total * 100), // Pass the total amount from your cart (e.g., 89.95)
        }
      );
      if (response.data.url) {
        window.location.href = response.data.url; // Redirect to Stripe Checkout
      } else {
        alert("Failed to create checkout session.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error("Failed to redirect to Stripe Checkout. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalPayment = () => {
    setLoading(true); // Set loading state to true to show the spinner

    if (!window.paypal) {
      toast.error("PayPal SDK not loaded. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
      setLoading(false); // Set loading state to false if SDK is not loaded
      return;
    }

    // Render PayPal button
    window.paypal
      .Buttons({
        createOrder: async () => {
          // Create the PayPal order with the cart total
          const response = await axios.post(
            "http://localhost:5002/api/v1/payment/create-order",
            { total: total }, // Send the total cart amount
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          const data = await response.data;
          return data.id; // Return the order ID
        },
        onApprove: async (data) => {
          // Capture the order after approval
          const response = await axios.post(
            `http://localhost:5002/api/v1/payment/capture-order/${data.orderID}`
          );
          const details = await response.data;

          if (details.status === "COMPLETED") {
            // Redirect to the success page (success-payment)
            // window.location.href = "/success-payment";
            setShowSuccessModal(true);
          }
          // You can handle the details here (e.g., store the transaction)
          console.log(details);
          setLoading(false);
          setShowModal(false);
        },
        onCancel: (data) => {
          window.location.href = "/cancel-payment";
        },
        onError: (err) => {
          window.location.href = "/cancel-payment";
          setLoading(false);
          // setShowModal(false);
        },
      })
      .render("#paypal-button-container"); // Render the PayPal button inside the container
  };

  const handleProceed = () => {
    if (selectedOption === "Stripe") {
      handleStripePayment();
    } else if (selectedOption === "PayPal") {
      handlePayPalPayment(); // Proceed with PayPal payment flow
    }
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shopping Cart
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shopping Cart</p>
          </div>
        </div>
      </div>

      {/* // <!-- Cart Start --> */}
      {cartProducts?.items?.length === 0 ? (
        <h1 className="text-center fw-bold">Your Cart is Empty !</h1>
      ) : (
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-bordered text-center mb-0">
                <thead className="bg-secondary text-dark">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cartProducts?.data?.items?.map((product) => {
                    return (
                      <tr key={product.productId._id}>
                        <td className="align-middle">
                          <img
                            src={product?.productId?.mainImage}
                            alt=""
                            style={{ width: "50px" }}
                          />{" "}
                          {product?.productId?.name}
                        </td>
                        <td className="align-middle">
                          {product?.productId?.price}
                        </td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: "100px" }}
                          >
                            <div className="input-group-btn">
                              <button
                                className="btn btn-sm btn-primary btn-minus"
                                onClick={() =>
                                  // decreaseQuantity(product?.productId?._id)
                                  modifyQuantity(
                                    product.productId?._id,
                                    "decrease"
                                  )
                                }
                                disabled={product.quantity <= 1}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <div
                              type="text"
                              className="form-control form-control-sm bg-secondary text-center"
                              // value="1"
                            >
                              {product.quantity}
                            </div>
                            <div className="input-group-btn">
                              <button
                                className="btn btn-sm btn-primary btn-plus"
                                onClick={() =>
                                  // increaseQuantity(product?.productId)
                                  modifyQuantity(
                                    product.productId._id,
                                    "increase"
                                  )
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          {product?.productId.price * product.quantity}
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() =>
                              removeFromCart(product?.productId?._id)
                            }
                          >
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <form className="mb-5" action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Coupon Code"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Apply Coupon</button>
                  </div>
                </div>
              </form>
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">
                      {Number(subtotal).toFixed(2)}
                      {/* {cartProducts?.data?.totalPrice} */}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">{total.toFixed(2)}</h5>
                  </div>
                  <Link
                    // to="/checkout"
                    className="btn btn-block btn-primary my-3 py-3"
                    onClick={() => setShowModal(true)}
                  >
                    {loading ? "Redirecting..." : "Proceed to Checkout"}
                  </Link>
                  <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
                    {/* Payment Modal */}
                    {showModal && (
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
                            <div className="modal-header bg-primary text-white">
                              <h5 className="modal-title fw-bold">
                                Select Payment Method
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={() => setShowModal(false)}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p className="text-center mb-4 text-muted">
                                Choose your preferred payment option
                              </p>
                              <div className="list-group">
                                <label
                                  className="list-group-item d-flex align-items-center border-0 p-3 rounded shadow-sm mb-3"
                                  style={{
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                  }}
                                >
                                  <input
                                    className="form-check-input me-3"
                                    type="radio"
                                    name="paymentOption"
                                    value="PayPal"
                                    onChange={(e) =>
                                      setSelectedOption(e.target.value)
                                    }
                                  />
                                  <div id="paypal-button-container">
                                    <h6 className="mb-1">PayPal</h6>
                                    <small className="text-muted">
                                      Pay securely with your PayPal account.
                                    </small>
                                  </div>
                                </label>
                                <label
                                  className="list-group-item d-flex align-items-center border-0 p-3 rounded shadow-sm mb-3"
                                  style={{
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                  }}
                                >
                                  <input
                                    className="form-check-input me-3"
                                    type="radio"
                                    name="paymentOption"
                                    value="Stripe"
                                    onChange={(e) =>
                                      setSelectedOption(e.target.value)
                                    }
                                  />
                                  <div>
                                    <h6 className="mb-1">Stripe</h6>
                                    <small className="text-muted">
                                      Use your credit or debit card via Stripe.
                                    </small>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                              <button
                                className="btn btn-outline-secondary px-4"
                                onClick={() => setShowModal(false)}
                                disabled={loading}
                              >
                                Cancel
                              </button>
                              <button
                                className="btn btn-primary px-4"
                                onClick={handleProceed}
                                disabled={!selectedOption || loading}
                              >
                                {loading ? (
                                  <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : (
                                  "Proceed"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSuccessModal && (
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
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowSuccessModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <i
                  className="fa fa-check-circle text-success mb-4"
                  style={{ fontSize: "50px" }}
                ></i>
                <p className="mb-4 text-muted">
                  Your payment was processed successfully. Thank you for your
                  order!
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
      )}
    </>
  );
};

export default Cart;
