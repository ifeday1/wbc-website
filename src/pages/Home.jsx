import React from 'react';
import Carousel from '../components/Carousel';
import ReadMore from '../components/ReadMore';
import Pastor from '../assests/Pastor.jpeg';
import Footer from '../components/Footer';

const Home = () => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tortor vitae eros tristique euismod. Sed eget odio vel dolor fringilla efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non t';

  const pastor =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tortor vitae eros tristique euismod. Sed eget odio vel dolor fringilla efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non t';

  return (
    <div>
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
              <div className='square mb-2 flex flex-row items-center'>
                <p className='text-white bg-blue px-7 py-7 rounded-md font-semibold'>
                  Sun
                </p>
                <p className='text-black ml-8 font-semibold'>
                  Combined service <span className=' font-medium'>8:00am</span>
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
              className='mb-2 pl-18 rounded-md  h-auto '
            />
            <p className=' font-semibold'>
              Rev Olusola Oladeni, Ph.D <br></br>
              <span className=' font-medium'>Church Pastor</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
