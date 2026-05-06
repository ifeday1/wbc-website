import React from 'react';
import Navbar from '../components/Navbar';


const Winners_fc = () => {
  return (
    <>
      <Navbar />

      <div className='flex flex-wrap justify-center items-center gap-10 pt-44 pb-24 bg-darkblue rounded-b-3xl'>
        <div className='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <div className=' flex flex-row text-center justify-center md:text-left md:justify-start'>
            <p className='text-lg mb-8 px-8 bg-white rounded-xl'>Winners FC</p>
          </div>
          <h2 className='text-3xl font-bold mb-4 text-center text-white md:text-left'>
            Reaching out to<br></br> Lives through Football
          </h2>
        </div>

        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src="/winnfc.webp" alt="Your " className='w-[600px] h-auto' />
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src="/win1.webp" alt="Your " className='max-w-full h-auto' />
        </div>
        <div className='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p className='text-lg mb-4'>
            Winners Football Club is a prominent Evangelism arm of Winners
            Baptist Church, part of the Winners Community Group. The major
            objective of the club is to engage young and adult guys by offering
            a platform based on Christ-centered beliefs. Beyond the confines of
            the football pitch, the club's aim goes beyond traditional sporting
            goals.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div className='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p className='text-lg mb-4'>
             Winners Football Club uses athletics to cultivate athletic talent
             while also serving as a beacon of hope and mentorship. The group
             aims to shape individual into responsible, ethical, and resilient
             members of society by combining sportsmanship with spiritual
             direction. The club&apos;s commitment to diversity and emphasis on
             character development through the lens of faith make it an important
             component of the community, encouraging unity, positive
             transformation, and a brighter future for its members.
          </p>
        </div>
        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src="/win2.webp" alt="Your " className='max-w-full h-auto' />
        </div>
      </div>

      <div>
        <h1 className='  text-4xl font-bold text-darkblue text-center mt-14 '>
          Picture excerpts from our training session
        </h1>
     

        <div className='flex flex-wrap justify-center mt-14 mb-10'>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src="/Wcar.webp" alt="carol" />
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src="/Wcar1.webp" alt="carol" />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src="/Wcar2.webp" alt="carol" />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src="/Wcar3.webp" alt="carol" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Winners_fc;
