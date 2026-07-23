import React from 'react'
import Section from './section';
import neck1 from "../assets/neck1.png";
import set1 from "../assets/set1.png";
import set3 from "../assets/set3.png";
import set2 from "../assets/set2.png";
import pendant from "../assets/pendant.png";
import ear1 from "../assets/ear1.png";
import ear2 from "../assets/ear2.png";
import neck2 from "../assets/neck2.png";
import pan1 from "../assets/pan1.png";
import bangle from "../assets/bangle.png";
import ear3 from "../assets/ear3.png";
import neck4 from "../assets/neck4.png";
import neck5 from "../assets/neck5.png";
import anklet1 from "../assets/anklet1.png";
import anklet2 from "../assets/anklet2.jpg";
import anklet3 from "../assets/anklet3.png";
import anklet4 from "../assets/anklet4.png";

export default function Section2() {
    return (
        <div>
            <section className="min-h-screen bg-gradient-to-b from-[#350505] via-[#220303] via-60% to-[#050505] py-10" id='archieve'>
                <div className='min-h-screen bg-yellow w-[90%] ml-[5%] mr-[5%]'>

                    <div className='flex'>
                        <div className='w-[0.1px] h-[13vh] bg-red-700 mr-5'></div>
                        <div className='flex-col'>
                            <h1 className='text-white text-3xl font-["Gelasio"] '>The Precious Catalog Archive</h1>
                            <p className='text-red-700 text-md font-thin pt-2 '>Refining selection pathways for modern collectors.</p>
                        </div>
                    </div>
                    <div className='h-[0.07px] w-full bg-gray-500 mt-5'></div>
                    <div className='flex  flex-wrap justify-evenly  '>
                        {/* <Card img={neck1} title="Royal Blue Stone Pendant " description="Beautiful blue stone pendant set with matching earrings, designed to add elegance and charm to any look. Perfect for parties, festive wear, and everyday styling." price="100" /> */}
                        <Card img={set2} title="Elegant Leaf Drop 925 Silver Necklace Set" description="Necklace Set
Gracefully crafted sterling silver necklace featuring sparkling leaf motifs with matching drop earrings. Perfect for weddings, festive occasions, and evening wear." price="₹24,999" />
                        <Card img={bangle} title="925 Sterling Silver Designer Bangles Collection" description="Premium handcrafted sterling silver bangles with intricate engraved patterns. Lightweight, elegant, and ideal for daily as well as festive wear." price="₹4,299 each" />
                        <Card img={neck2} title="Royal Crystal Drop Statement Necklace" description="Luxurious statement necklace adorned with brilliant stones and a pear-shaped center pendant. Designed to add timeless elegance to special occasions." price="₹34,999" />
                        <Card img={set3} title="Silver Geometric Necklace & Earrings Set" description="Modern geometric sterling silver necklace paired with matching earrings. A sophisticated design suitable for both western and ethnic outfits." price="₹21,499" />

                        {/* <Card img={neck1} title="Royal Blue Stone Pendant " description="Beautiful blue stone pendant set with matching earrings, designed to add elegance and charm to any look. Perfect for parties, festive wear, and everyday styling." price="100" /> */}
                        <Card img={pan1} title="Silver Charm Pandora Bracelet " description="Elegant Pandora-inspired charm bracelet with premium charms and blue crystal accents, crafted for everyday luxury." extra="Beeds can be customized acc. to your choice." price="₹8,999" />
                        <Card img={pendant} title="Elegant Bow Pendant Set" description="Delicate bow-inspired pendant necklace with matching earrings, beautifully finished with sparkling stones for a graceful look." price="₹7,999" />
                        <Card img={ear1} title="Butterfly Drop Earrings" description="Premium butterfly-shaped earrings with dazzling stones and elegant teardrop dangles. Lightweight yet luxurious." price="₹3,999" />
                        <Card img={set1} title="Royal Floral Vine Necklace Set" description="Sophisticated floral vine necklace paired with matching earrings, designed for festive occasions and bridal celebrations." price="₹25,999" />

                        {/* <Card img={neck1} title="Royal Blue Stone Pendant " description="Beautiful blue stone pendant set with matching earrings, designed to add elegance and charm to any look. Perfect for parties, festive wear, and everyday styling." price="100" /> */}
                        <Card img={ear2} title="Heart Drop Diamond Hoop Earrings" description="Elegant hoop earrings featuring brilliant heart-shaped dangling stones. A timeless design perfect for parties, anniversaries, and evening wear." price="₹6,999" />
                        <Card img={neck4} title="Royal Ruby Crystal Statement Necklace" description="A luxurious statement necklace adorned with deep ruby-toned stones and sparkling crystals, finished with a pear-cut centerpiece for a regal appearance." price="₹32,999" />
                        <Card img={neck5} title="Heritage Designer Silver Kada Pair" description="Premium handcrafted designer kadas with intricate oxidized detailing and gold-tone accents. A perfect blend of traditional craftsmanship and contemporary elegance." price="₹18,999" />
                        <Card img={ear3} title="Floral Drop Diamond Earrings" description="Graceful floral-inspired earrings with sparkling stones and elegant teardrop danglers. Designed to elevate festive and bridal looks." price="₹7,499" />

                        <Card img={anklet1} title="Royal Peacock Silver Anklet" description="Intricately handcrafted peacock anklet embellished with premium stones and detailed silver craftsmanship. An exquisite accessory for bridal and festive attire." price="₹22,999" />
                        <Card img={anklet2} title="Traditional Ghungroo Silver Payal" description="Elegant handcrafted silver anklets featuring classic ghungroo detailing, designed for weddings, festive occasions, and ethnic elegance." price="₹15,999" />
                        <Card img={anklet3} title="Vintage Ghungroo Payal" description="Traditional oxidized silver payal adorned with intricate motifs and dangling ghungroo accents. A bold statement piece for ethnic and festive wear." price="₹13,999" />
                        <Card img={anklet4} title="Royal Heritage Payal" description="Premium handcrafted heritage anklet with intricate square motifs and classic ghungroo detailing. Designed for brides and lovers of traditional jewelry." price="₹15,999" />
                    </div>
                </div>
                <div className=' w-[90%] m-[5%] bg-neutral-900/40 mt-30 pb-10 rounded-[10px] flex items-center border-gray-800 border ' id='care'>
                    <div className='flex-col w-[50%]'>
                        <h1 className='text-red-700 m-5 lg:m-10  text-xs tracking-[1px] font-bold'><i class="fa-solid fa-book-open pr-5"></i>STEWARDSHIP & CARE PROTOCOLS</h1>
                        <h1 className='text-white text-xl lg:text-2xl font-thin font-["Gelasio"] pl-5 lg:pl-10'>Maintaining Long-Lastic Luster</h1>
                        <p className='text-gray-400 pt-1 lg:pt-5 pl-5 lg:pl-10 text-xs lg:text-normal'>Sterling silver .925 is a beautiful living metal that interacts gracefully with its environment. Our protective rhodium shielding prevents oxygen and moisture from tarnishing the items quickly, but meticulous care is recommended.</p>
                        <div className='flex  justify-evenly gap-5'>
                            <div className='border-gray-800 border text-wrap p-2 lg:p-5 mt-5 ml-5 lg:ml-10  w-auto  rounded-[10px]'>
                                <p className='text-red-700 text-xs tracking-[0.5px] '>AVOID WATER EXPOSURE</p>
                                <p className='text-gray-600 text-xs lg:text-normal'>Remove during hot pools, thermal baths or while utilizing sulfur-heavy cosmetics.</p>
                            </div>
                            <div className='border-gray-800 border p-2 lg:p-5 mt-5  w-auto rounded-[10px]'>
                                <p className='text-red-700 text-xs tracking-[0.5px]'>BUFFING WITH SILK</p>
                                <p className='text-gray-600 text-xs lg:text-normal'>Utilize a premium grade micro-fiber silver towel without liquid chemical abrasives.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[0.1px] h-[20vh] bg-gray-500 m-10 mt-35'></div>
                    <div className='flex-col mt-22 mr-15'>
                        <h1 className='text-gray-400 text-xs tracking-[1px]'>LUSTER AND ASH GURANTEES</h1>
                        <h1 className='text-gray-300  text-xs tracking-[1px] font-bold mt-3 '><i class="fa-solid fa-shield text-red-700 pr-2"></i>FULL-METAL HALLMARK CERTIFICATION</h1>
                        <p className='text-gray-500 m-1 ml-4'>Every piece carries a physically stamped laser hallmark verifying .925 purity.</p>
                        <h1 className='text-gray-300  text-xs tracking-[1px] font-bold mt-5 '><i class="fa-solid fa-award text-red-700 pr-2"></i>HYPOALLERGENIC NICKEL FREE GURANTEE</h1>
                        <p className='text-gray-500 m-1 ml-4'>Specifically forged to exclude reactive alloys, ensuring 100% skin compatibility.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
function Card(props) {
    return (
        <div className='flex flex-col justify-center hover:border-red-700 bg-neutral-900/40  w-full sm:w-[48%] lg:w-[23%] mt-20  rounded-[15px] overflow-hidden border-1 border-silver-bento/10 hover:shadow-[0_8px_20px_rgba(127,29,29,0.6)] brightness-120 hover:transition-shadow hover:duration-500 hover:brightness-140 hover:transition-ease-out'>
            <img className='object-cover h-[40vh] w-[100%]' src={props.img} />
            <h2 className='m-2 text-white text-xl hover:text-[#fb7185] '>{props.title}</h2>
            <p className='ml-2 text-gray-400 font-thin text-xs mt-2 mb-1'>{props.description}</p>
            <p className='ml-2 text-red-700 font-thin text-xs  mb-1'>{props.extra}</p>

            <div className='flex justify-between m-2'>
                <h2 className='text-gray-500 text-md font-thin'>INQUIRE VALUE</h2>
                <h2 className="text-white">{props.price}</h2>
            </div>
            <button className="text-gray-300 text-center border-1 border-gray-500 rounded-[9px] p-3 pt-1 pb-1 m-3 font-thin hover:text-red-700 font-['Gelasio'] "><i className="fa-regular fa-eye text-red-700 pr-8 "></i><Link to={`/product/${product.id}`}>
  BUY NOW
</Link>
    
</button>

        </div>
    );
}
