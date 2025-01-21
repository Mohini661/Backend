import { createContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const host = "http://localhost:5002";
  const [productLists, setProductLists] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [role, setRole] = useState("");

  //register user
  const unameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();

  const addUser = async (username, email, phone) => {
    try {
      const response = await fetch(`${host}/api/v1/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ username, email, phone }),
      });
      const userData = await response.json();
      console.log(userData.data);
    } catch (error) {
      console.log("Error adding user", error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${host}/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const userData = await response.json();
      console.log(userData.data);
      if (userData.success) {
        localStorage.setItem("token", userData.data.accessToken);
        setIsAuthenticated(true);
        setRole(userData.data.user?.role);
      } else {
        console.log("Login Failed", userData.data.message);
      }
    } catch (error) {
      console.log("Error while login", error.message);
    }
  };

  //call logout api fix issue of remove refreshToken from db
  const logout = async () => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        console.log("Access token not found in localstorage");
      }
      await fetch(`${host}/api/v1/users/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.log("Error while logout", error.message);
    }
  };

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((p) => setProductLists(p.products));
  };
  return (
    <Context.Provider
      value={{
        unameRef,
        emailRef,
        phoneRef,
        passwordRef,
        cpasswordRef,
        addUser,
        productLists,
        getProducts,
        isAuthenticated,
        login,
        logout,
        setIsAuthenticated,
        role,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
