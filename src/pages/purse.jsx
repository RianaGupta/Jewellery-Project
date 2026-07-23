import React from "react";
import purse from "../assets/purse.png";

export default function Purse() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#120202]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

      {/* Purse */}
      <img
        src={purse}
        alt="Regal Silver Purse"
        className="absolute right-[-7%] top-1/2 -translate-y-1/2 w-[78%] h-auto object-contain z-20 drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      />

      {/* Glass Panel */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 w-[32%] rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-12 shadow-2xl z-20 animate-purseDetail">

        {/* Small Heading */}
        <p className="uppercase tracking-[8px] text-[#C6A25A] text-sm mb-6">
          925 Sterling Silver
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-serif leading-[0.9] text-white">
          The Regal
          <br />
          Sterling Purse
        </h1>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#C6A25A] my-8"></div>

        {/* Description */}
        <p className="text-white/80 text-md ">
          Crafted from .925 sterling silver and finished with intricate gold detailing,
the Regal Silver Purse is a timeless expression of heritage craftsmanship.
Designed for collectors who value exclusivity, elegance, and enduring luxury.
        </p>

        {/* Price */}
        <div className="mt-10">
       <p className="uppercase tracking-[6px] text-[#D6C3A5] text-sm">
  Price on Request
</p>
        </div>

        {/* Button */}
        <button className="mt-10 w-full border border-[#C6A25A] py-4 rounded-xl text-[#C6A25A] uppercase tracking-[4px] transition-all duration-500 hover:bg-[#C6A25A] hover:text-black hover:scale-[1.02] hover:tracking-[6px]">
          Explore Collection
        </button>

      </div>

      {/* Brand */}
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 z-30 text-white text-2xl tracking-[6px] font-serif">
        LUSTER<span className="text-red-500">ASH</span>
      </h2>

    </div>
  );
}