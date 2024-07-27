import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    if (existItem) {
      setCartItems(
        cartItems.map((x) =>
          x._id === existItem._id ? { ...existItem, qty: existItem.qty + qty } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty }]);
    }
  };

  const incrementItem = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementItem = (id) => {
    const item = cartItems.find((x) => x._id === id);
    if (item.qty > 1) {
      setCartItems(
        cartItems.map((item) =>
          item._id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    } else {
      removeFromCart(id);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementItem, decrementItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
