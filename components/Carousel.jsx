import React from 'react';
import Image from 'next/image';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <>
      <Slider {...settings} className='carousel-container'>
        <div className='carousel-slide'>
          <Image src='/assets/Slide1.jpg' alt='Slide 1' fill unoptimized />
          <div className='carousel-text'>
            <h3>WELCOME TO CHURCH</h3>
            <p>
              Bringing souls to the heart of Christ, walking in faith guided by
              his light.<br></br> A body of Christ with Jesus as the head.
            </p>
          </div>
        </div>
        <div className='carousel-slide'>
          <Image src='/assets/slide4.jpg' alt='church building' fill unoptimized />
          <div className='carousel-text'></div>
        </div>
        <div className='carousel-slide'>
          <Image src='/assets/slide3.jpg' alt='church building' fill unoptimized />
          <div className='carousel-text'>
            <h3>THE WINNING FAMILY </h3>
            <p>
              Worshipping God with joy in our hearts because, in the presence of
              God, there is fullness of joy.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
