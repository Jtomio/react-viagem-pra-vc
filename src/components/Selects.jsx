import React from "react";

import Serrano1 from "../assets/wish-Serrano.jpg";
import Foz1 from "../assets/wish-Foz1.jpg";
import Natal1 from "../assets/wish-Natal1.jpg";
import Bahia1 from "../assets/wish-Bahia1.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={Serrano1} text="Wish Serrano - RS" />
      <SelectsCard bg={Foz1} text="Wish Foz - PR" />
      <SelectsCard bg={Natal1} text="Wish Natal - RN" />
      <SelectsCard bg={Bahia1} text="Wish Salvador - BA" />
    </div>
  );
};

export default Selects;
