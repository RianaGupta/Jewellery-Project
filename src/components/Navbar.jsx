import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="hidden sm:flex justify-evenly bg-[rgb(57,3,3)]  p-[10px]">
                <p className="text-[rgb(173_171_171)] text-xs font-thin  tracking-[1.2px]" >
                    <i className="fa-regular fa-clock text-[rgb(159,0,0)] pr-5"></i>
                    CONSULTANT HOURS: 09:00 - 18:00 EST</p>
                <p className="text-[rgb(159_0_0)] text-xs tracking-[1.2px]"><i className="fa-solid fa-bolt-lightning text-[rgb(170,128,23)] pr-[5px]"></i>EXQUISITE .925 SILVER & CHASED CASTINGS</p>
                <p className="hidden lg:flex text-[rgb(173_171_171)] text-xs tracking-[1.2px]" ><i className="fa-solid fa-lock text-[rgb(159,0,0)] pr-[5px]"></i>ENCRYPTED FITTING ROOM</p>
            </div>


            <nav className="relative  bg-[radial-gradient(circle_at_center,_rgb(153_7_7),_rgb(84_2_2))] flex justify-center lg:justify-between lg:flex-wrap xl:flex-nowrap items-center sm:items-stretch pt-[50px] pb-[30px] sm:p-0 h-[50px] sm:h-auto w-full brightness-110">
                {/* <i className=" lg:hidden fa-solid fa-bars text-[rgb(210_204_204)] "></i> */}

             
                    <div className="align-center text-center lg:text-left lg:w-full xl:w-auto">
                        <h2 className=" text-[30px]  tracking-[5px] font-light pt-[15px] pr-0 pb-[15px] pl-[20px] [text-shadow:3px_2px_4px_rgba(0,0,0,0.65)] justify-stretch brightness-300">
                            <span className="text-[rgb(219_210_210)]  " >LUSTRE</span>
                            <span className="text-[rgb(234_8_8)]  " >ASH</span>
                        </h2>
                    </div>

                   
                        <ul className="hidden lg:flex xl:w-auto lg:w-fit lg:ml-[30px] xl:ml-0 lg:mt-[10px]  xl:mt-[30px] mr-[10px] list-none gap-[30px] font-['Cormorant_Garamond']">
                            <li><a className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] pb-[3px] pr-[10px] hover:text-white hover:border-b-1 border-red-500 " href="#">EXCUISITE EARRINGS</a></li>
                            <li><a className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] pb-[3px] pr-[10px] hover:text-white hover:border-b-1 border-red-500 " href="#archieve">PRECIOUS CATALOG</a></li>
                            <li><a className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] pb-[3px] pr-[10px] hover:text-white hover:border-b-1 border-red-500 " href="#care">SILVER ADORNMENT CARE</a></li>
                            <li><a className="text-[13px] tracking-[3px] text-[rgb(206_199_199)] pb-[3px] pr-[10px] hover:text-white hover:border-b-1 border-red-500 " href="#about">ABOUT US</a></li>
                        </ul>


                        <button className="hidden lg:flex bg-[rgba(27, 24, 24, 0.3)] lg:mt-[5px] lg:mb-[20px] xl:mt-[20px] mr-0 xl:mb-[20px] rl-[20px] p-[9px]  border-1 border-[rgb(234,8,8)] rounded-[9px] cursor-pointer ">
                            <i className="fa-solid fa-play text-[rgb(173,43,43)] pt-[4px] pr-[20px] text-[11px]"></i>
                            <p className="text-[#fb7185] text-[11px]">STYLE QUIZ</p>
                        </button>


                        <i
                            className="fa-solid fa-bag-shopping text-[rgb(210,204,204)] absolute right-0 ml-[10px] lg:static mt-[30px] lg:mt-[10px] xl:mt-[30px] mr-[50px] mb-[30px] text-[20px] "></i>
              
            </nav>

        </div>
    )
}
