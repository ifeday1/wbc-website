import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import Slider1 from '../assests/Slide1.jpg';
import Slider2 from '../assests/Slide2.svg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set the speed (in milliseconds) for auto-sliding
  };

  return (
    <Slider {...settings} className='carousel-container'>
      <div className='carousel-slide'>
        <img src={Slider1} alt='Slide 1' />
        <div className='carousel-text'>
          <h3>WELCOME TO CHURCH</h3>
          <p>Your text here...</p>
        </div>
      </div>
      <div className='carousel-slide'>
        <img src={Slider1} alt='Slide 2' />
        <div className='carousel-text'>
          <h3>Slide 2</h3>
          <p>Your text here...</p>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
