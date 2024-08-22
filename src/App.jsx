import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Router>
      <LandingPage/>
          {/* <About/> */}

            <Routes>
              
            </Routes>
            
      </Router>
    </>
  )
}

export default App
