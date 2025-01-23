import React from "react";
import c1 from "../assets/img/carousel-1.jpg";
import c2 from "../assets/img/carousel-2.jpg";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ height: "500px" }}>
          <img
            className="img-fluid"
            // src="img/carousel-1.jpg"
            src={c1}
            alt="Image"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "700px" }}>
              <h4 className="text-light text-uppercase font-weight-medium mb-3">
                10% Off Your First Order
              </h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                Fashionable Dress
              </h3>
              <Link to="" className="btn btn-light py-2 px-3">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{ height: "500px" }}>
          <img
            className="img-fluid"
            // src="img/carousel-2.jpg"
            src={c2}
            alt="Image"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "700px" }}>
              <h4 className="text-light text-uppercase font-weight-medium mb-3">
                10% Off Your First Order
              </h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                Reasonable Price
              </h3>
              <Link to="" className="btn btn-light py-2 px-3">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="carousel-control-prev"
        to="#header-carousel"
        data-slide="prev"
      >
        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
          <span className="carousel-control-prev-icon mb-n2"></span>
        </div>
      </Link>
      <Link
        className="carousel-control-next"
        to="#header-carousel"
        data-slide="next"
      >
        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
          <span className="carousel-control-next-icon mb-n2"></span>
        </div>
      </Link>
    </div>
  );
};

export default Slider;
