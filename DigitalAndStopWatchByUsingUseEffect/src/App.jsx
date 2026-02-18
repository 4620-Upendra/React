import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Digitalwatch from './Components/DigitalWatch'
import Stopwatch from './Components/StopWatch'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='main'>
      <div className="sub">
      <Digitalwatch/>
      <div className="line"></div>
      <Stopwatch/>
      </div>
    </div>
  )
}

export default App
