import React from 'react'
import cover from '../assets/cover.jpeg';


const Blogs = () => {
  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
    <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
            
        
                <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                    <img className='h-56 w-full object-cover' src={cover} />
                    <div className='p-8'>
                        <h3 className='font-bold text-2xl my-1'>Blog 1</h3>
                        <p className='text-gray-600 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, laboriosam.</p>
                    </div>
                </div>
                <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                    <img className='h-56 w-full object-cover' src={cover} />
                    <div className='p-8'>
                        <h3 className='font-bold text-2xl my-1'>Blog 2</h3>
                        <p className='text-gray-600 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, laboriosam.</p>
                    </div>
                </div>
                <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                    <img className='h-56 w-full object-cover' src={cover} />
                    <div className='p-8'>
                        <h3 className='font-bold text-2xl my-1'>Blog 3</h3>
                        <p className='text-gray-600 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, laboriosam.</p>
                    </div>
                </div>





        </div>
    </div>
    </div>

  )
}

export default Blogs
