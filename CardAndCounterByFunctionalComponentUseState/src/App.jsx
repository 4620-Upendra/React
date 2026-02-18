import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card.jsx"
import Counter from "./Components/Counter.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Student cards</h1>
    <div className='carddiv'> 
      
    {/* props(property):are used to send data between two components  */}
     <Card name="uppi" age={22} city="vizag" />
     <Card name="Amosh" age={20} city="Hyderabad" />
     <Card name="kumar" age={22} city="vizag" />
    </div>
     <div className='counter'>
     <h2>Counter App</h2>
    <Counter/>
   </div>
  
    </div>
  )
}

export default App
