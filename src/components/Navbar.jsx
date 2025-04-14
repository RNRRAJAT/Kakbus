import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

  // const handleScroll = (sectionId) => {
  //   if (window.location.pathname !== '/') {


  //     window.location.href = `/#${sectionId}`;

  //   }

  //   else {
  //     // Directly scroll to the section
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // };

  const handleScroll = (height) => {
    if (window.location.pathname !== '/') {
      // Scroll to the given height from the current scroll position
      window.scrollTo({
        top: window.scrollY + height, // Scroll relative to the current scroll position
        behavior: 'smooth',
      });
    } else {
      // Directly scroll to the height relative to the current position
      window.scrollTo({
        top: window.scrollY + height, // Scroll by the given height
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className={`h-20 flex justify-between navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navLeft ml-6 flex items-center">
          <img onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }} className='w-16 rounded-md ml-10 cursor-pointer' src="\greatkakbus.png" alt="" />
        </div>
        <div className="navRight mr-28 flex items-center">
          <ul className='flex gap-10 text-xl '>
            <li onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} className='underline-hover'>Home</li>
            <Link to='/projects'><li className='underline-hover'>Projects</li></Link>
            <li onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }} className='underline-hover'>Goals</li>
            <li onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 2,
                behavior: 'smooth'
              });
            }} className='underline-hover'>About</li>
            <li onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 3,
                behavior: 'smooth'
              });
            }} className='underline-hover'>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
