import React from 'react'
import Home from './pages/Home'
import Purse from './pages/purse'
import { Routes , Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
   <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/purse" element={<Purse />} />
   </Routes>
     
    </div>
  )
}