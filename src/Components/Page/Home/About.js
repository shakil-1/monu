import React from "react";
import laptop from "../../../img/laptop.png";

const About = () => {
  return (
    <div>
      <div className="container bg-white-500">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  px-10">
          <div className=" flex justify-center items-center ">
            <div>
            <h1 className="text-4xl font-bold text-gray-600 my-3">We are the leader in Wordpress Theme</h1>
            <hr className="w-10"></hr>
            <p className="leading-[35px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit,
            </p>
            <button className="btn my-3">Read More</button>
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
