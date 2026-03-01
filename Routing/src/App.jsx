import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import NoPageFound from './Components/NoPageFound'
import NavBar from './Components/NavBar'
import SingleProduct from './Components/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
       {/* //here Routes check paths with url is matched means that path element component is rendered  */}
    <Routes>    
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<NoPageFound/>}></Route>    //if url not matched with any route path then this route will rendered
      <Route path="/products/:id" element={<SingleProduct/>}></Route>
    </Routes>

    </>
  )

}

export default App
