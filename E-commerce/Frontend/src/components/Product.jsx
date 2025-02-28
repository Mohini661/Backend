import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

const Product = ({ product }) => {
  const { addToCart, quantity } = useContext(CartContext);

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img
            className="img-fluid w-100"
            src={product?.mainImage}
            alt=""
            style={{
              maxHeight: "300px",
              maxWidth: "300px",
              // minHeight: "250px",
            }}
          />
        </div>
        <div
          className="card-body border-left border-right text-center p-0 pt-4 pb-3"
          style={{ minHeight: "100px" }}
        >
          <h6 className="text-truncate mb-3">{product?.name}</h6>
          <div className="d-flex justify-content-center">
            <h6>${product?.price}</h6>
            {/* <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6> */}
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <Link
            to={`/details/${product._id}`}
            className="btn btn-sm text-dark p-0"
          >
            <i className="fas fa-eye text-primary mr-1"></i>View Detail
          </Link>
          <Link
            to=""
            className="btn btn-sm text-dark p-0"
            onClick={() => addToCart(product._id, quantity)}
          >
            <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
