import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Give from '../assests/give.svg';
import Location from '../components/Location';

const Giving = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={Give} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white py-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>GIVING</h2>
            <p class='mt-2 text-[10px] md:text-[15px]'>
              <span className=' text-4xl font-semibold '>E</span>
              ach man should give what he has decided in his heart to give, not
              <br></br>
              reluctantly or under compulsion, for God loves a cheerful giver.{' '}
              <br></br>2 Corinthians 9:7
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col md:flex-row py-44 justify-around p-4 px-4 md:px-48 bg-light'>
        <div class='md:w-1/2 p-4'>
          <h2 class='text-4xl font-bold text-black mb-10'>Online Transfer</h2>
          <h5 class='text-lg font-bold text-blue'>Bank: First Bank</h5>
          <h5 class='text-lg font-bold text-blue'>
            Account Name: Winners Baptist Church
          </h5>
          <h5 class='text-lg font-bold text-blue'>
            {' '}
            Account Number: 2003806472
          </h5>
          {/* <h5 class='text-lg font-bold text-blue'>USD Account: ------</h5> */}
        </div>
        <div class='md:w-1/2 p-4'>
          <h2 class='text-4xl font-bold text-black mb-10'>Cheque</h2>
          <h5 class='text-lg font-bold text-blue'>
            Name: Winners Baptist Church
          </h5>
          <h5 class='text-lg font-bold text-blue'>
            Details: Please write your phone number behind the cheque
          </h5>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Giving;
