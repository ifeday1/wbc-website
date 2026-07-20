import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Winners BC Career - Winners Baptist Church',
  description: 'Empowering professional advancement - Winners BC Career fosters career growth through training, seminars, and job opportunities',
};

const Wbc_careers = () => {
  return (
    <>
      <Navbar />

      <div className='flex flex-wrap justify-center items-center gap-10 pt-44 pb-24 bg-yellow rounded-b-3xl'>
        <div className='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <div className=' flex flex-row text-center justify-center md:text-left md:justify-start'>
            <p className='text-lg mb-8 px-8 bg-white rounded-xl'>
              Winners BC Careers
            </p>
          </div>
          <h2 className='text-3xl font-bold mb-4 text-center text-darkblue md:text-left'>
            Empowering Professional
            <br></br>Advancement
          </h2>
          <div className=' flex flex-row text-center justify-center md:text-left md:justify-start'>
            <div>
              <Image src="/Link.webp" alt="Followers icon" width={40} height={40} className=' bg-white ' />
            </div>
            <p className='text-lg mb-8 px-8 bg-white rounded-xl'>
              4k+ <br></br> followers online
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <Image src="/car.webp" alt="Winners BC Careers professionals" width={1920} height={1652} className='w-[600px] h-auto' />
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <Image src="/s.webp" alt="Winners BC Career training session" width={1920} height={2150} className='max-w-full h-auto' />
        </div>
        <div className='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p className='text-lg mb-4'>
            Winners BC Career has rapidly evolved into a robust and influential
            platform dedicated to fostering the career growth of individuals
            across diverse spheres.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center pt-14 md:gap-44'>
        <div className='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <p className='text-lg mb-4'>
            The platform&apos;s cornerstone lies in its meticulously curated
            quarterly training sessions and seminars. These events are
            meticulously crafted to harness the expertise of industry leaders,
            providing attendees with unparalleled access to cutting-edge
            insights, trends, and strategies within their respective fields.
          </p>
        </div>
        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <Image src="/o.webp" alt="Winners BC Career seminar" width={1920} height={2150} className='max-w-full h-auto' />
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

        <div className='flex flex-wrap justify-center  mt-10'>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div className=' outline-orange outline outline-offset-2 outline-2 rounded-lg p-4 flex items-center justify-center w-auto h-80'>
              <div className='mx-4  text-darkblue text-center items-center'>
                <Image
                  src="/ava.webp"
                  alt="Arab Agbaje-Salami"
                  width={174}
                  height={174}
                  className=' w-12 h-auto items-center m-auto'
                />
                <h4 className='text-lg font-bold pt-5'> Arab Agbaje-Salami</h4>
                <p className='mt-2 text-sm'>
                  My name is Arab Agbaje-Salami an Accountant. Winners career
                  was introduced to me through a colleague, every job posted on
                  their platform has been on point so far. I&apos;m happy to share
                  that I just landed a new job as an Accountant with one of the
                  key players in the FMCG space in Nigeria through the jobs
                  shared on the platform.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div className=' outline-orange outline outline-offset-2 outline-2 rounded-lg p-4 flex items-center justify-center w-auto h-80'>
              <div className='mx-4  text-darkblue text-center items-center'>
                <Image
                  src="/ava1.webp"
                  alt="Oluwatomisin Sodeinde"
                  width={174}
                  height={174}
                  className=' w-12 h-auto items-center m-auto'
                />
                <h4 className='text-lg font-bold pt-5'> Oluwatomisin Sodeinde</h4>
                <p className='mt-2 text-sm'>
                  My name is Tomi,I heard of winners careers from church friends
                  and joined the whatsapp group. I submitted many applications
                  which built my confidence and resilience,I kept pushing
                  because as long as there&apos;s job updates on Winners careers I&apos;m
                  certain there&apos;s something for me. I work as an auditor
                  currently and a friend of mine got an internship opportunity
                  from here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row  mt-28 justify-around p-4 px-4 md:px-48 bg-ly'>
        <div className='md:w-1/2 p-4'>
          <p className='mt-2 text-left mb-7 text-darkblue'>
            In the fast-paced landscape of professional development, Winners BC
            Career stands as a beacon of opportunity and growth. With its
            unwavering dedication to equipping individuals with the tools,
            insights, and connections essential for success, the platform
            continues to play a pivotal role in shaping and advancing careers
            across a multitude of industries.
          </p>
          <p className='bg-white text-darkblue font-medium py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-md'>
            Join Us
          </p>
        </div>
        <div className='md:w-1/2 p-4'>
          <Image
            src="/m.webp"
            alt="Winners BC Career professional"
            width={360}
            height={499}
            className='w-[600px] h-auto pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>

      <div>
        <h1 className='  text-4xl font-bold text-darkblue text-center mt-14'>
          Winners BC Career Fair 2024
        </h1>
        <p className='text-gray-600 text-center text-[10px] md:text-[15px]'>
          A recruiting event in which employers and recruiters meet with
          <br></br>
          potential employees and where job seekers find more about job
          openings.
        </p>

        <div className='flex flex-wrap justify-center mt-14'>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <Image src="/carol1.webp" alt="Winners BC Career Fair 2024" width={600} height={600} />
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <Image src="/carol2.webp" alt="Winners BC Career Fair 2024" width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <Image src="/carol3.webp" alt="Winners BC Career Fair 2024" width={600} height={600} />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
            <Image src="/carola4.webp" alt="Winners BC Career Fair 2024" width={600} height={600} />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Wbc_careers;