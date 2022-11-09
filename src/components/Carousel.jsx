import React, { useState } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0002/2.jpg",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0002/15.jpg",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0002/_dsc4354.png",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0002/39.png",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0001/1.jpg",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0001/8.jpg",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0001/18.jpg",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0004/18.jpg",
  },
  {
    url: "https://www.wishhotels.com.br/neocms/images/hotels/0004/5.jpg",
  },
];

const Carousel = () => {
  const [slide, setSlidde] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlidde(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlidde(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
