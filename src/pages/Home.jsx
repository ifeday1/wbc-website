import React from 'react';
import Carousel from '../components/Carousel';
import ReadMore from '../components/ReadMore';
import Pastor from '../assests/pastor1.svg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Teens from '../assests/Teens.svg';

const Home = () => {
  const loremIpsum =
    'At Winners Baptist Church, we believe in God and are geared towards raising a godly generation, we are one body in Christ, relating in brotherly love and living as Christ has taught us to.We are in Christ therefore have become new creatures. A body devoted to the work of God, doing his will and walking in line with his  commandments. A bible believing church committed to populate the kingdom of God. Here at Miracle Square, we hold discipleship classes to aid spiritual growth, organize the life of  every christian and make us better versions of ourselves. We are grateful for the love God has showed upon us and we believe in the name of Jesus.';

  const pastor =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tortor vitae eros tristique euismod. Sed eget odio vel dolor fringilla efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non t';

  return (
    <div>
      <Navbar />
      <Carousel />
      <div>
        <h1 className='welcome'>WELCOME TO</h1>
        <p className='winners'>Winners Baptist Church, Bariga</p>
      </div>
      <div>
        <ReadMore text={loremIpsum} maxLength={150} />
      </div>

      {/* worship */}
      <div className=' bg-light p-28 mt-14'>
        <div className='text-center mb-4'>
          <h1 className='text-4xl font-bold text-blue'>Worship Avenue</h1>
          <p className='text-gray-600'>
            Fellowship with us on any of these days
          </p>
          <div className='flex flex-col items-center md:flex-row md:justify-around gap-4 pt-8'>
            <div className='flex-item bg-white px-16  py-5 rounded-md text-center'>
              <div className='square mb-2 flex flex-col '>
                <p className='text-white bg-blue px-7 py-7 rounded-md font-semibold'>
                  Sun
                </p>
                <p className='text-black  font-semibold'>
                  Combined service <span className=' font-medium'>8:00am</span>
                </p>
                <p className='text-black  font-semibold'>
                  English Service
                  <span className=' font-medium'>7:00am</span>
                </p>
                <p className='text-black  font-semibold'>
                  Yoruba Service
                  <span className=' font-medium'>9:00am</span>
                </p>
              </div>
            </div>
            <div className='flex-item bg-white px-16  py-5 rounded-md text-center'>
              <div className='square mb-2 flex flex-row items-center'>
                <p className='text-white bg-green px-7 py-7 rounded-md font-semibold'>
                  Wed
                </p>
                <p className='text-black ml-8 font-semibold'>
                  Victory Hour <span className=' font-medium'>6:00pm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* message from our pastor */}
      <div className='flex flex-col items-center px-6 md:flex-row md:justify-around gap-4 pt-8 px-32'>
        <div className='flex flex-col  md:flex-row md: justify-evenly gap-4'>
          <div className='flex-item bg-blue-500 p-4 rounded-md flex-1'>
            <h2 className='text-3xl font-medium mb-2 text-blue'>
              Message from Our Pastor
            </h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non tortor vitae eros tristique euismod. Sed eget odio vel dolor
              fringilla efficitur.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam non tLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam non t Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
              tortor vitae eros tristique euismod. Sed eget odio vel dolor
              fringilla efficitur.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam non tLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam non t
            </p>
          </div>
          <div className=' flex-1 md:flex-item p-10 rounded-md text-center flex-1/2'>
            <img
              src={Pastor}
              alt='pastors image'
              className='mb-2 pl-18 md:pl-32 rounded-md  h-auto '
            />
            <p className=' font-semibold pl-18 md:pl-32'>
              Rev Olusola Oladeni, Ph.D <br></br>
              <span className=' font-medium'>Church Pastor</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='  text-4xl font-bold text-blue text-center'>
          Our Core Values
        </h1>
        <p className='text-gray-600 text-center text-[10px] md:text-[15px]'>
          Supporting our adopted Mission Statement, the goals of<br></br>{' '}
          Winners Baptist Church comprises:
        </p>

        <div class='flex flex-wrap justify-center mt-14'>
          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div class='bg-blue rounded-lg p-4 flex flex-col justify-center w-auto h-80'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='icon icon-tabler icon-tabler-heart'
                width='50'
                height='40'
                opacity='50'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#ffffff'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
              </svg>
              <div class='mx-4 text-white'>
                <h4 class='text-lg font-bold pt-5'> Love </h4>
                <p class='mt-2'>
                  Encouraging ourselves in brotherly love and bringing hearts to
                  Christ. Living as Christ wants us to as he has commanded that
                  we should love as He loved us.
                </p>
              </div>
            </div>
          </div>

          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div class='bg-blue rounded-lg p-4 flex items-center justify-center w-auto h-80'>
              <div class='mx-4  text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-heart'
                  width='50'
                  height='40'
                  opacity='96'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#ffffff'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
                  <path d='M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25' />
                  <path d='M12.5 15.5l2 2' />
                  <path d='M15 13l2 2' />
                </svg>
                <h4 class='text-lg font-bold pt-5'>Care</h4>
                <p class='mt-2'>
                  As we value others in humility, we are ready to help and share
                  with others. Inculcating the spirit of empathy as God helps
                  us.
                </p>
              </div>
            </div>
          </div>

          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div class='bg-blue rounded-lg p-4 flex items-center justify-center w-auto h-80'>
              <div class='mx-4  text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-heart'
                  width='50'
                  height='40'
                  opacity='96'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#ffffff'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M7 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                  <path d='M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5' />
                  <path d='M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                  <path d='M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4' />
                </svg>
                <h4 class='text-lg font-bold pt-5'>
                  {' '}
                  Concern for People's Welfare
                </h4>
                <p class='mt-2'>
                  Imbibing the spirit of kindness and generosity in us.Willing
                  to lend a hand and provide support.
                </p>
              </div>
            </div>
          </div>

          <div class='w-full md:w-1/2 lg:w-1/4 p-4'>
            <div class='bg-blue rounded-lg p-4 flex items-center justify-center w-auto h-80'>
              <div class='mx-4  text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-heart'
                  width='50'
                  height='40'
                  opacity='96'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='#ffffff'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z' />
                  <path d='M19 16h-12a2 2 0 0 0 -2 2' />
                  <path d='M12 7v6' />
                  <path d='M10 9h4' />
                </svg>
                <h4 class='text-lg font-bold pt-5'>Commitment Jesus Christ</h4>
                <p class='mt-2'>Putting Christ first in all we do!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-light mt-20 py-3'>
        <h4 className=' mt-20 text-4xl font-bold text-blue text-center'>
          Our Ministries
        </h4>
        <div class='flex flex-wrap justify-center'>
          <div class='flex flex-col items-center p-4 md:w-1/3'>
            <img src={Teens} alt='Image 1' class=' w-80 h-80 rounded-full' />
            <h4 class='text-lg font-bold'>Teenagers Ministry</h4>
            <p class='mt-2 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
              ipsum id justo vestibulum...
            </p>
          </div>

          <div class='flex flex-col items-center p-4 md:w-1/3'>
            <img src={Teens} alt='Image 1' class=' w-80 h-80 rounded-full' />
            <h4 class='text-lg font-bold'>Teenagers Ministry</h4>
            <p class='mt-2 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
              ipsum id justo vestibulum...
            </p>
          </div>

          <div class='flex flex-col items-center p-4 md:w-1/3'>
            <img src={Teens} alt='Image 1' class=' w-80 h-80 rounded-full' />
            <h4 class='text-lg font-bold'>Teenagers Ministry</h4>
            <p class='mt-2 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
              ipsum id justo vestibulum...
            </p>
          </div>
        </div>
      </div>

      <div className='mt-14'>
        <h1 className='  text-4xl font-bold text-blue text-center'>
          Discover the Journey to Christ
        </h1>
        <p className='text-gray-600 text-center text-[10px] md:text-[15px]'>
          God so loved the world that he gave his one and only Son, that
          <br></br> whoever believes in him shall not perish but have eternal
          life.<br></br> - John 3:16
        </p>

        <div class='flex flex-wrap justify-center gap-4 bg-gray-200 rounded-lg p-4 mt-10'>
          <div class='w-full md:w-44 bg-blue p-4'>
            <h1 class='text-xl font-bold'>Heading 1</h1>
            <h3 class='text-lg font-semibold'>Subheading 1</h3>
            <p class='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div class='w-full md:w-44 bg-gray-200 p-4'>
            <h1 class='text-xl font-bold'>Heading 2</h1>
            <h3 class='text-lg font-semibold'>Subheading 2</h3>
            <p class='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div class='w-full md:w-44 bg-gray-200 p-4'>
            <h1 class='text-xl font-bold'>Heading 3</h1>
            <h3 class='text-lg font-semibold'>Subheading 3</h3>
            <p class='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
