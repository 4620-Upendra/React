import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Browserhistroy from "./components/browserhistroy.jsx"

const socialMediaData = [
  {
    id: 1,
    name: "Instagram",
    image: "https://tse2.mm.bing.net/th/id/OIP.rig-LfLJGjzFA2FDbuoMzgHaHa?pid=Api&P=0&h=180",
    url: "https://www.instagram.com"
  },
  {
    id: 2,
    name: "Facebook",
    image: "https://tse1.mm.bing.net/th/id/OIP.N24RC8dLPtIGYfPSlKsK7AHaHa?pid=Api&P=0&h=180",
    url: "https://www.facebook.com"
  },
  {
    id: 3,
    name: "Twitter",
    image: "https://tse3.mm.bing.net/th/id/OIP.WEvoM0D_onx-edex_vfKhgHaHa?pid=Api&P=0&h=180",
    url: "https://www.twitter.com"
  },
  {
    id: 4,
    name: "LinkedIn",
    image: "https://tse1.mm.bing.net/th/id/OIP.CH_Ljw5hpxU03HXEuOC1pAHaHa?pid=Api&P=0&h=180",
    url: "https://www.linkedin.com"
  },
  {
    id: 5,
    name: "YouTube",
    image: "https://tse2.mm.bing.net/th/id/OIP.9-uO9K5uFpERhAc8OShvlQHaFj?pid=Api&P=0&h=180",
    url: "https://www.youtube.com"
  },
  {
    id: 6,
    name: "WhatsApp",
    // image: "https://tse3.mm.bing.net/th/id/OIP.oo9bI8v6wsoACVWdSsUO3AHaHa?pid=Api&P=0&h=180",
    image: "https://tse2.mm.bing.net/th/id/OIP.kQ4PqyH6dhjy53sHHG6arwHaHa?pid=Api&P=0&h=180",
    url: "https://www.whatsapp.com"
  }
];

function App() {
  

  return (
    <>
     <Browserhistroy data={socialMediaData}/>
    </>
  )
}

export default App
