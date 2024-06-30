import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#3C3C3B] text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Footer