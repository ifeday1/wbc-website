import React from 'react';
import Teens from '../assests/Teens.svg';

const Location = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row pt-10 justify-around p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h5 class='text-lg font-bold text-blue'>Our Meeting</h5>
          <h2 class='text-5xl font-bold text-black mb-10'>Location</h2>
          <h5 class='text-lg font-bold text-blue'>
            WINNERS BAPTIST CHURCH<br></br> (Miracle Square)
          </h5>
          <p class='mt-2 text-left mb-7'>
            5, Adebayo Adekoya street New<br></br> Garage, Bariga, Lagos
          </p>
          <a
            href='https://www.google.com/maps/place/Winners+Baptist+Church+(Miracle+Square)/@6.5474605,3.3911729,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8d31dbe5a22f:0xe8057f7d3f4dc808!8m2!3d6.5474605!4d3.3937478!16s%2Fg%2F11gmbpxwxz?hl=en&entry=ttu'
            class='bg-blue hover:bg-green text-white font-medium py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-md'
          >
            View on Map
          </a>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
    </>
  );
};

export default Location;
