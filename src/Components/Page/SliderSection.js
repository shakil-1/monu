import React from "react";
import banner from "../../img/banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const SliderSection = () => {
  const settings = {
    dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
  };
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-no-repeat h-full py-14"
    >
      <div className="container mx-auto flex cursor-pointer">
         <div className="w-full bg-[#fbfbfb] p-5">
            <h1 className="text-center text-blue-600 text-3xl font-bold py-4">
              Theresa Rodgers
            </h1>
            <h3 className="text-center text-gray-700">Developer</h3>
            <p className="text-2xl   py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
              consectetur adipisicing.
            </p>
         </div>
      </div>
    </div>
  );
};

export default SliderSection;
