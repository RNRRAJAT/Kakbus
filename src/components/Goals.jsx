import React from 'react'

const Goals = () => {
  return (
 
      <div className="goalContainer absolute top-[100vh] flex justify-around pt-[20vh] h-[100vh] w-[100vw] bg-cover bg-[url('/background5.jpg')]">
        <div className="left pl-6"><img className='h-[65vh] rounded-full' src="\homeImage.jpeg" alt="" /></div>
        <div className="right mr-20 pt-10">
            <h1 className='border w-[15vw] h-[12vh] text-6xl text-white flex items-center justify-center bg-slate-950  rounded-lg'>Goals</h1>
            {/* <p className='mt-8 text-white text-8xl'>"</p> */}
            <h2 className='w-[30vw] mt-16 text-2xl text-white'>
            Kakbus will transcend time , making life super fast and quite magical even our simplest of product will have a great value , currently there is no product , but there will be time to time</h2>
        </div>
      
    </div>
   
  )
}

export default Goals
