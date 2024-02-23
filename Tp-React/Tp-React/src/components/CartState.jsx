import React from 'react';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';

const useCartState = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return { cart, addToCart, removeFromCart, calculateTotal };
};

export default useCartState;
