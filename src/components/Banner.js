import React from 'react'
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";

const Banner = () => {
  return (
    <>
    <div className='flex flex-col md:flex-col lg:flex-row px-4 lg:px-20 cursor-default mt-5'>
        <div className='w-full md:w-9/12 lg:w-6/12 lg:pl-10'>
             <h1 className='lg:w-8/12 text-lg font-semibold'>We exist because we want to help you navigate and harness the potential of this ever-changing digital landscape.</h1>
             <p className='custom-font'>Your</p>
             <p className='custom-font lg:ml-[20%]'>Growth</p>
             <p className='custom-font lg:ml-[40%]'>Partners</p>
        </div>
        <div className='w-full px-2 lg:px-0 lg:w-6/12 relative'>
            <img src={banner1} className='w-full lg:w-[600px]' alt='banner-image'/>
            <img className='absolute -bottom-[70px] right-[30%] lg:top-[54%] w-1/2 ' src={banner2} alt='banner-img'/>
        </div>
    </div>
     <div className="pb-5 px-4 lg:px-0 cursor-default text-lg w-full lg:w-5/12 lg:ml-auto lg:mr-32 flex font-semibold mt-20 lg:mt-7">
        <h1>It's not a game of guesses, it's a game of numbers where growth is the ultimate goal. We leverage cutting-edge technology and data-driven insights to help you answer questions that unlock growth.</h1>
     </div>
    </>
  )
}

export default Banner