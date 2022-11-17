import React from "react";

const CardPricing = () => {
  return (
    <div className="bg-[#e7e8fe] py-14 w-full mx-auto ">
      <div>
        <h1 className="text-center text-2xl  py-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  px-10  ">
      <div className="border border-1 border-gray-300  text-center ">
          <h1 className="text-4xl p-4 font-semibold text-gray-600">Basics</h1>
          <hr className="border-gray-300"></hr>
          <span className="text-blue-500">
            <sup className="font-bold text-[20px]">$</sup>{" "}
            <sub className="text-4xl font-bold">100</sub>
          </span>

          <div className="py-5">
            <li className="list-none  leading-10 text-gray-500">PSD Included</li>
            <li className="list-none  leading-10 text-gray-500">Free Installation</li>
            <li className="list-none  leading-10 text-gray-500">Free One Year Domain</li>
            <li className="list-none  leading-10 text-gray-500">Free Six Months Hosting</li>
            <li className="list-none  leading-10 text-gray-500">Full Support</li>
          </div>
          <div className='py-2'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
        </div>
        <div className="border border-1 border-gray-300 bg-white shadow-2xl  shadow-slate-400  text-center ">
          <h1 className="text-4xl p-4 font-semibold text-gray-600">Advanced</h1>
          <hr className="border-gray-300"></hr>
          <span className="text-blue-500">
            <sup className="font-bold text-[20px]">$</sup>{" "}
            <sub className="text-4xl font-bold">200</sub>
          </span>

          <div className="py-5">
            <li className="list-none  leading-10 text-gray-500">PSD Included</li>
            <li className="list-none  leading-10 text-gray-500">Free Installation</li>
            <li className="list-none  leading-10 text-gray-500">Free One Year Domain</li>
            <li className="list-none  leading-10 text-gray-500">Free Six Months Hosting</li>
            <li className="list-none  leading-10 text-gray-500">Full Support</li>
          </div>
          <div className='py-2'>
               <button className='border border-1 border-gray-600 bg-blue-500 text-white p-2 rounded-3xl mx-auto block w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
        </div>
        <div className="border border-1 border-gray-300  text-center ">
          <h1 className="text-4xl p-4 font-semibold text-gray-600">Pro</h1>
          <hr className="border-gray-300"></hr>
          <span className="text-blue-500">
            <sup className="font-bold text-[20px]">$</sup>{" "}
            <sub className="text-4xl font-bold">300</sub>
          </span>

          <div className="py-5">
            <li className="list-none  leading-10 text-gray-500">PSD Included</li>
            <li className="list-none  leading-10 text-gray-500">Free Installation</li>
            <li className="list-none  leading-10 text-gray-500">Free One Year Domain</li>
            <li className="list-none  leading-10 text-gray-500">Free Six Months Hosting</li>
            <li className="list-none  leading-10 text-gray-500">Full Support</li>
          </div>
          <div className='py-2'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
        </div>
      </div>
    </div>
  );
};

export default CardPricing;
