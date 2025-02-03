import React, { useEffect, useContext } from "react";
import Featured from "./Featured";
import Categories from "./Categories";
import Offer from "./Offer";
import Subscribe from "./Subscribe";
import NewArrived from "./NewArrived";
import Vendor from "./Vendor";
import Product from "./Product";
import Slider from "./Slider";
import { Context } from "../context/Context";
import { ProductContext } from "../context/ProductContext";


const Products = () => {
  const { products, getProducts } = useContext(ProductContext);
  // console.log(products);
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
          {products?.data?.length > 0 ? (
            products?.data.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <h2 className="text-center w-100">No products available.</h2>
          )}
        </div>
      </div>
      <Subscribe />
      <NewArrived />
      {/* <Vendor /> */}
    </>
  );
};

export default Products;
