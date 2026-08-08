import React from 'react'
import girl from '../assets/girl.png';
export default function About() {
    return (
        <div>
            <div className="bg-[#4A0000] align-center text-center lg:text-left lg:w-full xl:w-auto">
                <h2 className=" text-[30px] text-center  tracking-[3px] font-light pt-[30px] pr-0 pb-[20px] pl-[50px] [text-shadow:3px_2px_4px_rgba(0,0,0,0.65)] justify-stretch brightness-300 font-['Cormorant_Garamond']">
                    <span className="text-[rgb(219_210_210)]  " >LUSTRE</span>
                    <span className="text-[rgb(234_8_8)]  " >ASH</span>
                </h2>
            </div>
            <div className='bg-[#FCFAF6] h-[80vh] w-full pl-10 pr-10 pt-5  flex'>
                <div className='w-[60%] p-20'>
                    <p className='text-[#C89B3C] mb-3'>ABOUT LUSTREASH</p>
                    <h1 className='text-black text-6xl font-normal mb-5 tracking-[2px] font-["Cormorant_Garamond"]'>More Than Jewellery,</h1>
                    <h1 className='text-[#4A0000] text-6xl mb-5 tracking-[2px] font-["Cormorant_Garamond"]'>It's A Feeling.</h1>
                    <p className='text-gray-500 tracking-[1px] text-small font-normal mt-5 mr-30'>At LusterAsh, we design jewellery that celebrates the strength,elegance, and individuality of every woman.</p>
                    <p className='text-gray-500 tracking-[1px] text-small mt-5 font-normal mr-30'>Every piece is thoughtfully crafted with timeless beauty,premium quality and a passion for perfection.</p>
                    <div className='flex justify-evenly'>
                        <div>
                            <i class="fa-regular fa-gem text-[#D4AF37] pt-10 pb-2 text-2xl"></i>
                            <h1 className='text-black text-s font-200  tracking-[1px]'>Premium Quality</h1>
                        </div>
                        <div className='h-20  w-[0.1px]  bg-[#D4AF37] mt-5 ml-10 '></div>
                        <div>
                            <i class="fa-regular fa-heart text-[#D4AF37] pt-10 pb-2 text-2xl"></i>
                            <h1 className='text-black text-s font-200  tracking-[1px]'>Crafted With Love</h1>
                        </div>
                        <div className='h-20  w-[0.1px]  bg-[#D4AF37] mt-5 ml-10 '></div>
                        <div>
                            <i class="fa-regular fa-handshake text-[#D4AF37] pt-10 pb-2 text-2xl"></i>
                            <h1 className='text-black text-s font-200  tracking-[1px]'>Trusted by 10K+</h1>
                        </div>

                    </div>
                </div>
                <div className='  rounded-[10px] mt-25'>
                    <img src={girl} className=' pl-[5%] pr-[5%] rounded-[40px]' />
                </div>
            </div>
            <div className='bg-[#F3ECE3] h-screen w-full pt-30 pb-100'>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    {/* Founder Image */}
                    <div className="flex justify-center">
                        <img
                            src="/founder.jpg"
                            alt="Founder"
                            className="w-[380px] h-[460px] object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Founder Content */}
                    <div>
                        <p className="uppercase tracking-[6px] text-[#C89B3C] text-sm font-medium">
                            Meet the Founder
                        </p>

                        <h2 className="text-5xl font-serif text-[#4A0000] mt-3">
                            Riana Gupta
                        </h2>

                        <p className="text-[#8A7B6A] italic mt-2 text-lg">
                            Founder & Creative Designer
                        </p>

                        <div className="w-20 h-[2px] bg-[#C89B3C] my-8"></div>

                        <p className="text-[#5E5348] leading-8 text-lg">
                            LustreAsh was born from a passion for timeless elegance and
                            meaningful craftsmanship. Every design is created to celebrate
                            confidence, individuality, and the beauty found in everyday
                            moments.
                        </p>

                        <blockquote className="mt-10 border-l-4 border-[#C89B3C] pl-6 italic text-[#4A0000] text-xl leading-9">
                            "Jewellery isn't just an accessory—
                            it's a reflection of your story."
                        </blockquote>
                    </div>

                </div>

            </div>
            <div className=' bg-[#4A0000] w-full flex justify-evenly  bg-yellow ' id='about'>
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
        </div>
    )
}
