import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './componant/ProductList'
import Header from './componant/Header'
import ProductForm from './componant/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ProductList/>
      <ProductForm/>
    </>
  )
}

export default App
