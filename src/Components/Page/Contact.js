import React from "react";
import bennerImg from '../../img/benner-bg.png' 

const Contact = () => {
  return (
    <div className=" bg-no-repeat bg-cover" style={{backgroundImage: `url(${bennerImg})`}}>
      <div className="py-14">
          <h2 className="text-center text-4xl font-bold">Are you ready to be success with us?</h2>
          <h4 className="text-center text-2xl my-2">Tell us about your story and your project.</h4>


          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 flex gap-2 text-center w-9/12 mx-auto py-4">
            <input
              type="text"
              placeholder="Your Name"
              class="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email Address"
              class="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Youre Phone"
              class="input w-full max-w-xs"
            />
           <div className='py-2'>
               <button className='border border-1 bg-blue-600 p-2 rounded-3xl mx-auto text-sm w-60 text-white '>Subscribe</button>
               </div>
          </div>
       
      </div>
    </div>
  );
};

export default Contact;
