import React from "react";
import banerSliderImg from "../../img/slider-bg.png";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Navbar from '../Share/Navbar'
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banerSliderImg})` }}
      className=" h-screen bg-cover bg-no-repeat w-full"
    >
       <Navbar></Navbar>
      <div className=" h-screen flex justify-center items-center  ">
        <div>
          <div className="flex gap-2 text-green-500 justify-center ">
            <BsTwitter></BsTwitter>
            <BsFacebook></BsFacebook>
            <AiFillInstagram></AiFillInstagram>
            <AiFillLinkedin></AiFillLinkedin>
          </div>
          <div className="text-center align-middle  my-3 justify-center ">
            <h2 className="text-7xl font-bold  leading-tight text-gray-600	 ">
              We Are Monu <br /> Creative Agency
            </h2>
            <p className="text-2xl my-2">Utilities for controlling an element's margin.</p>
            <div className="">
              <button className="border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 ">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
