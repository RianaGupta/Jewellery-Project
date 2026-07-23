import React from 'react'
import Navbar from './Navbar'
export default function Footer() {
  return (
    <div className=' bg-black w-full flex justify-evenly  bg-yellow' id='about'>
      <div className='flex-col w-[30%] items-center'>
        <h1 className='text-xl font-bold text-white mt-10 tracking-[1px]'>LUSTER  &  <span className='text-red-700'> ASH</span> </h1>
        <p className='text-xs text-gray-500 mt-5 mb-5'>An avant-garde jewelry laboratory translating gothic romance, lunar mysticism, and brutalist geometric outlines into flawless, certifiable .925 sterling silver artifacts.</p>
        <p className='text-xs text-gray-500 mb-10'>© 2026 Lustre & Ash. Built for silver connoisseurs. All rights reserved.</p>
      </div>
      <div className='flex-col w-[30%] items-center flex justify-center'>
        <h1 className='text-md font-bold text-white mt-10'>VISIT OUR STORE </h1>
        <p className='text-md text-gray-500 mt-3 mb-3'><i class="fa-regular fa-message text-red-700 pr-5"></i>Email-id</p>
        <p className='text-md text-gray-500 mb-10'><i class="fa-solid fa-phone text-red-700 pr-5"></i>Contact number-</p>
      </div>
      <div className='flex-col w-[30%] items-center flex justify-center'>
        <h1 className='text-xs font-bold text-white mt-10'>COLLECTION INDEX</h1>
        <p className='text-xs text-gray-500 mt-5 mb-3'>Minimalist Studs & Brutalist Hoops</p>
        <p className='text-xs text-gray-500 mb-3'>Ribbon Collars & Pendants Suites</p>
        <p className='text-xs text-gray-500  mb-10'>Heavy Gala & Bridal Sets</p>

      </div>


    </div>


  )
}
