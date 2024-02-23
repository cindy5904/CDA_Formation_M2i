import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import useCartState from './components/CartState'
import { CartContext } from './context/CartContext'

function App() {
  const { cart, setCart} = useCartState();

  return (
    <>
      <CartContext.Provider value={{cart, setCart}}>
      <Products  />
      </CartContext.Provider>
      
    </>
  )
}

export default App
