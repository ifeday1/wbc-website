import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../assests/Link.svg';
import Sola from '../assests/s.png';
import Car from '../assests/car.png';
import Man from '../assests/m.png';

import Ore from '../assests/o.png';
import Ava from '../assests/ava.png';
import Ava1 from '../assests/ava1.png';

const Wbc_careers = () => {
  return (
    <>
      <Navbar />

      <div class='flex flex-wrap justify-center items-center gap-10 pt-44 pb-24 bg-yellow rounded-b-3xl'>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <div className=' flex flex-row text-center justify-center md:text-left md:justify-start'>
            <p class='text-lg mb-8 px-8 bg-white rounded-xl'>
              Winners BC Careers
            </p>
          </div>
          <h2 class='text-3xl font-bold mb-4 text-center text-darkblue md:text-left'>
            Empowering Professional
            <br></br>Advancement
          </h2>
          <div className=' flex flex-row text-center justify-center md:text-left md:justify-start'>
            <div>
              <img src={Icon} className=' bg-white ' />
            </div>
            <p class='text-lg mb-8 px-8 bg-white rounded-xl'>
              4k+ <br></br> followers online
            </p>
          </div>
        </div>

        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Car} alt='Your Image' class='w-[6   000px] h-auto' />
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

      <div>
        <h1 className='  text-4xl font-bold text-darkblue text-center pt-14'>
          Impact and Tangible Benefits
        </h1>
        <p className='text-gray-600 text-center text-[10px] md:text-[15px]'>
          The impact of Winners BC Career reverberates through the <br></br>
          success stories of individuals within the community
        </p>

        <div class='flex flex-wrap justify-center  mt-10'>
          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div class=' outline-orange outline outline-offset-2 outline-2 rounded-lg p-4 flex items-center justify-center w-auto h-80'>
              <div class='mx-4  text-darkblue text-center items-center'>
                <img src={Ava} className=' w-12 h-auto items-center m-auto' />
                <h4 class='text-lg font-bold pt-5'> Arab Agbaje-Salami</h4>
                <p class='mt-2 text-sm'>
                  My name is Arab Agbaje-Salami an Accountant. Winners career
                  was introduced to me through a colleague, every job posted on
                  their platform has been on point so far. I'm happy to share
                  that I just landed a new job as an Accountant with one of the
                  key players in the FMCG space in Nigeria through the jobs
                  shared on the platform.
                </p>
              </div>
            </div>
          </div>

          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div class=' outline-orange outline outline-offset-2 outline-2 rounded-lg p-4 flex items-center justify-center w-auto h-80'>
              <div class='mx-4  text-darkblue text-center items-center'>
                <img src={Ava1} className=' w-12 h-auto items-center m-auto' />
                <h4 class='text-lg font-bold pt-5'> Oluwatomisin Sodeinde</h4>
                <p class='mt-2 text-sm'>
                  My name is Tomi,I heard of winners careers from church friends
                  and joined the whatsapp group. I submitted many applications
                  which built my confidence and resilience,I kept pushing
                  because as long as there's job updates on Winners careers I'm
                  certain there's something for me. I work as an auditor
                  currently and a friend of mine got an internship opportunity
                  from here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col md:flex-row  mt-28 justify-around p-4 px-4 md:px-48 bg-ly'>
        <div class='md:w-1/2 p-4'>
          <p class='mt-2 text-left mb-7 text-dark-blue'>
            In the fast-paced landscape of professional development, Winners BC
            Career stands as a beacon of opportunity and growth. With its
            unwavering dedication to equipping individuals with the tools,
            insights, and connections essential for success, the platform
            continues to play a pivotal role in shaping and advancing careers
            across a multitude of industries.
          </p>
          <a
            href=''
            class='bg-white text-darkblue font-medium py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-md'
          >
            Join Us
          </a>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Man}
            alt='Man'
            class='w-[600px] h-[auto]  pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wbc_careers;
