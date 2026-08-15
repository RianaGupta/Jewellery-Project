import React from 'react'
import Home from './pages/Home'
import Purse from './pages/purse'
import Category from './pages/Category'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
// import Style from './pages/style'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Style" element={<Style />} /> */}

        <Route path="/purse" element={<Purse />} />
        <Route
          path="/category/:category"
          element={<Category />}
        />
      </Routes>

    </div>
  )
}