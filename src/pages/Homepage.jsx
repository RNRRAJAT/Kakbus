import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Goals from '../components/Goals'
import About from '../components/About'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Goals/>
    <About/>
    <Footer/>
    </>
  )
}

export default Homepage
