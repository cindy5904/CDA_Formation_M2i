import React from 'react';
import { useState } from 'react';
import Cart from './Cart';
import useCartState from './CartState';

const Header = () => {
    const { cart, removeFromCart, calculateTotal } = useCartState();
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };
  
    return (
      <header>
        <p>Mon Application E-commerce</p>
        <button onClick={toggleCart}>Panier</button>
        {isCartOpen && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            calculateTotal={calculateTotal}
            onClose={toggleCart}
          />
        )}
      </header>
    );
  };
  
  export default Header;