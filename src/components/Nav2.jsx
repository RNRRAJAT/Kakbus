import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Nav2 = () => {
    const [scrolled, setScrolled] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [])
  return (
    <>
    <nav className='h-20 flex justify-between fixed top-0 left-0 w-[100vw] z-10 bg-black'>
        <div className="navLeft ml-6 flex items-center">
          <img className='w-16 rounded-md ml-10 cursor-pointer' src="\greatkakbus.png" alt="" />
        </div>
        <div className="navRight mr-40 flex items-center ">
          <ul className='flex gap-10 text-xl '>
            <Link to='/'><li className='underline-hover text-white'>Go back to Homepage</li></Link>
            
            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav2
