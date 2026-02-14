import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    // <div>
    //   <App />      {/* app component :to load app.jsx here */}
    //   <h3>upendra</h3>       {/*to return multiple lines there should in container like div etc  */}
    // </div>

    //day2:topics:components:(class component,function component),propes
    // <div>
    //   <App/>
    // </div>

    //day3:topics fragments,how to use booleans values in props and deatials in props
    <div>
      <App/>
    </div>
)
