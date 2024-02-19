import React from 'react';
import Navbar from '../components/Navbar';

import ChurchImage from '../assests/church.png';
import Footer from '../components/Footer';
import Pastor from '../assests/Pastor.jpeg';

const Aboutthechurch = () => {
  return (
    <>
      <Navbar />

      <div class='relative pt-20'>
        <img src={ChurchImage} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white pt-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>ABOUT THE CHURCH</h2>
            <p class='mt-2 text-[10px] md:text-[15px]'>Additional text here</p>
          </div>
        </div>
      </div>

      <div class=' bg-white p-4 px-4 md:px-16'>
        <h3 class='text-lg font-bold text-blue md:text-2xl'>HISTORY</h3>
        <p class='mt-2 text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci
          feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus ipsum id
          justo vestibulum, at bibendum ipsum viverra. Maecenas venenatis arcu
          at libero euismod, sed fermentum ligula lobortis. Nulla vitae sapien
          eget enim vestibulum volutpat. In hac habitasse platea dictumst. In
          vel mi vitae est placerat tempus ut eget sapien. Nam eu felis quis
          libero viverra tincidunt nec eu metus. Integer accumsan, justo eu
          posuere bibendum, mi nulla vulputate urna, nec volutpat sapien felis
          vel nulla. Nullam consequat magna vel ex dignissim, eget sodales
          tortor facilisis. Vivamus vehicula euismod ex, eu ultricies dui.
          Integer suscipit nulla eget augue facilisis, sed euismod ipsum
          rhoncus. Ut sit amet lacinia mi. Nullam auctor, libero et tincidunt
          congue, lorem velit ullamcorper sapien, ut accumsan dui quam id
          tortor. Nullam nec diam a purus pharetra mattis. Nam maximus dapibus
          velit, id cursus dolor mollis et.
        </p>
      </div>

      <div class=''></div>

      <div class='flex '>
        <div className='flex flex-col'>
          <div class='flex-1 p-4 px-4 md:px-16'>
            <h3 class='text-lg font-bold'>Heading Here</h3>
            <p class='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              orci feugiat, bibendum mauris vel, ultrices ipsum.
            </p>
          </div>
          <div class='flex-1 p-4 px-4 md:px-16'>
            <h3 class='text-lg font-bold'>Heading Here</h3>
            <p class='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              orci feugiat, bibendum mauris vel, ultrices ipsum.
            </p>
          </div>
          <div class='flex-1 p-4 px-4 md:px-16'>
            <h3 class='text-lg font-bold'>Heading Here</h3>
            <p class='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              orci feugiat, bibendum mauris vel, ultrices ipsum.
            </p>
          </div>
        </div>

        <div class='flex-1 p-4'>
          <img src={Pastor} alt='Image 1' class=' w-32 h-32' />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutthechurch;
