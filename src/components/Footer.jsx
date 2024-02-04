import React from 'react';
import Logo from '../assests/logo.png';

const Footer = () => {
  return (
    <>
      <div className='flex flex-col  sm:flex-row justify-between p-4 py-28 bg-gray-800 text-white'>
        {/* First Flex Item with Logo */}
        <div className='flex-none flex-1 mb-2 sm:mb-0'>
          <img src={Logo} alt='Logo' className=' w-24 h-auto mx-0 md:mx-28' />
        </div>

        {/* Second Flex Item with Heading and Links */}
        <div className='flex-1 mb-2 sm:mb-0 sm:ml-0 sm:mr-2'>
          <div>
            <h3 className='text-lg font-semibold mb-2 '>Quick Navigation</h3>
            <div className='flex flex-col'>
              <a href='/about' className='text-white mb-1'>
                About Us
              </a>
              <a href='/Miniseries' className='text-white mb-1'>
                Miniseries
              </a>
              <a href='/event' className='text-white mb-1'>
                Event
              </a>
              <a href='/contact' className='text-white mb-1'>
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Third Flex Item with Heading and Links */}
        <div className='flex-1 mb-2 sm:mb-0 sm:ml-2 sm:mr-0'>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Section 2</h3>
            <div className='flex flex-col'>
              <a href='#' className='text-white mb-1'>
                Link 5
              </a>
              <a href='#' className='text-white mb-1'>
                Link 6
              </a>
              <a href='#' className='text-white mb-1'>
                Link 7
              </a>
              <a href='#' className='text-white mb-1'>
                Link 8
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Flex Item with Social Icons */}
        <div className='flex mx-0 md:mx-40'>
          <img
            src='instagram.png'
            alt='Instagram'
            className='w-6 h-6 mr-1 cursor-pointer'
          />
          <img
            src='facebook.png'
            alt='Facebook'
            className='w-6 h-6 mr-1 cursor-pointer'
          />
          <img
            src='twitter.png'
            alt='Twitter'
            className='w-6 h-6 mr-1 cursor-pointer'
          />
          <img
            src='youtube.png'
            alt='YouTube'
            className='w-6 h-6 cursor-pointer'
          />
        </div>
      </div>
      <div className=' text-center text-white  bg-gray-800 text-1xl py-5'>
        ©Winners Baptist Church. All Right Reserved 2024.
      </div>
    </>
  );
};

export default Footer;
