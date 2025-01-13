import React, { useContext } from "react";
import { todoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-3">
        <h1 className="text-2xl font-bold ">To-Do List</h1>
        <ul className="hidden md:flex space-x-6 text-xl">
          <li className="hover:text-blue-600 transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 transition duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-600 transition duration-200">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-blue-600 transition duration-200">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </header>
  );
};

export default Navbar;
