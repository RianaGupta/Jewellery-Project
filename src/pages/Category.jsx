import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Category() {

  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#350505] via-[#220303] to-[#050505] py-20">

      <h1 className="text-5xl text-center text-[#D4AF37] font-['Gelasio'] capitalize">
        {category}
      </h1>

      <p className="text-center text-gray-400 mt-3 mb-10">
        Explore our premium {category} collection.
      </p>

      <div className="w-[90%] mx-auto flex flex-wrap justify-evenly gap-y-10">

        {filteredProducts.map((product) => (

          <Card
            key={product.id}
            img={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />

        ))}

      </div>

    </section>
  );
}

function Card(props) {
  return (
    <div className="flex flex-col bg-neutral-900/40 w-full sm:w-[48%] lg:w-[23%] rounded-[15px] overflow-hidden border border-gray-700 hover:border-red-700 hover:shadow-[0_8px_20px_rgba(127,29,29,0.6)] duration-300">

      <img
        src={props.img}
        className="h-[40vh] object-cover"
      />

      <h2 className="text-white text-xl m-3">
        {props.title}
      </h2>

      <p className="text-gray-400 text-sm mx-3">
        {props.description}
      </p>

      <div className="flex justify-between mx-3 mt-4">
        <span className="text-gray-500">
          Price
        </span>

        <span className="text-white">
          {props.price}
        </span>
      </div>

      <button className="m-3 border border-gray-500 rounded-lg p-2 text-white hover:border-red-700 hover:text-red-500 duration-300">
        View Details
      </button>

    </div>
  );
}