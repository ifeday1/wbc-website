import React from 'react';
import Logo from '../assests/logo.png';
import Instagram from '../assests/instagram.png';
import Facebook from '../assests/facebook 2.png';
import X from '../assests/twitter 2.png';
import Youtube from '../assests/youtube 2.png';

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
            <h3 className='text-lg font-semibold mb-2'>Locate Us</h3>
            <div className='flex flex-col'>
              <p className='text-white mb-1'>
                5, Adebayo Adekoya street <br></br>New Garage, Bariga, Lagos
              </p>
              <p className='text-white mb-1'>+234 913 9402 485</p>
              <p className='text-white mb-1'>winnersbaptistchurch5@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Fourth Flex Item with Social Icons */}
        <div className='flex mx-0 md:mx-40'>
          <a
            href='https://www.instagram.com/winnersbaptistchurch?igsh=enhwNGZubmV1cWNs'
            className='text-white mb-1'
          >
            <img
              src={Instagram}
              alt='Instagram'
              className='w-6 h-6 mr-1 cursor-pointer'
            />
          </a>

          <a
            href='https://www.facebook.com/winnersbaptistchurch?mibextid=ZbWKwL'
            className='text-white mb-1'
          >
            <img
              src={Facebook}
              alt='Facebook'
              className='w-6 h-6 mr-1 cursor-pointer'
            />
          </a>

          <a
            href='https://x.com/BaptistWinners?t=koTxXLFTs0KciGhHFJqpOw&s=09'
            className='text-white mb-1'
          >
            <img
              src={X}
              alt='Twitter'
              className='w-6 h-6 mr-1 cursor-pointer'
            />
          </a>

          <a
            href='https://youtube.com/@winnersbaptistchurch4964?si=kPQBGupVaIP_0JuG'
            className='text-white mb-1'
          >
            <img
              src={Youtube}
              alt='YouTube'
              className='w-6 h-6 cursor-pointer'
            />
          </a>
        </div>
      </div>
      <div className=' text-center text-white  bg-gray-800 text-1xl py-5 px-6'>
        ©Winners Baptist Church. All Right Reserved 2024.
      </div>
    </>
  );
};

export default Footer;
