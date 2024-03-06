import React from 'react'
import insta from "../assets/instagram-logo.png"
import fb from "../assets/facebook.png"
import twitter from "../assets/Twitter X logo edited 1.png"
import linkedin from "../assets/linkedin_svgrepo.com.png"

const Footer = () => {
  return (
    <div className='bg-[#181931] flex flex-col lg:flex-row md:flex-col lg:items-center text-white justify-between px-5 py-10'>
        <div className='flex md:justify-start mb-5 lg:mb-0 lg:justify-between space-x-5'>
            <img src={insta} className='w-6 h-6'/>
            <img src={twitter} className='w-6 h-6'/>
            <img src={fb} className='w-6 h-6'/>
            <img src={linkedin} className='w-6 h-6'/>
        </div>
        <h1 className='uppercase mb-5 lg:mb-0'>Press</h1>
        <h1 className='uppercase mb-5 lg:mb-0'>careers</h1>
        <h1 className='uppercase mb-5 lg:mb-0'>join the pack</h1>
        <button className='border-2 border-[#b056be] px-5 py-2 mb-5 lg:mb-0'>sign up to our newsletter<span className='ml-4 text-[#b056be]'>&#8594;</span></button>
        <p className='text-sm'>All rights reserved Designed, developed & powered by HOWL Digital Agency</p>
    </div>
  )
}

export default Footer