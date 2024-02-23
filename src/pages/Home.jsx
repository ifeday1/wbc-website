import { React } from 'react';
import Carousel from '../components/Carousel';
import ReadMore from '../components/ReadMore';
import Pastor from '../assests/pastor.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Teens from '../assests/Teens.svg';
import Pic from '../assests/Pic.png';
import WW from '../assests/WW.png';
import WW1 from '../assests/WW1.png';
import Join from '../assests/Join.png';
import Bsf from '../assests/bsf.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Location from '../components/Location';
import { useEffect } from 'react';

const Home = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const loremIpsum =
    'At Winners Baptist Church, we believe in God and are geared towards raising a godly generation, we are one body in Christ, relating in brotherly love and living as Christ has taught us to.We are in Christ therefore have become new creatures. A body devoted to the work of God, doing his will and walking in line with his  commandments. A bible believing church committed to populate the kingdom of God. Here at Miracle Square, we hold discipleship classes to aid spiritual growth, organize the life of  every christian and make us better versions of ourselves. We are grateful for the love God has showed upon us and we believe in the name of Jesus.';

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
              Raising a Generation of trailblazers between ages 13-18,
              Intellectuals and hearts who longs for the things of God and as
              the presence of God never leaves our midst, we welcome all
              secondary school students, secondary school leavers and
              undergraduates. The word of the Lord remains in our hearts.
            </p>
          </div>

          <div class='flex flex-col items-center p-4 md:w-1/3'>
            <img src={Teens} alt='Image 1' class=' w-80 h-80 rounded-full' />
            <h4 class='text-lg font-bold'>Youth Ministry</h4>
            <p class='mt-2 text-center'>
              Welcome to Winning Youth - Where Champions Are Forged! Winning
              Youth Family We are thrilled to welcome you to the Winning Youth
              department, a dynamic and empowering community where champions are
              forged, dreams are realized, and excellence is celebrated...
            </p>
          </div>

          <div class='flex flex-col items-center p-4 md:w-1/3'>
            <img src={Bsf} alt='Image 1' class=' w-80 h-80 rounded-full' />
            <h4 class='text-lg font-bold'>BSF</h4>
            <p class='mt-2 text-center'>
              Baptist Student Fellowship(BSF)is a division under missionary
              organization department of Nigeria Baptist Convention that is
              responsible for ministering to students.To lead students to a
              commitment to Jesus Christ as Saviour and Lord,Involve them in
              biblical truth and Christian Discipleship...
            </p>
          </div>
          <a
            href='/ministries'
            class='bg-blue hover:bg-blue-700 p-18 mt-10 text-white font-bold py-2 px-4 rounded'
          >
            More
          </a>
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

        <div class='flex flex-wrap text-white justify-center gap-6  rounded-lg p-4 mt-10'>
          <div class=' md:w-44 text-white bg-gave p-4 rounded-lg w-auto h-96 '>
            <h1 class='text-4xl font-bold pb-16 pt-8'>01</h1>
            <h3 class='text-lg font-semibold'>Accept that you are a sinner</h3>
            <p class='mt-2'>
              Roman 3:23 - For all have sinned and fall short of the glory of
              God
            </p>
          </div>

          <div class=' mt-1 md:mt-20 md:w-44 bg-green p-4 rounded-lg w-auto h-96'>
            <h1 class='text-4xl font-bold pb-16 pt-8'>02</h1>
            <h3 class='text-lg font-semibold'>Accept Christ as your Lord</h3>
            <p class='mt-2'>John 3:16 - Come to Christ for Life</p>
          </div>

          <div class=' md:w-44 bg-pink p-4 rounded-lg w-auto h-96'>
            <h1 class='text-4xl font-bold pb-16 pt-8'>03</h1>
            <h3 class='text-lg font-semibold'>Join a Fellowship</h3>
            <p class='mt-2'>Find a bible believing church around you</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col'>
        <h1 className='  pt-14 text-4xl font-bold text-blue text-center'>
          Church in pictures
        </h1>
        <p className='text-gray-600 pb-10  text-center text-[10px] md:text-[15px]'>
          Have a glimse of what our worship service look like
        </p>
        <div>
          <img
            src={Pic}
            alt='Church in Pictures'
            class=' p-4 w-[500px] h-[auto] md:w-[1200px] h-auto'
          />
        </div>
      </div>

      <div class='flex flex-wrap justify-center items-center pt-14'>
        <div class='flex flex-col justify-center  mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <h2 class='text-4xl font-bold mb-4 text-center text-blue md:text-left'>
            JOIN THE WINNING
            <br></br>FAMILY!
          </h2>
          <p class='text-lg mb-4'>
            1 John 5:4 - For everyone born of God overcomes the world. This is
            the victory that has overcome the world.
          </p>
          <button class=' bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <a href='/contact'>JOIN</a>
          </button>
        </div>

        <div class='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3'>
          <img src={Join} alt='Your Image' class='max-w-full h-auto' />
        </div>
      </div>

      <div className=' bg-light mt-14'>
        <div class='container mx-auto max-w-screen-lg p-8'>
          <div class='mb-8'>
            <h2 class='text-3xl font-bold mb-4 text-center text-blue'>
              Worship with us
            </h2>
            <p class='text-lg text-gray-700 text-center'>
              Can’t make it to church? Join us online
            </p>
          </div>

          <div class='flex justify-between gap-3'>
            <div class='flex flex-col items-center  bg-white rounded-xl'>
              <div class='image-container mb-4'>
                <img src={WW} alt='Image 1' class='w-[500px] h-auto' />
              </div>
              <p class='text-lg text-gray-700 text-center  mb-2'>
                Join our worship service via Youtube
              </p>
              <a
                href='https://youtube.com/@winnersbaptistchurch4964?si=A5EEo-qBgdnu_fc3'
                class='text-green hover:underline'
              >
                Click here to join
              </a>
            </div>

            <div class='flex flex-col items-center  bg-white rounded-xl'>
              <div class='image-container mb-4'>
                <img src={WW1} alt='' class='w-[500px] h-auto' />
              </div>
              <p class='text-lg text-gray-700 items-center  text-center mb-2'>
                Join our worship service via Facebook live <br></br> (Video and
                audio)
              </p>
              <a
                href='https://www.facebook.com/winnersbaptistchurch?mibextid=ZbWKwL'
                class='text-green hover:underline'
              >
                Click here to join
              </a>
            </div>
          </div>
        </div>
      </div>

      <Location />

      <Footer />
    </div>
  );
};

export default Home;
