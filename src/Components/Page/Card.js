import React from 'react';
import { RiComputerLine } from 'react-icons/ri';

const Card = () => {
    return (
      <div className='bg-white-[#ffffff] py-14 w-full '>
         <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4  px-10 py-14'>
                <div className='border border-1  hover:bg-[#343434] hover:text-white duration-1000	 '>
                <RiComputerLine className='mx-auto text-8xl py-3 text-blue-600 '></RiComputerLine>
                <h2 className='fond-bold text-center text-3xl my-2 font-semibold'>Web Design</h2>
                <p className='text-center text-1xl my-4 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.</p>
               
                <div className='py-2'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
                </div> 
                <div className='border border-1 hover:bg-[#343434] hover:text-white duration-1000	 '>
                <RiComputerLine className='mx-auto text-8xl py-3 text-blue-600 '></RiComputerLine>
                <h2 className='fond-bold text-center text-3xl my-2 font-semibold'>Web Design</h2>
                <p className='text-center text-1xl my-4 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.</p>
               
                <div className='py-2'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
                </div> 
                <div className='border border-1  hover:bg-[#343434] hover:text-white duration-1000	 '>
                <RiComputerLine className='mx-auto text-8xl py-3 text-blue-600 '></RiComputerLine>
                <h2 className='fond-bold text-center text-3xl my-2 font-semibold'>Web Design</h2>
                <p className='text-center text-1xl my-4 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.</p>
               
                <div className='py-2'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
                </div> 
                <div className='border border-1 hover:bg-[#343434] hover:text-white duration-1000	 '>
                <RiComputerLine className='mx-auto text-8xl py-3 text-blue-600 '></RiComputerLine>
                <h2 className='fond-bold text-center text-3xl my-2 font-semibold'>Web Design</h2>
                <p className='text-center text-1xl my-4 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.</p>
               
                <div className='py-2'>
               <button className='border border-1 border-gray-600  p-2 rounded-3xl mx-auto block text-sm w-60 hover:border-teal-700 hover:border-3 '>View Services</button>
               </div>
                </div> 
                
          </div> 
      </div>
    );
}; 

export default Card;