import React from 'react'
import rock from '../assets/rock.jpg';
import purse from '../assets/purse.png';
import special from "../assets/special.png";
import { Link } from 'react-router-dom';
import Purse from '../pages/purse';
export default function Section() {
  return (
    <div>
    

      <section className="min-h-screen bg-gradient-to-b from-[#350505] via-[#220303] via-60% to-[#050505] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Card */}
            <div className="w-full lg:w-1/2 bg-[#2B0B0B] border border-silver-bento/10 rounded-3xl p-6">

              <p className="inline-block bg-black/60 text-white text-xs font-thin tracking-wide border border-gray-700 rounded-lg px-3 py-2">
                <i className="fa-solid fa-bolt-lightning text-red-500 mr-2"></i>
                PURE .925 STERLING SILVER MASTERWORKS
              </p>

              <h2 className="text-4xl md:text-6xl lg:text-7xl text-gray-400 font-thin mt-6">
                Luminous
              </h2>

              <h2 className='text-4xl md:text-6xl lg:text-7xl text-gray-200 font-["Tangerine"]'>
                Silver
                <span className="text-gray-400 text-5xl lg:text-8xl mx-2">&</span>
              </h2>

              <h2 className='text-4xl md:text-5xl lg:text-6xl text-red-700 font-["Tangerine"] font-thin'>
                Crimson Shadow
              </h2>

              <p className="text-gray-400 font-thin mt-6 leading-7">
                Where moonlit gothic mystery marries pristine metallurgical excellence.
                Discover hypoallergenic sterling earrings and matching sets engineered
                to reflect custom avant-garde allure.
              </p>

              <div className="h-px bg-gray-700 my-6"></div>

              <button className="bg-red-800 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg">
                <a href='#archieve'>DISCOVER ARCHIVE</a>
              </button>
            </div>

            {/* Right Card */}
            <div
              className="w-full lg:w-1/2 min-h-[450px] rounded-3xl border border-silver-bento/10 bg-cover bg-center flex flex-col justify-between"
              style={{ backgroundImage: `url(${rock})` }}
            >
              <div className="m-6 bg-black/60 border border-gray-700 rounded-lg p-4 w-fit">
                <p className="text-red-700 tracking-wider text-xs font-bold">
                  FEATURED SUITE
                </p>

                <p className='text-white text-2xl font-["Tangerine"]'>
                  The Orbit & Crescent
                </p>
              </div>

              <div className="p-6">
                <p className="tracking-[4px] text-xs text-gray-500">
                  NEW RELEASE
                </p>

                <p className="text-white text-xl tracking-wide">
                  Artisan Sterling
                  <span className="text-[#fb7185]"> Earrings</span>
                </p>

                <p className="text-gray-500">
                  From geometric studs to sweeping chandelier drops.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* top pick */}
        <div className='min-h-screen '>
          <div className='h-auto  flex flex-col justify-center items-center mt-30 lg:mt-50'>
            <p className='text-red-700 text-xs tracking-[1px]'>CURATED ELEGANCE. TIMELESS LUXURY.</p>
            <h1 className='text-white text-3xl lg:text-5xl pt-5 font-["Gelasio"]'>TOP     <span className='text-red-700 text-4xl lg:text-6xl'> LUXURY </span> PICKS</h1>
          </div>

          <div className='flex'>
            <div className='bg-[gradient-to-br from-[#1B0808] via-[#120606] to-black] flex  flex-col lg:flex-row justify-between  border border-silver-bento/10 lg:h-[60vh] w-full mr-20 ml-20 mt-[30px] lg:mt-[50px] rounded-[20px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.7)] brightness-100 hover:brightness-130'>
              <div className='lg:w-[40%]'>
                <p className='text-red-700 text-lg sm:text-2xl pl-10 p-3 lg:p-10 tracking-[2px]'>LUXURY PURSE</p>
                <p className='text-white text-xl sm:text-2xl lg:text-4xl pl-3 md:pl-10 tracking-[2px] font-["Gelasio"]'>REGAL LUXURY PURSE</p>
                <p className='hidden lg:block text-gray-400 pt-10 pl-10'>A masterpiece forged from premium .925 sterling silver, this regal vanity purse is adorned with intricate hand-engraved patterns and luxurious gold accents. Inspired by timeless royal artistry, every curve reflects exceptional craftsmanship, making it more than an accessory—it is a collectible heirloom designed for those who appreciate enduring elegance.</p>
                <Link
                  to="/purse"
                  className="hidden lg:block text-red-700 text-2xl mt-5 p-10 tracking-[2px] pb-5"
                >
                  EXPLORE
                </Link>

              </div>
              <div className='lg:w-[60%] w-full lg:p-10 '>
                <a href=''><img className='w-full h-full  object-cover rounded-[15px] brightness-120' src={purse} /></a>
              </div>
            </div>

          </div>
        </div>
        {/* cars */}
        <div className="max-w-7xl mx-auto px-6 lg:px-5">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Card */}
            <div className="w-full mt-10 sm:mt-0 lg:w-1/3 bg-[gradient-to-br from-[#1B0808] via-[#120606] to-black] border border-red-900 rounded-3xl p-4">

              <p className='text-red-700 font-thin text-xs sm:text-md pl-5  lg:p-5 tracking-[2px] font-["Gelasio"]'>INTERACTIVE GUIDE</p>
              <h1 className='text-white text-3xl pl-5 font-["Gelasio"] font-thin mt-2 sm:mt-0'>Find Your <span className='font-["Tangerine"] text-4xl'>Signature</span></h1>
              <p className='text-gray-400 pl-5 pb-10 font-thin text-md'>Take our 4-point design quiz to map your face shape, metal preferences & style aura perfectly.</p>
              <a href="" className='m-[15px]  text-white hover:text-red-700 font-thin '>INQUIRE MATCHER NOW <i className="fa-solid fa-arrow-right font-thin"></i></a>
            </div>
            <div className="w-full lg:w-3/4 rounded-3xl border border-red-900 bg-cover bg-center flex flex-col ">
              <div className='flex justify-between'>
                <h1 className='text-gray-400 p-5 pb-2 text-xs font-thin tracking-[1px]'>METALLURGICAL RIGOR</h1>
                <h1 className='text-[#fb7185] p-5 pb-2 text-xs font-bold tracking-[1px]'>TARNISH-FREE RHODIUM SHIELD</h1>
              </div>
              <div className='h-[0.1px] ml-5 mr-5 w-[95%]  bg-gray-800'></div>
              <div className='flex justify-evenly'>
                <div>
                  <h1 className='text-gray-200 text-2xl pl-5 pt-10 pb-2 font-["Gelasio"]'>92.5%</h1>
                  <h1 className='text-gray-400 text-xs font-thin pl-4 tracking-[1px]'>CERTIFIED SILVER PURITY</h1>
                </div>
                <div className='h-20  w-[0.1px]  bg-gray-800 mt-10 ml-10 '></div>
                <div>
                  <h1 className='text-gray-200 text-2xl pt-10 pb-2 font-["Gelasio"]'>Hand</h1>
                  <h1 className='text-gray-400 text-xs font-thin  tracking-[1px]'>ARTISAN CHASED AND POLISHED</h1>
                </div>
                <div className='h-20  w-[0.1px]  bg-gray-800 mt-10 ml-10 '></div>
                <div>
                  <h1 className='text-gray-200 text-2xl pt-10 pb-2 font-["Gelasio"]'>100%</h1>
                  <h1 className='text-gray-400 text-xs font-thin  tracking-[1px]'>HYPOALLERGENIC NICKEL-FREE</h1>
                </div>

              </div>
              <p className='text-gray-400 font-thin pl-10 pt-5 text-s pb-7 sm:pb-0'><i className="fa-regular fa-star text-red-700 pr-6 font-thin text-xs"></i>Stamped with unique laser hallmark credentials matching international regulatory standards.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
