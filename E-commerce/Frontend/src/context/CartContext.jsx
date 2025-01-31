import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const getCartProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token not found. Please log in again.");
        return;
      }
      const response = await axios.get(
        `http://localhost:5002/api/v1/cart/get`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartProducts(response.data);
      console.log("Cart products fetched successfully:", cartProducts.data);
    } catch (error) {
      console.log("Error while getting products", error.message);
    }
  };

  const removeFromCart = async (pId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token not found. Please log in again.");
        return;
      }
      const response = await axios.delete(
        `http://localhost:5002/api/v1/cart/remove/${pId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response?.data.message || "Item removed from cart!", {
        position: "top-center",
        autoClose: 3000,
      });
      getCartProducts();

      console.log("Item Removed from cart:", response.data);
    } catch (error) {
      toast.error(response.message || "Failed to remove item from cart", {
        position: "top-center",
        autoClose: 3000,
      });
      console.log("Error while removing product", error.message);
    }
  };

  const addToCart = async (pId, quantity) => {
    try {
      console.log("pId, quantity", pId);
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("Token not found. Please log in again.");
        return;
      }
      const response = await axios.post(
        `http://localhost:5002/api/v1/cart/add/${pId}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);

      toast.success(response.message || "Item added to cart!", {
        position: "top-center",
        autoClose: 3000,
      });
      console.log("Add to cart response:", response.data);
      //  refresh the cart
      getCartProducts();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Unauthorized request. Please log in again.", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error(
          error?.response?.data?.message || "Failed to add item to cart",
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
      }
      console.log("Error while adding products", error.message);
    }
  };
  const modifyQuantity = async (productId, action) => {
    console.log("Modifying quantity for product:", productId);
    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(
        "http://localhost:5002/api/v1/cart/modify-quantity",
        {
          productId,
          action, // action can be "increase" or "decrease"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      if (response.data.success) {
        setCartProducts(response.data);
      }
      getCartProducts();
    } catch (error) {
      console.error("Error modifying quantity", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        getCartProducts,
        addToCart,
        removeFromCart,
        modifyQuantity,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
