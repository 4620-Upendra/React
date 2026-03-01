import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>    
  {/* to enable routing we should wrap all components in between  BrowserRouter tag */}
    <App />
  </BrowserRouter>
)
