import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { Context } from "../context/Context.jsx";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { productLists } = useContext(Context);

  let cartProduct = [];
  let totalPrice = 0;

  if (cart.length !== 0) {
    cartProduct = productLists.filter((product) => {
      if (cart.indexOf(product.id) === -1) return false;
      else {
        totalPrice += product.price;
        return true;
      }
    });
  }
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
      {cart.length === 0 ? (
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
                  {cartProduct.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td className="align-middle">
                          <img
                            src={product.thumbnail}
                            alt=""
                            style={{ width: "50px" }}
                          />{" "}
                          {product.title}
                        </td>
                        <td className="align-middle">{product.price}</td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: "100px" }}
                          >
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-primary btn-minus">
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control form-control-sm bg-secondary text-center"
                              value="1"
                            />
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle"></td>
                        <td className="align-middle">
                          <button className="btn btn-sm btn-primary">
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
                    <h6 className="font-weight-medium">{totalPrice}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">$160</h5>
                  </div>
                  <button className="btn btn-block btn-primary my-3 py-3">
                    Proceed To Checkout
                  </button>
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
