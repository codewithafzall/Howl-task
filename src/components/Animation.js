import Aos from 'aos'
import React, { useEffect } from 'react'
import "aos/dist/aos.css"

const Animation = () => {

  useEffect(()=>{
    Aos.init()
  },[]);

  return (
    <div className='w-screen h-screen justify-center items-center flex bg-[#ffffff]'>
       <div className=' font-bold uppercase'>
        <h1 data-aos="slide-up" data-aos-duration="500" data-aos-delay="300" className='animatedText text-9xl lg:text-9xl'>
          h
        </h1>
       </div>
       <div className=' font-bold uppercase'>
        <h1 data-aos="slide-down" data-aos-duration="500" data-aos-delay="500" className='animatedText text-9xl lg:text-9xl'>
          o
        </h1>
       </div>
       <div className=' font-bold uppercase'>
        <h1 data-aos="slide-up" data-aos-duration="500" data-aos-delay="700" className='animatedText text-9xl lg:text-9xl'>
          w
        </h1>
       </div>
       <div className=' font-bold uppercase'>
        <h1 data-aos="slide-down" data-aos-duration="500" data-aos-delay="900" className='animatedText text-9xl lg:text-9xl'>
          l
        </h1>
       </div>
    </div>
  )
}

export default Animation