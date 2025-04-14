import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="pt-20 homeContainer absolute flex justify-around w-[100vw] h-[100vh] bg-cover bg-[url('/background5.jpg')]" >

                <div className="homeright mt-8 ml-10">
                    <img className='h-[65vh] rounded-md' src="\homeImage2.jpg" alt="" />

                </div>
                <div className='homeLeft mt-12 mr-10 text-white flex flex-col items-center gap-6'>
                    <h2 className='text-5xl font-bold'>WELCOME</h2>
                    <h3 className='text-2xl'>to</h3>
                    <h1 className='text-8xl font-extrabold'>KAKBUS</h1>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-2xl'>Where innovation meets</h2>
                        <h1 className='text-3xl'>Ideas</h1>
                    </div>
                    <Link to='/projects'><div className="explore text-3xl border rounded-md p-6 bg-zinc-950 cursor-pointer mt-10">EXPLORE OUR PROJECTS</div></Link>
                </div>
            </div>
        </>
    )
}

export default Home
