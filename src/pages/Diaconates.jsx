import React from 'react';
import Navbar from '../components/Navbar';
import ChurchImage from '../assests/church.png';
import Pastor1 from '../assests/pastor2.svg';

const Diaconates = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={ChurchImage} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white pt-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>DIACONATES</h2>
            <p class='mt-2'>
              <span className=' text-4xl font-semibold '>K</span>
              eep watch over yourselves and all the flock of which the Holy
              <br></br>
              spirit has made you overseers. Be shepherds of the church of God,
              <br></br>
              which he brought with his own blood. Acts 20:28.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col md:flex-row gap-6 pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2'>
          <div class='relative'>
            <img src={Pastor1} alt='Image 1' class='w-full h-auto' />
            <div class='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4'>
              <h4 class='text-lg font-bold'>Text Overlay 1</h4>
            </div>
          </div>
          <p class='mt-2 text-center'>Paragraph below Image 1</p>
        </div>
        <div class='md:w-1/2'>
          <div class='relative'>
            <img src={Pastor1} alt='Image 2' class='w-full h-auto' />
            <div class='absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4'>
              <h4 class='text-lg font-bold'>Text Overlay 2</h4>
            </div>
          </div>
          <p class='mt-2 text-center'>Paragraph below Image 2</p>
        </div>
      </div>
    </>
  );
};

export default Diaconates;
