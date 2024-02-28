import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../assests/Link.svg';
import Sola from '../assests/s.png';
import Ore from '../assests/o.png';

const Wbc_careers = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-center items-center pt-44 pb-24 bg-yellow rounded-b-3xl'>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p class='text-lg mb-8 bg-white rounded-lg pl-8 '>
            Winners BC Careers
          </p>
          <h2 class='text-3xl font-bold mb-4 text-center text-darkblue md:text-left'>
            Empowering Professional
            <br></br>Advancement
          </h2>
          <p class='text-lg mb-8 pl-8 bg-white rounded-xl'>
            <img src={Icon} />
            4k+ <br></br> followers online
          </p>
        </div>

        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Icon} alt='Your Image' class='max-w-full h-auto' />
        </div>
      </div>

      <div class='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Sola} alt='Your Image' class='max-w-full h-auto' />
        </div>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p class='text-lg mb-4'>
            Winners BC Career has rapidly evolved into a robust and influential
            platform dedicated to fostering the career growth of individuals
            across diverse spheres.
          </p>
        </div>
      </div>
      <div class='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p class='text-lg mb-4'>
            The platform's cornerstone lies in its meticulously curated
            quarterly training sessions and seminars. These events are
            meticulously crafted to harness the expertise of industry leaders,
            providing attendees with unparalleled access to cutting-edge
            insights, trends, and strategies within their respective fields.
          </p>
        </div>
        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Ore} alt='Your Image' class='max-w-full h-auto' />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wbc_careers;
