import React, { useEffect, useContext } from "react";
import p1 from "../assets/img/product-1.jpg";
import p2 from "../assets/img/product-2.jpg";
import p3 from "../assets/img/product-3.jpg";
import p4 from "../assets/img/product-4.jpg";
import p5 from "../assets/img/product-5.jpg";
import p6 from "../assets/img/product-6.jpg";
import p7 from "../assets/img/product-7.jpg";
import p8 from "../assets/img/product-8.jpg";
import Featured from "./Featured";
import Categories from "./Categories";
import Offer from "./Offer";
import Subscribe from "./Subscribe";
import NewArrived from "./NewArrived";
import Vendor from "./Vendor";
import Product from "./Product";
// import { ProductListContext } from "../context/ProductContext";
import Slider from "./Slider";
import { Context } from "../context/Context";

const Products = () => {
  const { productLists, getProducts } = useContext(Context);
  // const { products, setProducts, getProducts } = useContext(ProductListContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Slider />
      <Featured />
      <Categories />
      <Offer />
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Trandy Products</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {productLists.map((ele, i) => (
            <Product key={i} product={ele} />
          ))}
        </div>
      </div>
      <Subscribe />
      <NewArrived />
      {/* <Vendor /> */}
    </>
  );
};

export default Products;
