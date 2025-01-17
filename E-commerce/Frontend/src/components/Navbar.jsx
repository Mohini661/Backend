import React from "react";
import c1 from "../assets/img/carousel-1.jpg";
import c2 from "../assets/img/carousel-2.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="container-fluid mb-4">
        <div className="row border-top px-xl-5">
          {/* <div className="col-lg-3 d-none d-lg-block postion-relative">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="collapse  show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              <a href="" className="nav-item nav-link">
                Shirts
              </a>
              <a href="" className="nav-item nav-link">
                Jeans
              </a>
              <a href="" className="nav-item nav-link">
                Swimwear
              </a>
              <a href="" className="nav-item nav-link">
                Sleepwear
              </a>
              <a href="" className="nav-item nav-link">
                Sportswear
              </a>
              <a href="" className="nav-item nav-link">
                Jumpsuits
              </a>
              <a href="" className="nav-item nav-link">
                Blazers
              </a>
              <a href="" className="nav-item nav-link">
                Jackets
              </a>
              <a href="" className="nav-item nav-link">
                Shoes
              </a>
            </div>
          </nav>
        </div> */}
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link
                    to="/"
                    className={`nav-item nav-link  ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className={`nav-item nav-link ${
                      location.pathname === "/shop" ? "active" : ""
                    }`}
                  >
                    Shop
                  </Link>
                  {/* <a href="detail.html" className="nav-item nav-link">
                    Shop Detail
                  </a> */}
                  {/* <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div class="dropdown-menu rounded-0 m-0">
                      <a href="cart.html" class="dropdown-item">
                        Shopping Cart
                      </a>
                      <a href="checkout.html" class="dropdown-item">
                        Checkout
                      </a>
                    </div>
                  </div> */}
                  <Link
                    to="/contact"
                    className={`nav-item nav-link  ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <Link
                    to="/login"
                    className={`nav-item nav-link  ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className={`nav-item nav-link  ${
                      location.pathname === "/register" ? "active" : ""
                    }`}
                  >
                    Register
                  </Link>
                  <Link
                    to="/dashboard"
                    className={`nav-item nav-link  ${
                      location.pathname === "/dashboard" ? "active" : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </nav>
            {/* <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" style={{ height: "410px" }}>
                <img class="img-fluid" src={c1} alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" style={{ maxWidth: "700px" }}>
                    <h4 class="text-light text-uppercase font-weight-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">
                      Fashionable Dress
                    </h3>
                    <a href="" class="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item" style={{ height: "410px" }}>
                <img class="img-fluid" src={c2} alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" style={{ maxWidth: "700px" }}>
                    <h4 class="text-light text-uppercase font-weight-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">
                      Reasonable Price
                    </h3>
                    <a href="" class="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#header-carousel"
              data-slide="prev"
            >
              <div
                class="btn btn-dark"
                style={{ width: "45px", height: "45px" }}
              >
                <span class="carousel-control-prev-icon mb-n2"></span>
              </div>
            </a>
            <a
              class="carousel-control-next"
              href="#header-carousel"
              data-slide="next"
            >
              <div
                class="btn btn-dark"
                style={{ width: "45px", height: "45px" }}
              >
                <span class="carousel-control-next-icon mb-n2"></span>
              </div>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
