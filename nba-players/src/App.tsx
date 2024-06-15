import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home'; 
import PlayerDetails from './components/PlayerDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/players/:id' element={<PlayerDetails />} />
      </Routes>
    </Router>
    
  )
}

export default App
