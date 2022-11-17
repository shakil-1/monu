import React from 'react';
import logo1 from '../../../img/logo-1.png';
import logo2 from '../../../img/logo-2.png';
import logo3 from '../../../img/logo-3.png';
import logo4 from '../../../img/logo-4.png';
import logo5 from '../../../img/logo-5.png';
import Slider from "react-slick";

const ImgSlider = () => {
    const settings = {
        infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    }
    return (
        <div className=' bg-white'>
        <Slider className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5  py-14  mx-auto' {...settings}>
        <div>
            <img className="mx-auto" src={logo1} alt=""/>
           </div>
           <div >
            <img className="mx-auto" src={logo2} alt=""/>
           </div>
           <div >
            <img className="mx-auto" src={logo3} alt=""/>
           </div>
           <div>
            <img className="mx-auto" src={logo4} alt=""/>
           </div>
           <div>
            <img className="mx-auto" src={logo5} alt=""/>
           </div>
           <div>
            <img className="mx-auto" src={logo1} alt=""/>
           </div>
        </Slider>
            </div>
      
    );
};

export default ImgSlider;