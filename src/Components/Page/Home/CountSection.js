import React from "react";
import CountUp from "react-countup";
import { MdGroups } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { BsFillCalendarDateFill } from "react-icons/bs";
const CountSection = () => {
  return (
    <div className="bg-[#505cfd] py-14">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  gap-5">
        <div className=" text-white">
          <MdGroups className="text-5xl mx-auto font-700"></MdGroups>
          <h2 className="text-4xl text-center">
            {" "}
            <CountUp start={0} end={15250} duration={2} />
          </h2>
          <p className="text-center">Happy Customers</p>
        </div>
        <div className=" text-white">
          <FaAddressCard className="text-5xl mx-auto font-700"></FaAddressCard>
          <h2 className="text-4xl text-center">
            {" "}
            <CountUp start={0} end={9720} duration={2} />
          </h2>
          <p className="text-center">Running Design</p>
        </div>
        <div className=" text-white">
          <GiCoffeeCup className="text-5xl mx-auto font-700"></GiCoffeeCup>
          <h2 className="text-4xl text-center">
            {" "}
            <CountUp start={0} end={52300} duration={2} />
          </h2>
          <p className="text-center">Coffe cups</p>
        </div>
        <div className=" text-white">
          <BsFillCalendarDateFill className="text-4xl mx-auto font-700"></BsFillCalendarDateFill>
          <h2 className="text-4xl text-center">
            {" "}
            <CountUp start={0} end={35000} duration={2} />
          </h2>
          <p className="text-center">Complete Project</p>
        </div>
      </div>
    </div>
  );
};

export default CountSection;
