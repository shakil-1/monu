import React from "react";
import banerSliderImg from "../../img/slider-bg.png";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Navbar from "../Share/Navbar";
import Slider from "react-slick";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  const SingleSlide = () => (
    <div
      style={{ backgroundImage: `url(${banerSliderImg})` }}
      className="  bg-cover bg-no-repeat  w-full flex items-center justify-center h-screen"
    >
      <div className="text-center">
        <div className="flex gap-2 text-green-500 justify-center mt-28 ">
          <BsTwitter></BsTwitter>
          <BsFacebook></BsFacebook>
          <AiFillInstagram></AiFillInstagram>
          <AiFillLinkedin></AiFillLinkedin>
        </div>

        <h2 className="text-7xl font-bold  leading-tight text-gray-600	 ">
          We Are Monu <br /> Creative Agency
        </h2>
        <p className="text-2xl my-2">
          Utilities for controlling an element's margin.
        </p>
        <div className="py-8">
          <button className="border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 ">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Navbar></Navbar>

      <Slider className="overflow-hidden" {...settings}>
        <SingleSlide></SingleSlide>
        <SingleSlide></SingleSlide>
      </Slider>
    </div>
  );
};

export default Banner;
