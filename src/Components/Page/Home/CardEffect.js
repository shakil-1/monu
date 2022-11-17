import React from "react";
import t1 from "../../../img/t-1.png";
import t2 from "../../../img/t-2.png";
import t3 from "../../../img/t-3.png";
import t4 from "../../../img/t-4.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
const CardEffect = () => {
  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex ">
        <div className="relative ">
          <img src={t1} className="w-full " alt="" />
          <div class="absolute scale-105 duration-700 lg:top-6  top-14 lg:left-6 left-14 w-[280px] md:w-[285px] mx-auto h-[280px] md:h-[290px] bg-[#fbfbfb] overflow-hidden flex justify-center items-center opacity-0  hover:opacity-70">
            <div class="flex-row text-center">
              <h1 class="text-gray-500 font-bold text-lg">Shakil Ahamed</h1>
              <p class="text-gray-500 font-medium text-sm">creative builder</p>
              <div className="flex text-gray-700 gap-4 py-4 justify-center ">
                <AiOutlineTwitter></AiOutlineTwitter>
                <BsFacebook></BsFacebook>
                <FaInstagramSquare></FaInstagramSquare>
                <AiFillLinkedin></AiFillLinkedin>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <img src={t2} className="w-full " alt="" />
          <div class="absolute scale-105 duration-700 lg:top-6  top-14 lg:left-6 left-14 w-[280px] md:w-[285px] mx-auto h-[280px] md:h-[290px] bg-[#fbfbfb] overflow-hidden flex justify-center items-center opacity-0  hover:opacity-70">
            <div class="flex-row text-center">
              <h1 class="text-gray-500 font-bold text-lg">Naimur Rahman</h1>
              <p class="text-gray-500 font-medium text-sm">creative builder</p>
              <div className="flex text-gray-700 gap-4 py-4 justify-center ">
                <AiOutlineTwitter></AiOutlineTwitter>
                <BsFacebook></BsFacebook>
                <FaInstagramSquare></FaInstagramSquare>
                <AiFillLinkedin></AiFillLinkedin>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative ">
          <img src={t3} className="w-full " alt="" />
          <div class="absolute scale-105 duration-700 lg:top-6  top-14 lg:left-6 left-14 w-[280px] md:w-[285px] mx-auto h-[280px] md:h-[290px] bg-[#fbfbfb] overflow-hidden flex justify-center items-center opacity-0  hover:opacity-70">
            <div class="flex-row text-center">
              <h1 class="text-gray-500 font-bold text-lg">Najir Ahamed</h1>
              <p class="text-gray-500 font-medium text-sm">creative builder</p>
              <div className="flex text-gray-700 gap-4 py-4 justify-center ">
                <AiOutlineTwitter></AiOutlineTwitter>
                <BsFacebook></BsFacebook>
                <FaInstagramSquare></FaInstagramSquare>
                <AiFillLinkedin></AiFillLinkedin>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <img src={t4} className="w-full " alt="" />
          <div class="absolute scale-105 duration-700 lg:top-6  top-14 lg:left-6 left-14 w-[280px] md:w-[285px] mx-auto h-[280px] md:h-[290px] bg-[#fbfbfb] overflow-hidden flex justify-center items-center opacity-0  hover:opacity-70">
            <div class="flex-row text-center">
              <h1 class="text-gray-500 font-bold text-lg">Soyab Ahamed</h1>
              <p class="text-gray-500 font-medium text-sm">creative builder</p>
              <div className="flex text-gray-700 gap-4 py-4 justify-center ">
                <AiOutlineTwitter></AiOutlineTwitter>
                <BsFacebook></BsFacebook>
                <FaInstagramSquare></FaInstagramSquare>
                <AiFillLinkedin></AiFillLinkedin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEffect;
