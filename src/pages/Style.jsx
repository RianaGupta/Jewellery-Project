import React, { useState } from "react";
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
const questions = [
  {
    question: "What describes your everyday style?",
    options: [
      { text: "Minimal & Elegant", style: "minimal" },
      { text: "Bold & Edgy", style: "gothic" },
      { text: "Romantic & Feminine", style: "romantic" },
      { text: "Classic & Timeless", style: "classic" },
    ],
  },

  {
    question: "What kind of jewellery catches your eye?",
    options: [
      { text: "Delicate & Subtle", style: "minimal" },
      { text: "Dark & Mysterious", style: "gothic" },
      { text: "Soft & Delicate", style: "romantic" },
      { text: "Rich & Luxurious", style: "classic" },
    ],
  },

  {
    question: "Choose the vibe you want to wear",
    options: [
      { text: "Quiet Luxury", style: "minimal" },
      { text: "Gothic Romance", style: "gothic" },
      { text: "Dreamy & Feminine", style: "romantic" },
      { text: "Timeless Glamour", style: "classic" },
    ],
  },
];

const necklaces = [
  {
     id: 1,
        title: "Elegant Leaf Drop 925 Silver Necklace Set",
        category: "sets",
        image: set2,
        description:
          "Gracefully crafted sterling silver necklace with matching earrings.",
        price: "₹24,999",
    styles: ["gothic", "minimal"],
  },

  {
     id: 2,
        title: "Royal Crystal Drop Statement Necklace",
        category: "sets",
        image: neck2,
        description:
          "Luxurious statement necklace adorned with brilliant stones and a pear-shaped center pendant. Designed to add timeless elegance to special occasions.",
        price: "₹34,999",
    styles: ["gothic"],
  },

  {
    id: 3,
       title: "Silver Geometric Necklace & Earrings Set",
       category: "sets",
       image: set3,
       description:
         "Modern geometric sterling silver necklace paired with matching earrings. A sophisticated design suitable for both western and ethnic outfits.",
       price: "₹21,499",
    styles: ["minimal", "romantic"],
  },

  {
    id: 4,
       title: "Royal Ruby Crystal Statement Necklace",
       category: "sets",
       image: neck4,
       description:
         "A luxurious statement necklace adorned with deep ruby-toned stones and sparkling crystals, finished with a pear-cut centerpiece for a regal appearance",
       price: "₹32,999",
    styles: ["romantic"],
  },

  {
    id: 10,
       category: "pendants",
       image:  pendant ,
       title: "Elegant Bow Pendant Set",
       description: "Delicate bow-inspired pendant necklace with matching earrings, beautifully finished with sparkling stones for a graceful look.",
       price: "₹7,999",
    styles: ["classic"],
  },

  {
    id: 11,
       category: "pendants",
       image: pen1,
       title: "Flower Pendant set",
       description: "Modern geometric flower sterling silver pendant paired with matching earrings. A sophisticated design suitable for both western and ethnic outfits.",
       price: "₹6,499",
    styles: ["classic", "gothic"],
  },
];

const styleInfo = {
  minimal: {
    title: "Lunar Minimalist",
    description:
      "You love refined pieces that feel effortless, elegant and timeless.",
  },

  gothic: {
    title: "Gothic Muse",
    description:
      "Bold, mysterious and unapologetic. You are drawn to jewellery with character.",
  },

  romantic: {
    title: "Romantic Noir",
    description:
      "You gravitate towards delicate details, feminine shapes and dreamy elegance.",
  },

  classic: {
    title: "Timeless Icon",
    description:
      "You appreciate sophisticated jewellery that feels luxurious and forever relevant.",
  },
};

export default function Style() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    minimal: 0,
    gothic: 0,
    romantic: 0,
    classic: 0,
  });

  const [result, setResult] = useState(null);

  const handleAnswer = (style) => {
    const newScores = {
      ...scores,
      [style]: scores[style] + 1,
    };

    setScores(newScores);

    if (currentQuestion === questions.length - 1) {
      const winner = Object.keys(newScores).reduce((a, b) =>
        newScores[a] >= newScores[b] ? a : b
      );

      setResult(winner);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const recommendedProducts = result
    ? necklaces.filter((product) =>
        product.styles.includes(result)
      )
    : [];

  return (
    <div className="min-h-screen bg-[#0B0908] text-white">

      {/* ================= HERO ================= */}

      {!started && !result && (
        <section className="min-h-screen flex items-center justify-center text-center px-5">

          <div className="max-w-3xl">

            <p className="text-[#C89B3C] tracking-[6px] text-xs sm:text-sm mb-6">
              LUSTRE & ASH
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif">
              FIND YOUR
              <br />
              STYLE
            </h1>

            <p className="text-gray-400 mt-6 text-sm sm:text-base max-w-xl mx-auto leading-7">
              Discover the jewellery that matches your
              personality, your vibe and your story.
            </p>

            <button
              onClick={() => setStarted(true)}
              className="
                mt-10
                px-10
                py-4
                border
                border-[#C89B3C]
                text-[#C89B3C]
                tracking-[3px]
                text-sm
                hover:bg-[#C89B3C]
                hover:text-black
                transition
              "
            >
              GET STARTED
            </button>

          </div>

        </section>
      )}


      {/* ================= QUIZ ================= */}

      {started && !result && (
        <section className="min-h-screen py-20 px-5">

          <div className="max-w-5xl mx-auto">

            {/* Progress */}
            <div className="flex justify-center items-center gap-3 mb-14">

              {questions.map((_, index) => (
                <React.Fragment key={index}>

                  <div
                    className={`
                      w-9 h-9 rounded-full
                      border
                      flex items-center justify-center
                      text-sm
                      ${
                        index <= currentQuestion
                          ? "border-[#C89B3C] text-[#C89B3C]"
                          : "border-gray-700 text-gray-600"
                      }
                    `}
                  >
                    {index + 1}
                  </div>

                  {index !== questions.length - 1 && (
                    <div className="w-12 h-[1px] bg-gray-700"></div>
                  )}

                </React.Fragment>
              ))}

            </div>


            {/* Question */}
            <p className="text-center text-[#C89B3C] tracking-[4px] text-xs">
              QUESTION {currentQuestion + 1} OF 3
            </p>

            <h2 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-serif
              text-center
              mt-5
            ">
              {questions[currentQuestion].question}
            </h2>


            {/* Options */}
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              mt-12
              max-w-3xl
              mx-auto
            ">

              {questions[currentQuestion].options.map((option) => (

                <button
                  key={option.text}
                  onClick={() => handleAnswer(option.style)}
                  className="
                    min-h-[110px]
                    border
                    border-[#5A4931]
                    px-6
                    py-8
                    text-lg
                    font-serif
                    hover:border-[#C89B3C]
                    hover:bg-[#160F0B]
                    hover:text-[#C89B3C]
                    transition
                  "
                >
                  {option.text}
                </button>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* ================= RESULT + PRODUCTS ================= */}

      {result && (
        <section className="py-20 px-5">

          <div className="max-w-7xl mx-auto">

            {/* Result */}
            <div className="text-center mb-16">

              <p className="text-[#C89B3C] tracking-[5px] text-sm">
                YOUR STYLE IS
              </p>

              <h1 className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                font-serif
                mt-4
              ">
                {styleInfo[result].title}
              </h1>

              <p className="
                text-gray-400
                max-w-xl
                mx-auto
                mt-6
                leading-7
              ">
                {styleInfo[result].description}
              </p>

            </div>


            {/* Recommended Products */}

            <div>

              <h2 className="
                text-center
                text-[#C89B3C]
                tracking-[4px]
                text-sm
                mb-10
              ">
                RECOMMENDED FOR YOU
              </h2>


              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-6
              ">

                {recommendedProducts.map((product) => (

                  <div
                    key={product.id}
                    className="
                      group
                      bg-[#12100E]
                      border
                      border-[#3E3325]
                      overflow-hidden
                      hover:border-[#C89B3C]
                      transition
                    "
                  >

                    {/* Product Image */}
                    <div className="overflow-hidden">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          w-full
                          h-[320px]
                          object-cover
                          group-hover:scale-105
                          transition
                          duration-500
                        "
                      />

                    </div>


                    {/* Product Info */}
                    <div className="p-5">

                      <h3 className="text-lg font-serif">
                        {product.name}
                      </h3>

                      <p className="text-[#C89B3C] mt-2">
                        {product.price}
                      </p>

                      <button
                        className="
                          mt-5
                          text-xs
                          tracking-[2px]
                          text-gray-400
                          hover:text-[#C89B3C]
                          transition
                        "
                      >
                        VIEW PRODUCT →
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Shop Button */}

            <div className="flex justify-center mt-14">

              <button
                onClick={() => {
                  setStarted(false);
                  setResult(null);
                  setCurrentQuestion(0);
                  setScores({
                    minimal: 0,
                    gothic: 0,
                    romantic: 0,
                    classic: 0,
                  });
                }}
                className="
                  border
                  border-[#C89B3C]
                  px-8
                  py-4
                  text-[#C89B3C]
                  text-sm
                  tracking-[2px]
                  hover:bg-[#C89B3C]
                  hover:text-black
                  transition
                "
              >
                TAKE QUIZ AGAIN
              </button>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}