import React from "react";
import offer1 from "../assets/img/offer-1.png";
import offer2 from "../assets/img/offer-2.png";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="container-fluid offer pt-5">
      <div className="row px-xl-5">
        <div className="col-md-6 pb-4">
          <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
            <img src={offer1} alt="" />
            <div className="position-relative" style={{ zIndex: "1" }}>
              <h5 className="text-uppercase text-primary mb-3">
                20% off the all order
              </h5>
              <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
              <Link to="" className="btn btn-outline-primary py-md-2 px-md-3">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 pb-4">
          <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
            <img src={offer2} alt="" />
            <div className="position-relative" style={{ zIndex: "1" }}>
              <h5 className="text-uppercase text-primary mb-3">
                20% off the all order
              </h5>
              <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
              <Link to="" className="btn btn-outline-primary py-md-2 px-md-3">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
