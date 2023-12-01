import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Exercise</h1>
      <h2>Andrew's Favorite cars</h2>
      <ul>
        <li>2006-2008 Audi A3 Vr6 motor</li>
        <li>1985 Supra Celica</li>
        <li>2010 Audi R8</li>
        <li>2008 Audi S6 V10 Motor </li>
        <li>2022 Lexus LS 500</li>
      </ul>
      <p>Let's see if we can <a href= "https://carsandbids.com">buy</a> these cars</p>
      
    </>
  )
}

export default App
