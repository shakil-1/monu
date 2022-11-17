import React from "react";
import w1 from '../../../img/w-1.png';
import w2 from '../../../img/w-2.png';
import w3 from '../../../img/w-3.png';

const CardSection = () => {
  return (
    <div className=" bg-white py-14">
        <h1 className="text-center text-3xl font-bold text-gray-600">Our pricing</h1>
        <p className="text-center md:text-1xl lg:text-1xl  py-10 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="grid sm:grid-cols-1 md:grid-cold-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 px-14  ">
        <div class="">
          <figure>
            <img src={w1} alt="Shoes" />
          </figure>
         <div>
             
         <h1 className="text-3xl font-600">How to Improve Your Sales Volume</h1>
         <div className="py-2 text-1xl">07 MAY <hr className="w-12"></hr></div>

         <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.Lorem ipsum dolor sit amet.</p>
         </div>
         <div className='py-5'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
         </div>
        </div>
        <div class="">
          <figure>
            <img src={w2} alt="Shoes" />
          </figure>
         <div>
             
         <h1 className="text-3xl font-600">How to Improve Your Sales Volume</h1>
         <div className="py-2 text-1xl">07 MAY <hr className="w-12"></hr></div>

         <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.Lorem ipsum dolor sit amet.</p>
         </div>
         <div className='py-5'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
         </div>
        </div>
        <div class="">
          <figure>
            <img src={w3} alt="Shoes" />
          </figure>
         <div>
             
         <h1 className="text-3xl font-600">How to Improve Your Sales Volume</h1>
         <div className="py-2 text-1xl">07 MAY <hr className="w-12"></hr></div>

         <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.Lorem ipsum dolor sit amet.</p>
         </div>
         <div className='py-5'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
