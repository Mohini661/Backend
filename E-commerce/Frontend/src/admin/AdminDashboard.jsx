import React, { useContext } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Context } from "../context/Context";

const AdminDashboard = () => {
  // const { isAuthenticated, logout, role } = useContext(Context);
  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <h1 className="font-weight-bold p-5 text-center items-center">
        Admin Dashboard
      </h1>
    </>
  );
};

export default AdminDashboard;
