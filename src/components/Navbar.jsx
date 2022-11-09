import React, { useState } from "react";
import imglogo from "../assets/logo.svg";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  const [logo, setLogo] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 mt-4 absolute z-10">
      <div>
        <img
          onClick={handleNav}
          className={logo ? "hidden" : "block"}
          src={imglogo}
          alt=""
        />
      </div>
      <ul className="hidden md:flex justify-center items-center text-white">
        <li>Home</li>
        <li>Destinos</li>
        <li>Viagens</li>
        <li>Galeria</li>
        <li>Contato</li>
      </ul>
      <div className="hidden md:flex text-white">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>

      {/* hamburger */}
      <div onClick={handleNav} className="md:hidden z-10 text-white">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py7 flex flex-col"
            : "absolute left-[100%]"
        }
      >
        <ul>
          <li className="border-b">Home</li>
          <li className="border-b">Destinos</li>
          <li className="border-b">Viagens</li>
          <li className="border-b">Galeria</li>
          <li className="border-b">Contato</li>
          <div className="flex flex-col">
            <button className="my-6">Pesquisar</button>
            <button>Login</button>
          </div>
          <div className="flex justify-around my-6">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <SiGmail className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
