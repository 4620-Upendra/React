import { useState } from 'react'
import Counter from './Components/Counter'
import Calculator from './Components/Claculator'
import "./app.css"

function App() {
   const [modeOn, setModeOn] = useState(false);
   console.log(modeOn);

  return (
    <div className={modeOn ? "DarkDiv" : "LightDiv"}>
    <div className='mode'>
      <span onClick={() => setModeOn(!modeOn)}>
        {modeOn ? "Light" : "Dark"}
        </span>
      </div>
    <div className='countercal'>
    <Counter/>
    <Calculator/>
    </div>
  </div>
  )
}
export default App
