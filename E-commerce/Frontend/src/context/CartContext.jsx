import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pId) => {
    if (cart.indexOf(pId) === -1) {
      setCart((prev) => [...prev, pId]);
    }
  };

  const removeFromCart = (pId) => {};
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
