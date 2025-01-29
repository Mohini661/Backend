import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { ProductContext } from "../context/ProductContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QmCmlHgi7wVoxxXIGzoT2VxV8bUTFur039KUXIjt8zm6ZTYQFrXTjxAbci9U4S6vUoCqvoRaljGNqinLH4pIlYs00rKIVLGWI"
);

const Cart = () => {
  const {
    getCartProducts,
    cartProducts,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  // const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  const subtotal = cartProducts?.data?.items?.reduce(
    (acc, product) => acc + product.productId.price * product.quantity,
    0
  );
  const shipping = 10; // Static shipping cost
  const total = subtotal + shipping;

  localStorage.setItem("cartData", JSON.stringify({ total, cartProducts }));

  const handleCheckOut = async () => {
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
                                  decreaseQuantity(product?.productId?._id)
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
                                  increaseQuantity(product?.productId?._id)
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
                    onClick={handleCheckOut}
                    disabled={loading}
                  >
                    {loading ? "Redirecting..." : "Proceed to Checkout"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- Cart End --> */}
    </>
  );
};

export default Cart;
