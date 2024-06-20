// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = Cookies.get('cart');
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.name !== product.name);
    setCartItems(updatedCart);
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
