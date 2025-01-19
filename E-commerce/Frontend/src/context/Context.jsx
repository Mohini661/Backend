import { createContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const host = "http://localhost:5002";

  const [isAuthenticated, setIsAuthenticated] = useState(
    !sessionStorage.getItem("token")
  );

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

  const logout = async (id) => {};

  const [productLists, setProductLists] = useState([]);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
