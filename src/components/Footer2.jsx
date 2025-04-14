import React from 'react'

const Footer2 = () => {
  return (
    <div className={`flex justify-between text-white  w-full h-[30vh] bg-zinc-800 `}>
        <div className="left ml-10 pt-8">

        <div className="text-white">KAKBUS &copy; 2025</div>
        <div className=''>All rights reserved</div>
        </div>
        <div className="middle pt-6 flex flex-col gap-7">
            <div>CONTACT US</div>
            <div>
                
            <div>+91 - 8910364902</div>
            <div>kakbus123@gmail.com</div>
            </div>
            
        </div>
        <div className="right flex flex-col gap-3 pt-6">
            <a target='blank' href="https://www.youtube.com/@Terabus-offc"><div className="social flex mr-14 gap-4"><img className='h-8 rounded-md' src="\youtubeLogo.png" alt="" /><div>YOUTUBE</div></div></a>
            <a target='blank' href="https://www.instagram.com/terrabus369/?utm_source=qr&igsh=MTV0Z25kN3ZoeHY2NQ%3D%3D#"><div className="social flex gap-4"><img className='h-8 rounded-md' src="\instagramLogo.jpeg" alt="" /><div>INSTAGRAM</div></div></a>
        </div>
      
    </div>
  )
}

export default Footer2
