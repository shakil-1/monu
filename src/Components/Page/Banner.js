import React from "react";
import banerSliderImg from "../../img/slider-bg.png";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banerSliderImg})` }}
      className="h-screen bg-cover bg-no-repeat"
    >

      <div className="flex gap-2 text-green-500 justify-center ">
        <BsTwitter></BsTwitter>
        <BsFacebook></BsFacebook>
        <AiFillInstagram></AiFillInstagram>
        <AiFillLinkedin></AiFillLinkedin>
      </div>
      <div className="text-center align-middle  my-3 justify-center ">
        <h2 className="text-7xl font-bold  leading-tight	 ">
          We Are Monu <br /> Creative Agency
        </h2>
        <p>Utilities for controlling an element's margin.</p>
        <button className="btn m">Purchase Now</button>
      </div>
      
    </div>
  );
};

export default Banner;
