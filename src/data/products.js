import React from 'react'

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
import pen1 from '../assets/pen1.png';

const products = [
  {
    id: 1,
    title: "Elegant Leaf Drop 925 Silver Necklace Set",
    category: "sets",
    image: set2,
    description:
      "Gracefully crafted sterling silver necklace with matching earrings.",
    price: "₹24,999"
  },
  {
    id: 2,
    title: "Royal Crystal Drop Statement Necklace",
    category: "sets",
    image: neck2,
    description:
      "Luxurious statement necklace adorned with brilliant stones and a pear-shaped center pendant. Designed to add timeless elegance to special occasions.",
    price: "₹34,999"
  },
  {
    id: 3,
    title: "Silver Geometric Necklace & Earrings Set",
    category: "sets",
    image: set3,
    description:
      "Modern geometric sterling silver necklace paired with matching earrings. A sophisticated design suitable for both western and ethnic outfits.",
    price: "₹21,499"
  },
  {
    id: 4,
    title: "Royal Ruby Crystal Statement Necklace",
    category: "sets",
    image: neck4,
    description:
      "A luxurious statement necklace adorned with deep ruby-toned stones and sparkling crystals, finished with a pear-cut centerpiece for a regal appearance",
    price: "₹32,999"
  },
  {
    id: 5,
    title: "Royal Floral Vine Necklace Set",
    category: "sets",
    image: set1,
    description:
      "Sophisticated floral vine necklace paired with matching earrings, designed for festive occasions and bridal celebrations.",
    price: "₹25,999"
  },
  {
    id: 6,

    title: "Royal Peacock Silver Anklet",
    category: "anklets",
    image: anklet1,
    description: "Intricately handcrafted peacock anklet embellished with premium stones and detailed silver craftsmanship. An exquisite accessory for bridal and festive attire.",
    price: "₹22,999",


  },
  {
    id: 7,
    category: "anklets",
    image: anklet2,
    title: "Traditional Ghungroo Silver Payal",
    description: "Elegant handcrafted silver anklets featuring classic ghungroo detailing, designed for weddings, festive occasions, and ethnic elegance.",
    price: "₹15,999"
  },
  {
    id: 8,
    category: "anklets",
    image: anklet3,
    title: "Vintage Ghungroo Payal",
    description: "Traditional oxidized silver payal adorned with intricate motifs and dangling ghungroo accents. A bold statement piece for ethnic and festive wear.",
    price: "₹13,999"

  },
  {
    id: 9,
    category: "anklets",
    image: anklet4,
    title: "Royal Heritage Payal",
    description: "Premium handcrafted heritage anklet with intricate square motifs and classic ghungroo detailing. Designed for brides and lovers of traditional jewelry.",
    price: "₹15,999"
  },
  {
    id: 10,
    category: "pendants",
    image: { pendant },
    title: "Elegant Bow Pendant Set",
    description: "Delicate bow-inspired pendant necklace with matching earrings, beautifully finished with sparkling stones for a graceful look.",
    price: "₹7,999"

  },
  {
    id: 11,
    category: "pendants",
    image: pen1,
    title: "Flower Pendant set",
    description: "Modern geometric flower sterling silver pendant paired with matching earrings. A sophisticated design suitable for both western and ethnic outfits.",
    price: "₹6,499"

  },
  {
    id: 12,
    category: "pendants",
    image: neck1,
    title: "Blue Crystal Pendant set ",
    description: "Delicate crystal blue pendant set with matching earrings, beautifully finished with sparkling stones for a graceful look.",
    price: "₹6,499"

  },
  {
    id: 13,
    category: "HAND & EAR ACCESSORIES",
    image:bangle ,
    title:"925 Sterling Silver Designer Bangles Collection",
    description:"Premium handcrafted sterling silver bangles with intricate engraved patterns. Lightweight, elegant, and ideal for daily as well as festive wear.",
    price:"₹4,299 each"

  },
  {
    id: 14,
    category: "HAND & EAR ACCESSORIES",
    image: pan1 ,
    title:"Silver Charm Pandora Bracelet ",
    description:"Elegant Pandora-inspired charm bracelet with premium charms and blue crystal accents, crafted for everyday luxury.",
    extra:"Beeds can be customized acc. to your choice.",
    price:"₹8,999"


  },
  {
    id: 15,
    category: "HAND & EAR ACCESSORIES",
    image:neck5 ,
    title:"Heritage Designer Silver Kada Pair",
    description:"Premium handcrafted designer kadas with intricate oxidized detailing and gold-tone accents. A perfect blend of traditional craftsmanship and contemporary elegance.",
    price:"₹18,999"


  },
  {
    id: 16,
    category: "HAND & EAR ACCESSORIES",
    image: ear2 ,
    title:"Heart Drop Diamond Hoop Earrings",
    description:"Elegant hoop earrings featuring brilliant heart-shaped dangling stones. A timeless design perfect for parties, anniversaries, and evening wear.",
    price:"₹6,999"

  },
  {
    id: 17,
    category: "HAND & EAR ACCESSORIES",
    image: ear1 ,
    title:"Butterfly Drop Earrings",
    description:"Premium butterfly-shaped earrings with dazzling stones and elegant teardrop dangles. Lightweight yet luxurious.",
    price:"₹3,999"

  },
  {
    id: 17,
    category: "HAND & EAR ACCESSORIES",
    image: ear3 ,
    title:"Floral Drop Diamond Earrings",
    description:"Graceful floral-inspired earrings with sparkling stones and elegant teardrop danglers. Designed to elevate festive and bridal looks.",
    price:"₹7,499"


  }
];

export default products;