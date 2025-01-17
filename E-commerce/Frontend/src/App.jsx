import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { Outlet } from "react-router-dom";
// import ProductListContextProvider from "./context/ProductContext";
import ContextProvider from "./context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
