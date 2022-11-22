import React from "react";
import laptop from "../../../img/laptop.png";
import { HiPencilAlt } from "react-icons/hi";
const About = () => {
  
  return (
    <div className="pt-40 relative">
      <div className="absolute  left-0  md:bottom-[500px] lg:bottom-[500px] xl:bottom-[570px]   w-full">
        <div className="bg-[#6a74fc] w-11/12   rounded-xl py-3  mx-auto ">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
            <div className="text-center mx-auto sm:border-r-none lg:border-r-[1px]  border-gray-400 p-5 text-white">
              <HiPencilAlt className="mx-auto text-6xl p-1"></HiPencilAlt>
              <h2 className="text-3xl font-bold py-6">Flexible Solutions</h2>
              <p className="text-xl ">
                Lorem ipsum dolor sit amet, con sectetuer adipiscing elitLorem
                ipsum dolor
              </p>
            </div>
            <div className="text-center mx-auto border-r-[1px] border-gray-400 p-5 text-white">
              <HiPencilAlt className="mx-auto text-6xl p-1"></HiPencilAlt>
              <h2 className="text-3xl font-bold py-6">Flexible Solutions</h2>
              <p className="text-xl ">
                Lorem ipsum dolor sit amet, con sectetuer adipiscing elitLorem
                ipsum dolor
              </p>
            </div>
            <div className="text-center mx-auto p-5 text-white">
              <HiPencilAlt className="mx-auto text-6xl p-1  "></HiPencilAlt>
              <h2 className="text-3xl font-bold py-6">Flexible Solutions</h2>
              <p className="text-xl ">
                Lorem ipsum dolor sit amet, con sectetuer adipiscing elitLorem
                ipsum dolor
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container bg-white-500 my-14">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  px-10">
          <div className=" flex justify-center items-center ">
            <div>
              <h1 className="text-4xl font-bold text-gray-600 ">
                We are the leader in Wordpress Theme
              </h1>
              <hr className="w-10"></hr>
              <p className="leading-[35px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit,
              </p>
              <div className="py-2">
                <button className="border border-1 border-gray-700  p-2 rounded-3xl  text-sm w-60 hover:border-teal-700 hover:border-3 ">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src={laptop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
