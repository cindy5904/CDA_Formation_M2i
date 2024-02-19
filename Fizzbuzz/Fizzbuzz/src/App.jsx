import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FixBuzz from './components/FixBuzz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FixBuzz/>
    </>
  )
}

export default App
