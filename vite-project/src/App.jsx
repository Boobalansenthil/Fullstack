import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bala } from './Bala'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='header'>Nothing to say here...</h1>
        <p>Hold the button</p>
      </div>
      <Bala />
    </>
  )
}

export default App
