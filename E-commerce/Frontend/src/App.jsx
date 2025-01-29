import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Outlet } from "react-router-dom";
// import ProductListContextProvider from "./context/ProductContext";
import ContextProvider from "./context/Context.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Header />
            {/* <Navbar /> */}
            <Outlet></Outlet>
            <Footer />
          </ProductContextProvider>
        </CartContextProvider>
      </ContextProvider>
      <ToastContainer/>
    </>
  );
}

export default App;
