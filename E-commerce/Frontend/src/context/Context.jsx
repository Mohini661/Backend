import { createContext, useRef, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const host = "http://localhost:5002";

  //register user
  const unameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();

  const addUser = async (username, email, phone, password, cpassword) => {
    try {
      const response = await fetch(`${host}/api/v1/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ username, email, phone, password, cpassword }),
      });
      const userData = await response.json();
      console.log(userData.data);
      
    } catch (error) {
      console.log("Error adding user", error);
    }
  };

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
