import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>Viagem para você</h1>
          <div className="flex justify-around w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <SiGmail className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
