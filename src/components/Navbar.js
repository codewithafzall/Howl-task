import React from 'react'
import logo from "../assets/howl logo.png"

const Navbar = () => {
  return (
    <div className='w-full py-4 flex justify-between items-center px-5'>
         <img src={logo} className='w-40 h-12'/>
         <div className='space-y-2'>
            <div className='w-10 h-2 bg-[#af55bd]'></div>
            <div className='w-10 h-2 bg-[#af55bd]'></div>
         </div>
    </div>
  )
}

export default Navbar