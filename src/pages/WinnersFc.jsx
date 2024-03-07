import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Winfc from '../assests/winnfc.png';
import Win1 from '../assests/win1.png';
import Win2 from '../assests/win2.png';
import Wcar from '../assests/Wcar.png';
import Wcar1 from '../assests/Wcar1.png';
import Wcar2 from '../assests/Wcar2.png';
import Wcar3 from '../assests//Wcar3.png';

const Winners_fc = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-center items-center gap-10 pt-44 pb-24 bg-darkblue rounded-b-3xl'>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <div className=' flex flex-row text-center justify-center md:text-left md:justify-start'>
            <p class='text-lg mb-8 px-8 bg-white rounded-xl'>Winners FC</p>
          </div>
          <h2 class='text-3xl font-bold mb-4 text-center text-white md:text-left'>
            Reaching out to<br></br> Lives through Football
          </h2>
        </div>

        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Winfc} alt='Your ' class='w-[6   000px] h-auto' />
        </div>
      </div>

      <div class='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Win1} alt='Your ' class='max-w-full h-auto' />
        </div>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p class='text-lg mb-4'>
            Winners Football Club is a prominent Evangelism arm of Winners
            Baptist Church, part of the Winners Community Group. The major
            objective of the club is to engage young and adult guys by offering
            a platform based on Christ-centered beliefs. Beyond the confines of
            the football pitch, the club's aim goes beyond traditional sporting
            goals.
          </p>
        </div>
      </div>
      <div class='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p class='text-lg mb-4'>
            Winners Football Club uses athletics to cultivate athletic talent
            while also serving as a beacon of hope and mentorship. The group
            aims to shape students into responsible, ethical, and resilient
            members of society by combining sportsmanship with spiritual
            direction. The club's commitment to diversity and emphasis on
            character development through the lens of faith make it an important
            component of the community, encouraging unity, positive
            transformation, and a brighter future for its members.
          </p>
        </div>
        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Win2} alt='Your ' class='max-w-full h-auto' />
        </div>
      </div>

      <div>
        <h1 className='  text-4xl font-bold text-darkblue text-center mt-14 '>
          Picture excerpts from our training session
        </h1>
        <p className='text-gray-600 text-center text-[10px] md:text-[15px]'>
          A recruiting event in which employers and recruiters meet with
          <br></br>
          potential employees and where job seekers find more about job
          openings.
        </p>

        <div class='flex flex-wrap justify-center mt-14 mb-10'>
          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src={Wcar} alt='carol' />
          </div>

          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src={Wcar1} alt='carol' />
          </div>
          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src={Wcar2} alt='carol' />
          </div>
          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <img src={Wcar3} alt='carol' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Winners_fc;
