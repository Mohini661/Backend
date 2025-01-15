import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { todoContext } from "../context/TodoContext";

const Login = () => {
  const showAlert = useContext(todoContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await fetch("http://localhost:5000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, password }),
      });
      setFormData({ email: "", password: "" });

      const userData = await response.json();
      console.log(userData);
      if (userData.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", userData.data.accessToken);
        // showAlert("Logged in successfully", "success");
        navigate("/");
      }
      //   else {
      //     showAlert("Invalid credentials", "danger");
      //   }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login to Your Account
        </h2>
        {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
        <form className="mt-4" onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
          <button
            type="submit"
            className="w-full mt-6 bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
