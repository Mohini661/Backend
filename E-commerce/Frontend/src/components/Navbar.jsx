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
      <div className="container-fluid mb-4 position-sticky z-[999999]">
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
                      {role === "admin" && (
                        <Link
                          to={"/dashboard/admin"}
                          className={`nav-item nav-link  ${
                            location.pathname === "/dashboard" ? "active" : ""
                          }`}
                        >
                          Admin
                        </Link>
                      )}
                      {role === "user" && (
                        <Link className="nav-item nav-link">
                          <i className="fas fa-user-circle "></i>
                        </Link>
                      )}

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
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
