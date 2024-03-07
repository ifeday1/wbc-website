import React, { useEffect, useState } from 'react';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import Slider from 'react-slick';

import Slider1 from '../assests/Slide1.jpg';
// import Slider2 from '../assests/Building.jpg';
import Slider3 from '../assests/slide3.jpg';
import Slider4 from '../assests/slide4.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <>
      <Slider {...settings} className='carousel-container'>
        <div className='carousel-slide'>
          <img src={Slider1} alt='Slide 1' />
          <div className='carousel-text'>
            <h3>WELCOME TO CHURCH</h3>
            <p>
              Bringing souls to the heart of Christ, walking in faith guided by
              his light.<br></br> A body of Christ with Jesus as the head.
            </p>
          </div>
        </div>
        <div className='carousel-slide'>
          <img src={Slider4} alt='church building' />
          <div className='carousel-text'>
            {/* <h3>TRUST IN GOD</h3>
            <p>Don’t let your hearts be troubled</p> */}
          </div>
        </div>
        <div className='carousel-slide'>
          <img src={Slider3} alt='church building' />
          <div className='carousel-text'>
            <h3>THE WINNING FAMILY </h3>
            <p>
              Worshipping God with joy in our hearts because, in the presence of
              God, there is fullness of joy.
            </p>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </>
  );
};

export default Carousel;
