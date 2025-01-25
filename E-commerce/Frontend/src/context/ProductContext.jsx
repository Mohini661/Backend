import axios from "axios";
import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const host = "http://localhost:5002";
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/product/get-products`);
      setProducts(response.data);
      //   console.log(products);
    } catch (error) {
      console.log("Error while getting products", error.message);
    }
  };

  const getSingleProduct = async (id) => {
    try {
      const response = await axios.get(
        `${host}/api/v1/product/get-product/${id}`
      );
      setCurrentProduct(response.data);
    //   console.log(currentProduct);
    } catch (error) {
      console.log("Error while getting product", error.message);
    }
  };
  return (
    <ProductContext.Provider
      value={{ products, getProducts, getSingleProduct, currentProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
