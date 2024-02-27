import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom"
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Link to={"/"}>Liste Contact</Link>
     


    </>
  )
}

export default App
