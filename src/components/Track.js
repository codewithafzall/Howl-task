import React from 'react'
import image1 from '../assets/annie-spratt-277551-unsplash.png';
import image2 from '../assets/IMG_4839.png';

const Track = () => {
  return (
    <div className='bg-[#a551ba] py-14'>
        <div className='flex flex-col md:flex-row md:justify-center md:items-center justify-start lg:flex-row lg:items-center lg:justify-center md:space-x-11 lg:space-x-32'>
             <div className='ml-10 lg:ml-0'>
                <h1 className='text-white text-2xl lg:text-5xl font-semibold'>Keep Track</h1>
                <h1 className='text-white text-2xl lg:text-5xl font-semibold lg:mt-2'>of the wolves</h1>
                <p className='lg:text-6xl text-4xl text-white'>&#8594;</p>
             </div>
             <div className='flex justify-between mt-4 md:mt-0 lg:mt-0 px-5 lg:px-0'>
                <img src={image2} className='w-24 h-24 lg:w-44 lg:h-44'/>
                <div className='w-24 h-24 lg:w-44 lg:h-44 mx-7 flex items-center justify-center bg-[#363738]'>
                   <p className='text-white font-semibold lg:text-xl'>we're <br/> hiring</p>
                </div>
                <img src={image1} className='w-24 h-24 lg:w-44 lg:h-44'/>
             </div>
        </div>
    </div>
  )
}

export default Track