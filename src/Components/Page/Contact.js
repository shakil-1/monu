import React from "react";
import bennerImg from '../../img/benner-bg.png' 

const Contact = () => {
  return (
    <div className="w-full bg-no-repeat " style={{backgroundImage: `url(${bennerImg})`}}>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div className="">
          <h2 className="text-center text-4xl font-bold">Are you ready to be success with us?</h2>
          <h4 className="text-center text-2xl my-2">Tell us about your story and your project.</h4>
          <div className="flex gap-4 justify-center items-center py-5">
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
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
