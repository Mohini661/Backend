import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Outlet } from "react-router-dom";
// import ProductListContextProvider from "./context/ProductContext";
import ContextProvider from "./context/Context.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <ContextProvider>
        <CartContextProvider>
          <Header />
          {/* <Navbar /> */}
          <Outlet></Outlet>
          <Footer />
        </CartContextProvider>
      </ContextProvider>
    </>
  );
}

export default App;
