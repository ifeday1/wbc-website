import React from 'react';
import Navbar from '../components/Navbar';
import Pastor1 from '../assests/pastor2.svg';
import Pastormrs from '../assests/pastormrs.svg';
import CImage from '../assests/church.png';
import Preach from '../assests/Preach.svg';
import Preach1 from '../assests/Preach1.svg';

import Footer from '../components/Footer';

const Ministers = () => {
  return (
    <>
      <Navbar />

      <div class='relative pt-20'>
        <img src={CImage} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white pt-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>MINISTERS</h2>
            <p class='mt-2 text-[10px] md:text-[15px]'>
              <span className=' text-4xl font-semibold '>A</span>
              nd I will give you pastors according to mine heart, which shall
              <br></br>
              feed you with knowledge and understanding. Jeremiah 3:15
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col lg:flex-row pt-16'>
        <div class='lg:w-1/2p-4 px-4 md:px-16'>
          <img src={Pastor1} alt='Pastor image' class='w-[500px] h-{0px}' />
          <h5 class='mt-2 text-lg font-bold'>Rev Olusola Oladeni,Ph.D </h5>
          <p class=''>Lead Pastor</p>
        </div>
        <div class='lg:w-1/2 p-4'>
          <p class='mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            quis lectus nulla at. Quam pellentesque nec nam aliquam sem et.
            Senectus et netus et malesuada fames ac turpis egestas maecenas. Leo
            duis ut diam quam nulla porttitor massa id. Elit scelerisque mauris
            pellentesque pulvinar pellentesque habitant morbi tristique
            senectus. Imperdiet nulla malesuada pellentesque elit eget gravida
            cum. Dictumst vestibulum rhoncus est pellentesque. Augue lacus
            viverra vitae congue eu consequat ac. Odio ut sem nulla pharetra
            diam sit. Sed vulputate mi sit amet mauris. In arcu cursus euismod
            quis. Habitant morbi tristique senectus et netus et malesuada fames.
            Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt
            tortor aliquam nulla facilisi cras. Volutpat maecenas volutpat
            blandit{' '}
          </p>
        </div>
      </div>

      <div class='flex flex-col lg:flex-row pt-16'>
        <div class='lg:w-1/2p-4 px-4 md:px-16'>
          <img src={Pastormrs} alt='Pastor image' class='w-[500px] h-{0px}' />
          <h5 class='mt-2 text-lg font-bold'>Rev Mrs Esther Oladeni</h5>
          <p class=''> Teenagers Pastor</p>
        </div>
        <div class='lg:w-1/2 p-4'>
          <p class='mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            quis lectus nulla at. Quam pellentesque nec nam aliquam sem et.
            Senectus et netus et malesuada fames ac turpis egestas maecenas. Leo
            duis ut diam quam nulla porttitor massa id. Elit scelerisque mauris
            pellentesque pulvinar pellentesque habitant morbi tristique
            senectus. Imperdiet nulla malesuada pellentesque elit eget gravida
            cum. Dictumst vestibulum rhoncus est pellentesque. Augue lacus
            viverra vitae congue eu consequat ac. Odio ut sem nulla pharetra
            diam sit. Sed vulputate mi sit amet mauris. In arcu cursus euismod
            quis. Habitant morbi tristique senectus et netus et malesuada fames.
            Ultricies mi quis hendrerit dolor magna eget est. Eu tincidunt
            tortor aliquam nulla facilisi cras. Volutpat maecenas volutpat
            blandit{' '}
          </p>
        </div>
      </div>

      <div class='flex flex-col lg:flex-row pt-10 justify-between'>
        <div class='lg:w-1/2p-4 px-4 md:px-16'>
          <img src={Preach} alt='Pastor image' class='w-[500px] h-{0px}' />
        </div>

        <div class='lg:w-1/2p-4 px-4 md:px-16'>
          <img src={Preach1} alt='Pastor image' class='w-[500px] h-{0px}' />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ministers;
