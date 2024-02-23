import React from 'react';
import Navbar from '../components/Navbar';
import ChurchImage from '../assests/church.png';
import Muyiwa from '../assests/muyiwa.png';
import Faj from '../assests/faj.png';
import Oke from '../assests/oke.svg';
import Alabi from '../assests/alabi.png';
import Ilori from '../assests/ilori.png';
import Footer from '../components/Footer';

const Diaconates = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={ChurchImage} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white pt-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>DIACONATES</h2>
            <p class=' text-[8px] md:text-[15px]'>
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
        <div class='md:w-1/2 bg-blue rounded-3xl'>
          <div class='relative'>
            <img src={Muyiwa} alt='Image 1' class='w-full h-auto' />
            <div class='absolute bottom-0 left-48 bg-white bg-opacity-50 text-black  p-4'>
              <h4 class='text-lg font-bold'>MUYIWA DAYO FOLASIRE</h4>
            </div>
          </div>
          <p class='mt-8 text-center text-white px-12'>
            Is an astute investment and portfolio analyst with special interest
            in investments banking and reporting. Mr. Folasire has served in
            several capacity in a Baptist local church, ranging from RA
            President, Youth Secretary, Church Financial Secretary and
            Treasurer. He is a Sunday teacher and a thoroughly discipled leader
            with Master Life certificate. He became a deacon under the
            ordination of Revd Dr Oladeni in 2017 at Winners Baptist Church, New
            Garage, Bariga. His presently the Chief Auditor and Deaconate
            Chairperson in Winners Baptist Church, New Garage, Bariga.
          </p>
        </div>
        <div class='md:w-1/2 bg-blue rounded-3xl'>
          <div class='relative'>
            <img src={Faj} alt='Image 1' class='w-full h-auto' />
            <div class='absolute bottom-0 left-48 bg-white bg-opacity-50 text-black  p-4'>
              <h4 class='text-lg font-bold'>ADENIKE FLORENCE FAJEMBOLA</h4>
            </div>
          </div>
          <p class='mt-8 text-center text-white px-12'>
            A retired headteacher.A Sunday School, DTM, teacher,l undergone
            Discipleship training,Christ dwelling in me, and Serve the
            Master.Have once Served as WMU,Co-Ordinator Deaconate
            Chairperson,and presently serving as Chairman School Board .
            I,became a deaconess under the Ordination of Rev Dr Sola, Oladeni,in
            2015 at Winners Baptist Church,New Garage,Bariga, Lagos.
          </p>
        </div>
      </div>

      {/* next flex */}
      <div class='flex flex-col md:flex-row gap-6 pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 bg-blue rounded-3xl'>
          <div class='relative'>
            <img src={Alabi} alt='Image 1' class='w-full h-auto' />
            <div class='absolute bottom-0 left-48 bg-white bg-opacity-50 text-black  p-4'>
              <h4 class='text-lg font-bold'>MUYIWA DAYO FOLASIRE</h4>
            </div>
          </div>
          <p class='mt-8 text-center text-white px-12'>
            Is an astute investment and portfolio analyst with special interest
            in investments banking and reporting. Mr. Folasire has served in
            several capacity in a Baptist local church, ranging from RA
            President, Youth Secretary, Church Financial Secretary and
            Treasurer. He is a Sunday teacher and a thoroughly discipled leader
            with Master Life certificate. He became a deacon under the
            ordination of Revd Dr Oladeni in 2017 at Winners Baptist Church, New
            Garage, Bariga. His presently the Chief Auditor and Deaconate
            Chairperson in Winners Baptist Church, New Garage, Bariga.
          </p>
        </div>
        <div class='md:w-1/2 bg-blue rounded-3xl'>
          <div class='relative'>
            <img src={Oke} alt='Image 1' class='w-full h-auto' />
            <div class='absolute bottom-0 left-48 bg-white bg-opacity-50 text-black  p-4'>
              <h4 class='text-lg font-bold'>OLAYINKA ABOSEDE OKEGBOLA</h4>
            </div>
          </div>
          <p class='mt-8 text-center text-white px-12'>
            Is a caterer and a trader. She is the CEO of Relish Catering
            Services. She trains people in Catering and decorations. Mrs
            Okegbola has served in various units of the local church. She was
            ordained as a deaconess by Rev Dr Olusola Oladeni in December 2019.
            She has served in Winners Baptist Church as the G. A. Counselor,
            Lydia Adviser, WMU Treasurer, DTM Teacher, DTM Cordinator,
            Visitation Cordinator. She has also served at the Associational
            level as the DTM Secretary, DTM Director and a member of the current
            Nominating Committee of the Gideon 2 Baptist Association She's
            currently serving as the church's Visitation Cordinator
          </p>
        </div>
      </div>

      {/* next flex */}
      <div class='flex flex-col md:flex-row gap-6 pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 bg-blue rounded-3xl'>
          <div class='relative'>
            <img src={Alabi} alt='Image 1' class='w-full h-auto' />
            <div class='absolute bottom-0 left-48 bg-white bg-opacity-50 text-black  p-4'>
              <h4 class='text-lg font-bold'>BABATUNDE OLAWALE BAKARE</h4>
            </div>
          </div>
          <p class='mt-8 text-center text-white px-12'>
            Is a retaired banker and portfolio manager with club Arcade of
            Nigeria and Howlwishwears store in Lagos MrBakare has served in
            several capacity in a baptist local church raging from chief usher,
            MMU chairman, treasure, Sunday school teacher and thouroughly
            disciple leader with follow the master certificate He became a
            deacon under the ordination of Rv Dr Sola oladeni in 2014 at winners
            Baptist church new garage bariga He his presently house fellowship
            leader and usher in winners Baptist church bariga Lagos
          </p>
        </div>
        <div class='md:w-1/2 bg-blue rounded-3xl'>
          <div class='relative'>
            <img src={Ilori} alt='Image 1' class='w-full h-auto' />
            <div class='absolute bottom-0 left-48 bg-white bg-opacity-50 text-black  p-4'>
              <h4 class='text-lg font-bold'>FLORENCE NDIDI ILORI</h4>
            </div>
          </div>
          <p class='mt-8 text-center text-white px-12'>
            Is a Business Enthusiast, Entrepreneur and Financial Advisory She
            has worn various caps in at the local church and Associational
            level. She is a Dtm Teacher, An Encourager, prayer intercessor and a
            lover of God's music. She got ordained as a deaconess by Revd Dr
            Sola Oladeni in 2019 at Winners Baptist Church, New Garage Bariga.
            Prior to this, she had served in various committees and various
            capacities ranging from the WMU Evangelism chairperson to GA
            Adviser, WMU Vice president and then Wmu president, Assistant Church
            Secretary, Secretary to Personnel committee, Personnel chairman, as
            well as Assistant financial secretary. She presently the financial
            secretary of the church and also the Lydia adviser.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Diaconates;
