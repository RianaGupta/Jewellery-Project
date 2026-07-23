import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/header'
import Section from '../components/section'
import Section2 from '../components/section2'
import Footer from '../components/footer'
import { Routes } from 'react-router-dom'
export default function Home() {
  return (
      
    <div>
  
        <Navbar/>
        <Header/>
        <Section/>
        <Section2/>
        <Footer/>

    </div>
  )
}
