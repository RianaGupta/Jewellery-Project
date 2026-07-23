import React from 'react'
import neck2 from "../assets/neck2.png";
import neck1 from "../assets/neck1.png";
import neck3 from "../assets/neck3.png";
import neck4 from "../assets/neck4.png";
import neck5 from "../assets/neck5.png";
import purse from "../assets/purse.png";
import pen1 from "../assets/pen1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function Header() {
    const images = [
        purse,
        neck2,
        neck4,
        neck5,
        pen1,

    ];
    return (
        <div>
            <div className="  h-screen w-full bg-gradient-to-b from-[#8B0000] via-[#3b0000] via-30% to-[#350505] ">
                <div className=" flex md:flex md:flex-row md:justify-between w-full text-center md:text-left justify-unset flex-col">
                    <div>
                        <h1 className="tracking-[1px] lg:tracking-[3px] font-normal text-[34px] lg:text-[50px] text-[rgb(228_219_219)] lg:text-[rgb(206_199_199)] pt-[12px] lg:pt-[20px] pr-0 lg:pb-[5px] pl-0  md:pl-[30px] animate-forfade font-['Cormorant_Garamond'] text-center  md:text-left">For the</h1>
                        <h1 class="tracking-[2px] font-medium text-[35px] lg:text-[47px] text-[rgb(233_233_137)] pl-0  md:pl-[25px] animate-womenfade text-center md:text-left">WOMEN YOU ARE</h1>
                    </div>
                    <div>
                        <p class="text-[rgb(233_226_226)] pt-[5px] md:pt-[30px]  text-center lg:text-left md:pr-[60px]  lg:pt-[60px] lg:pr-[100px] pb-0 pl-0 md:font-thin md:text-[18px] lg:text-base   font-normal italic font-['Cormorant_Garamond'] animate-textfade">
                            We create pieces that mirror your grace,</p>
                        <p class="text-[rgb(233_226_226)] pt-[2px] pr-0 md:pr-[100px] lg:pr-[60px] pb-0 pl-0 text-center lg:text-left  md:font-thin md:text-[18px] lg:text-base font-normal italic font-['Cormorant_Garamond'] animate-textfade">
                            your strength, and your journey —</p>
                        <p class="text-[rgb(233_226_226)] pt-[2px] pr-0 md:pr-[50px] lg:pr-[60px] pb-0 pl-0 text-center lg:text-left  md:font-thin md:text-[18px] lg:text-base font-normal italic font-['Cormorant_Garamond'] animate-textfade">
                            because elegance is not just worn, it's lived.</p>
                    </div>
                </div>
                <div className="lg:hidden">
                    <Swiper
                        style={{
                            "--swiper-theme-color": "#dc2626",
                        }}
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500 }}
                        loop={true}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex justify-center items-center'>
                                    <div className=' w-[80%] h-[55vh] mt-[5%]'>
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            
            <div className='hidden lg:flex gap-[1.5%] justify-around mr-[50px] ml-[50px]'>
                <div className='bg-yellow h-[35vh] w-[23%]  mt-[65px] rounded-[15px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.7)]  animate-neckAnimation1 transition-all duration-500 hover:-translate-y-[15px] brightness-120 hover:brightness-140'>
                    <img className='w-full h-full object-cover' src={neck5} />
                </div>
                <div className='bg-blue h-[45vh] w-[23%] mt-[40px] rounded-[15px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.7)]  animate-neckAnimation1 transition-all duration-500 hover:-translate-y-[15px] brightness-120 hover:brightness-150'>
                    <img className='w-full h-full object-cover' src={neck2} />

                </div>
                <div className='bg-yellow h-[55vh] w-[30%]  mt-[20px] rounded-[15px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.7)] animate-neckAnimation transition-all duration-500 hover:-translate-y-[15px] brightness-120 hover:brightness-150'>
                    <img className='w-full h-full object-cover' src={purse} />

                </div>
                <div className='bg-pink h-[45vh] w-[23%] mt-[40px] rounded-[15px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.7)]  animate-neckAnimation2 transition-all duration-500 hover:-translate-y-[15px] brightness-120 hover:brightness-150'>
                    <img className='w-full h-full object-cover' src={neck4} />

                </div>
                <div className='bg-red h-[35vh] w-[23%] mt-[65px] rounded-[15px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.7)]  animate-neckAnimation2 transition-all duration-500 hover:-translate-y-[15px] brightness-120 hover:brightness-150'>
                    <img className='w-full h-full object-cover' src={pen1} />

                </div>
            </div>
        </div>
</div>
    )
}
