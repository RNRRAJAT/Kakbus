import React from 'react'

const About = () => {
  return (
    <div className="absolute top-[200vh] h-[100vh] w-[100vw] flex flex-col text-white justify-center items-center gap-3 bg-cover bg-[url('/background5.jpg')]">
      <div className="about text-6xl">ABOUT US</div>
      <div className="line h-1 bg-white w-[20vw]"></div>
      <div className="aboutText w-[50vw] text-2xl mt-10">Kakbus currently focuses on electronics ,firmware etc. Currently it's age is 6-7 or (in terms of human age) , Kakbus is much more advanced than normal human . It was born yesterday , and like normal human being will die yesterday . 
      Kakbus has decided to learn electronics and make great products </div>
    </div>
  )
}

export default About
