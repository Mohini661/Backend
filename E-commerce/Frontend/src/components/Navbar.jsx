import React, { useContext, useEffect, useState } from "react";
import c1 from "../assets/img/carousel-1.jpg";
import c2 from "../assets/img/carousel-2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, role } = useContext(Context);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid mb-4">
        <div className="row border-top px-xl-5">
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
                  {isAuthenticated ? (
                    <>
                      {role === "admin" ? (
                        <Link
                          // to={`/dashboard/${role === "admin" && "admin"}`}
                          to={"/dashboard/admin"}
                          className={`nav-item nav-link  ${
                            location.pathname === "/dashboard" ? "active" : ""
                          }`}
                        >
                          Dashboard
                        </Link>
                      ) : null}
                      <button
                        className={`nav-item nav-link btn btn-link`} //
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className={`nav-item nav-link  ${
                          location.pathname === "/login" ? "active" : ""
                        }`}
                      >
                        Login
                      </Link>
                      {/* <Link
                        to="/register"
                        className={`nav-item nav-link  ${
                          location.pathname === "/register" ? "active" : ""
                        }`}
                      >
                        Register
                      </Link> */}
                    </>
                  )}

                  {/*  */}
                  {/*  */}
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
