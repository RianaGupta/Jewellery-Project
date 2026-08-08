import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="hidden sm:flex justify-evenly bg-[rgb(57,3,3)] p-[10px]">
        <p className="text-[rgb(173_171_171)] text-xs font-thin tracking-[1.2px]">
          <i className="fa-regular fa-clock text-[rgb(159,0,0)] pr-5"></i>
          CONSULTANT HOURS: 09:00 - 18:00 EST
        </p>

        <p className="text-[rgb(159_0_0)] text-xs tracking-[1.2px]">
          <i className="fa-solid fa-bolt-lightning text-[rgb(170,128,23)] pr-[5px]"></i>
          EXQUISITE .925 SILVER & CHASED CASTINGS
        </p>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 bg-[radial-gradient(circle_at_center,_rgb(153_7_7),_rgb(84_2_2))] flex justify-between items-center px-5 h-[70px]">

        {/* Logo */}
        <h2 className="text-[30px] tracking-[3px] font-light [text-shadow:3px_2px_4px_rgba(0,0,0,0.65)] font-['Cormorant_Garamond']">
          <span className="text-[rgb(219_210_210)]">LUSTRE</span>
          <span className="text-[rgb(234_8_8)]">ASH</span>
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-[30px] items-center font-['Cormorant_Garamond']">
          <li>
            <a
              className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] hover:text-white hover:border-b border-red-500"
              href="#"
            >
              STYLE QUIZ
            </a>
          </li>

          <li>
            <a
              className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] hover:text-white hover:border-b border-red-500"
              href="#archieve"
            >
              COLLECTION
            </a>
          </li>

          <li>
            <a
              className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] hover:text-white hover:border-b border-red-500"
              href="#care"
            >
              ADORNMENT CARE
            </a>
          </li>

          <li>
            <Link
              to="/about"
              className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] hover:text-white hover:border-b border-red-500"
            >
              ABOUT US
            </Link>
          </li>

          <li>
            <button className="bg-[rgba(27,24,24,0.3)] p-[9px] border border-[rgb(234,8,8)] rounded-[9px] cursor-pointer">
              <i className="fa-solid fa-play text-[rgb(173,43,43)] pr-2 text-[11px]"></i>
              <span className="tracking-[2px] text-[#fb7185] text-[11px]">
                LOGIN
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile Bars */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[70px] left-0 w-full bg-[rgb(84,2,2)] z-[999] overflow-hidden transition-all duration-500 ${
            open ? "max-h-[500px]" : "max-h-0"
          } lg:hidden`}
        >
          <ul className="flex flex-col items-center gap-6 py-6 font-['Cormorant_Garamond']">

            <li>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                STYLE QUIZ
              </a>
            </li>

            <li>
              <a
                href="#archieve"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                COLLECTION
              </a>
            </li>

            <li>
              <a
                href="#care"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                ADORNMENT CARE
              </a>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <button className="border border-red-500 rounded-lg px-4 py-2 text-white">
                LOGIN
              </button>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  );
}