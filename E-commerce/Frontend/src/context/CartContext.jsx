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

  const addToCart = async (pId, quantity ) => {
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

  const increaseQuantity = async (productId) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      toast.error('Please log in to update cart.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }
  
    try {
      const response = await axios.patch(
        `http://localhost:5002/api/v1/cart/increase/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Quantity increased successfully', {
        position: 'top-center',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Failed to increase quantity',
        {
          position: 'top-center',
          autoClose: 3000,
        }
      );
    }
  };

  // Decrease quantity of product in cart
const decreaseQuantity = async (productId) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    toast.error('Please log in to update cart.', {
      position: 'top-center',
      autoClose: 3000,
    });
    return;
  }

  try {
    const response = await axios.patch(
      `http://localhost:5002/api/v1/cart/decrease/${productId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success('Quantity decreased successfully', {
      position: 'top-center',
      autoClose: 3000,
    });
  } catch (error) {
    toast.error(
      error.response?.data?.message || 'Failed to decrease quantity',
      {
        position: 'top-center',
        autoClose: 3000,
      }
    );
  }
};

  

  // const handleIncrease = async (productId) => {
  //   setCartProducts((prev) => {
  //     const updatedItems = prev.data.items.map((item) => {
  //       if (item.productId._id === productId) {
  //         return { ...item, quantity: item.quantity + 1 };
  //       }
  //       return item;
  //     });
  //     return { ...prev, data: { ...prev.data, items: updatedItems } };
  //   });
  // };

  // const handleDecrease = async (productId) => {
  //   setCartProducts((prev) => {
  //     const updatedItems = prev.data.items.map((item) => {
  //       if (item.productId._id === productId && item.quantity > 1) {
  //         return { ...item, quantity: item.quantity - 1 };
  //       }
  //       return item;
  //     });
  //     return { ...prev, data: { ...prev.data, items: updatedItems } };
  //   });
  // };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        getCartProducts,
        addToCart,
        removeFromCart,
        // handleIncrease,
        // handleDecrease,
        decreaseQuantity,
        increaseQuantity,
        quantity,
        setQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
