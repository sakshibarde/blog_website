import React from 'react'
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-white drop-shadow-lg'>
        <div className='flex justify-between items-centre w-full h-full md:max-w-[1240px] m-auto'>

            <div className='flex items-centre'>
                <img src={logo} alt="logo" className='w-full h-full' />
            </div>
            <div className='flex items-centre'>
                <ul className='hidden md:flex pt-4'>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Practice</li>
                    <li>Event</li>
                    <li>Assesment</li>
                </ul>
            </div>
            <div className='hidden md:flex sm:mr-10 md:mr-10 pt-4'>
                <button className='border-none bg-transparent text-black mr-4 pb-3'>login</button>
                <button className='px-8 py-3 h-[50px] bg-orange-500'>Sign Up</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar