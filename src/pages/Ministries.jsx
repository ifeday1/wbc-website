import React from 'react';
import Navbar from '../components/Navbar';
import ChurchImage from '../assests/church.png';
import Teens from '../assests/Teens.svg';

const Ministries = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={ChurchImage} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white pt-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>MINISTRIES</h2>
            <p class='mt-2'>Additional text here</p>
          </div>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>TEENAGERS MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 mb:pb-48'
          />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>CHILDREN MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>TEENAGERS MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 mb:pb-48'
          />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>CHILDREN MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>TEENAGERS MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 mb:pb-48'
          />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>CHILDREN MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
      </div>
    </>
  );
};

export default Ministries;
