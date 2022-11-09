import React from "react";

import Serrano1 from "../assets/wish-Serrano.jpg";
import Serrano2 from "../assets/wish-Serrano2.jpg";
import Foz1 from "../assets/wish-Foz1.jpg";
import Foz2 from "../assets/wish-Foz2.jpg";
import Natal1 from "../assets/wish-Natal1.jpg";
import Natal2 from "../assets/wish-Natal2.jpg";
import Bahia1 from "../assets/wish-Bahia1.jpg";
import Bahia2 from "../assets/wish-Bahia2.jpg";

const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4">
      <h1>Resorts no Brasil</h1>
      <p className="py-4">Cada destino uma emoção</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Serrano1}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={Serrano2} alt="/" />
        <img className="w-full h-full object-cover" src={Foz1} alt="/" />
        <img className="w-full h-full object-cover" src={Foz2} alt="/" />
        <img className="w-full h-full object-cover" src={Natal1} alt="/" />
        <img className="w-full h-full object-cover" src={Natal2} alt="/" />
        <img className="w-full h-full object-cover" src={Bahia1} alt="/" />
        <img className="w-full h-full object-cover" src={Bahia2} alt="/" />
      </div>
    </div>
  );
};

export default Destination;
