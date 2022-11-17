import React from "react";
import b1 from '../../img/b-1.png';
import b2 from '../../img/b-2.png';

const Footer = () => {
  return (
    <div>
      <footer class="footer  bg-[#343434] text-gray-200 py-14 mx-auto px-14">
        <div>
          <span class="footer-title text-3xl">Contact Us</span>
          <li className="list-none">1 (800) 686-6688</li>
          <li className="list-none">info.muglidesign@gmail.com</li>
          <li className="list-none">40 Baria Sreet 133/2</li>
          <li className="list-none">NewYork City, US</li>
        </div>
        <div>
          <span class="footer-title text-3xl">Usefull Links</span>
          <li>AbHome</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Single Services</li>
          <li>Work</li>
        </div>
        <div className="py-14">
          <li>AbHome</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Single Services</li>
          <li>Work</li>
        </div>
        <div>
          <span class="footer-title text-3xl">Blog & News</span>
            <div className="flex  gap-2">
              <img className="w-1/5" src={b1} alt="" />
              <div>
                <h2 className="text-2xl text-gray-500">How to improve Your sales volume</h2>
                <h4 className="text-1xl text-gray-500">23 Aug 2018</h4>
              </div>
            </div>
            <div className="flex  gap-2">
              <img className="w-1/5" src={b2} alt="" />
              <div>
                <h2 className="text-2xl text-gray-500">How to improve Your sales volume</h2>
                <h4 className="text-1xl text-gray-500">23 Aug 2018</h4>
              </div>
            </div>

            
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t   bg-[#343434] text-base-content border-gray-700">
        <div class="items-center grid-flow-col">
         
          <p className="text-gray-500">Copyright ©2021 <span className="text-orange-500"> Shakil Ahamed</span>. All Rights Reserved</p>
        </div>
        <div class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4 text-gray-500">
            <li className="list-none	">Privacy Policy</li>
            <li className="list-none	">Contact</li>
            <li className="list-none	">Support</li>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
