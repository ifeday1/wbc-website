import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Diaconates - Winners Baptist Church',
  description: 'Meet our deacons at Winners Baptist Church, Bariga',
};

export default function Diaconates() {
  return (
    <div>
      

      {/* Hero Section */}
      <div className='relative h-[250px] md:h-[350px] animate-fadeIn'>
        <Image src='/deacon.webp' alt='Church building' fill sizes="100vw" className='object-cover animate-scaleIn' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent' />
          <div className='text-center text-white px-4 relative z-10 animate-slideInUp'>
            <h2 className='text-1xl font-bold md:text-4xl'>DIACONATES</h2>
            <p className='text-[10px] md:text-[15px]'>
              <span className='text-4xl font-semibold'>K</span>
              eep watch over yourselves and all the flock of which the Holy
              <br></br>
              Spirit has made you overseers. Be shepherds of the church of God,
              <br></br>
              which he brought with his own blood. Acts 20:28.
            </p>
          </div>
        </div>
      </div>

      {/* Our Deacons */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 animate-fadeIn'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 animate-slideInUp'>Our Deacons</h2>
            <p className='text-gray-600 max-w-2xl mx-auto animate-slideInUp' style={{ animationDelay: '0.1s' }}>
              Faithful servants who shepherd our congregation with wisdom, dedication, and love
            </p>
          </div>

          {/* Deacons Grid */}
          <div className='grid md:grid-cols-2 gap-8 mb-12'>
            {/* Deacon Card 1 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slideInLeft'>
              <div className='relative h-64'>
                <Image
                  src='/muyiwa.webp'
                  alt='Muyiwa Dayo Folasire'
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Chief Auditor
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Muyiwa Dayo Folasire</h3>
                <p className='text-blue-600 font-semibold mb-4'>Deaconate Chairperson</p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  An astute investment and portfolio analyst with special interest
                  in investments banking and reporting. Mr. Folasire has served in
                  several capacities in a Baptist local church, ranging from RA
                  President, Youth Secretary, Church Financial Secretary and
                  Treasurer. He is a Sunday teacher and a thoroughly discipled leader
                  with Master Life certificate. Ordained as a deacon in 2017.
                </p>
                <div className='mt-4 flex items-center text-sm text-gray-500'>
                  <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>2017</span>
                </div>
              </div>
            </div>

            {/* Deacon Card 2 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slideInRight'>
              <div className='relative h-64'>
                <Image
                  src='/faj.webp'
                  alt='Adenike Florence Fajembola'
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Chairman
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Adenike Florence Fajembola</h3>
                <p className='text-blue-600 font-semibold mb-4'>School Board Chairman</p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  A retired headteacher with extensive experience in education and
                  church leadership. A dedicated Sunday School and DTM teacher who has
                  undergone Discipleship training. She has served as WMU Coordinator,
                  Deaconate Chairperson, and currently serves as Chairman of the School Board.
                </p>
                <div className='mt-4 flex items-center text-sm text-gray-500'>
                  <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>2015</span>
                </div>
              </div>
            </div>

            {/* Deacon Card 3 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slideInLeft'>
              <div className='relative h-64'>
                <Image
                  src='/alabi.webp'
                  alt='Rachel Olayinka Alabi'
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Choir Director
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Rachel Olayinka Alabi</h3>
                <p className='text-blue-600 font-semibold mb-4'>Church Choir Council Coordinator</p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  A dedicated teacher and business woman who has served in various
                  departments of the church. She has served as a choir mistress, WMU
                  secretary, Lydia adviser and church secretary. Currently serves as
                  the Church Choir Council Coordinator, Choir member, Discipleship
                  Training Ministry (DTM) coordinator and Girls Auxiliary (G.A) counsellor.
                </p>
                <div className='mt-4 flex items-center text-sm text-gray-500'>
                  <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>2019</span>
                </div>
              </div>
            </div>

            {/* Deacon Card 4 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slideInRight'>
              <div className='relative h-64'>
                <Image
                  src='/oke.webp'
                  alt='Olayinka Abosede Okegbola'
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Visitation Coordinator
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Olayinka Abosede Okegbola</h3>
                <p className='text-blue-600 font-semibold mb-4'>Church Visitation Coordinator</p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  A caterer and trader who trains people in Catering and decorations.
                  Mrs Okegbola has served in various units of the local church and at
                  the associational level. She has served as G.A. Counselor, Lydia Adviser,
                  WMU Treasurer, DTM Teacher, DTM Coordinator, and Visitation Coordinator.
                  She also serves as DTM Secretary and DTM Director at the associational level.
                </p>
                <div className='mt-4 flex items-center text-sm text-gray-500'>
                  <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>2019</span>
                </div>
              </div>
            </div>

            {/* Deacon Card 5 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slideInLeft'>
              <div className='relative h-64'>
                <Image
                  src='/bake.webp'
                  alt='Babatunde Olawale Bakare'
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  House Fellowship Leader
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Babatunde Olawale Bakare</h3>
                <p className='text-blue-600 font-semibold mb-4'>House Fellowship Leader & Usher</p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  A retired banker and portfolio manager with extensive experience in
                  church leadership. He has served in several capacities including chief
                  usher, MMU chairman, treasurer, and Sunday school teacher. A thoroughly
                  discipled leader with Follow the Master certificate who became a deacon
                  in 2014 and continues to serve as a house fellowship leader and usher.
                </p>
                <div className='mt-4 flex items-center text-sm text-gray-500'>
                  <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>2014</span>
                </div>
              </div>
            </div>

            {/* Deacon Card 6 */}
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slideInRight'>
              <div className='relative h-64'>
                <Image
                  src='/ilori.webp'
                  alt='Florence Ndidi Ilori'
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  Financial Secretary
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Florence Ndidi Ilori</h3>
                <p className='text-blue-600 font-semibold mb-4'>Church Financial Secretary</p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  A Business Enthusiast, Entrepreneur and Financial Advisor who has
                  worn various leadership roles at both local church and associational levels.
                  She is a DTM Teacher, Encourager, prayer intercessor and lover of God's music.
                  Ordained as a deaconess in 2019, she has served in numerous committees
                  and capacities, currently serving as the church's financial secretary and Lydia adviser.
                </p>
                <div className='mt-4 flex items-center text-sm text-gray-500'>
                  <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>2019</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className='text-center mt-12 animate-fadeIn'>
            <div className='bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto'>
              <h3 className='text-2xl font-bold mb-4'>Join Our Leadership Team</h3>
              <p className='text-blue-100 mb-6'>
                Discover how you can serve and make a difference in our church community.
                Our deacons lead by example, demonstrating commitment, wisdom, and dedication
                to God's work.
              </p>
              <button className='bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300'>
                Learn More About Serving
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}