import { createContext, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const host = "http://localhost:5002";
  const [productLists, setProductLists] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [role, setRole] = useState("");
  const navigate = useNavigate();

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
      console.log(userData);
      if (userData.success && response.ok) {
        toast.success("User registered successfully!");
        console.log(userData.message);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(userData.message);
      }
    } catch (error) {
      console.log("Error adding user", error);
      toast.error("An error occurred while registering the user");
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
      if (userData.success && response.ok) {
        localStorage.setItem("token", userData.data.accessToken);
        setIsAuthenticated(true);
        setRole(userData.data.user.role);

        toast.success(
          userData.message ||
            `${userData.data.user.role} logged In Successfully!`,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        if (userData.data.user.role === "user") {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setTimeout(() => {
            navigate("/dashboard/admin");
          }, 2000);
        }
      } else {
        // console.log("Login Failed", userData.data.message);
        toast.error(userData.message || "Login Failed", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.log("Error while login", error.message);
      toast.error("");
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
