import React from "react";
import p1 from "../assets/img/product-1.jpg";
import p2 from "../assets/img/product-2.jpg";
import p3 from "../assets/img/product-3.jpg";
import p4 from "../assets/img/product-4.jpg";
import p5 from "../assets/img/product-5.jpg";
import p6 from "../assets/img/product-6.jpg";
import p7 from "../assets/img/product-7.jpg";
import p8 from "../assets/img/product-8.jpg";
import { Link } from "react-router-dom";

const NewArrived = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Just Arrived</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p1} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p2} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p3} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p4} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p5} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p6} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p7} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={p8} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
              <div className="d-flex justify-content-center">
                <h6>$123.00</h6>
                <h6 className="text-muted ml-2">
                  <del>$123.00</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </Link>
              <Link to="" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrived;
