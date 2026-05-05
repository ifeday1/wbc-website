import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Diaconates - Winners Baptist Church',
  description: 'Meet our deacons at Winners Baptist Church, Bariga',
};

const Diaconates = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className='relative h-[250px] md:h-[350px]'>
        <Image src='/deacon.webp' alt='Church building' fill className='object-cover' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent' />
          <div className='text-center text-white px-4 relative z-10'>
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

      {/* Deacons Section - Row 1 */}
      <div className='flex flex-col md:flex-row gap-6 pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 bg-blue-600 rounded-3xl'>
          <div className='relative h-[350px]'>
            <Image src='/muyiwa.webp' alt='Muyiwa Dayo Folasire' fill className='object-cover' />
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black p-4'>
              <h4 className='text-lg font-bold'>MUYIWA DAYO FOLASIRE</h4>
            </div>
          </div>
          <p className='mt-8 text-center text-white px-12'>
            Is an astute investment and portfolio analyst with special interest
            in investments banking and reporting. Mr. Folasire has served in
            several capacity in a Baptist local church, ranging from RA
            President, Youth Secretary, Church Financial Secretary and
            Treasurer. He is a Sunday teacher and a thoroughly discipled leader
            with Master Life certificate. He became a deacon under the
            ordination of Revd Dr Oladeni in 2017 at Winners Baptist Church, New
            Garage, Bariga. He's presently the Chief Auditor and Deaconate
            Chairperson in Winners Baptist Church, New Garage, Bariga.
          </p>
        </div>
        <div className='md:w-1/2 bg-blue-600 rounded-3xl'>
          <div className='relative h-[350px]'>
            <Image src='/faj.webp' alt='Adenike Florence Fajembola' fill className='object-cover' />
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black p-4'>
              <h4 className='text-lg font-bold'>ADENIKE FLORENCE FAJEMBOLA</h4>
            </div>
          </div>
          <p className='mt-8 text-center text-white px-12'>
            A retired headteacher. A Sunday School, DTM teacher, undergone
            Discipleship training, "Christ dwelling in me, and Serve the
            Master". Have once served as WMU Coordinator, Deaconate
            Chairperson, and presently serving as Chairman School Board.
            She became a deaconess under the Ordination of Rev Dr Sola, Oladeni,
            in 2015 at Winners Baptist Church, New Garage, Bariga, Lagos.
          </p>
        </div>
      </div>

      {/* Deacons Section - Row 2 */}
      <div className='flex flex-col md:flex-row gap-6 pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 bg-blue-600 rounded-3xl'>
          <div className='relative h-[350px]'>
            <Image src='/alabi.webp' alt='Rachel Olayinka Alabi' fill className='object-cover' />
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black p-4'>
              <h4 className='text-lg font-bold'>RACHEL OLAYINKA ALABI</h4>
            </div>
          </div>
          <p className='mt-8 text-center text-white px-12'>
            Is a teacher and a business woman. She has served in various
            departments in the church. She has served as a choir mistress, WMU
            secretary, Lydia adviser and church secretary. She became a
            deaconess under the leadership of Revd Dr. Sola Oladeni in December
            2019 at Winners Baptist Church, New Garage, Bariga, Lagos. She is
            currently the Church choir Council Coordinator, Choir member,
            Discipleship Training Ministry (DTM) coordinator and Girls Auxiliary
            (G.A) counsellor in Winners Baptist Church, New Garage, Bariga,
            Lagos.
          </p>
        </div>
        <div className='md:w-1/2 bg-blue-600 rounded-3xl'>
          <div className='relative h-[350px]'>
            <Image src='/oke.webp' alt='Olayinka Abosede Okegbola' fill className='object-cover' />
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black p-4'>
              <h4 className='text-lg font-bold'>OLAYINKA ABOSEDE OKEGBOLA</h4>
            </div>
          </div>
          <p className='mt-8 text-center text-white px-12'>
            Is a caterer and a trader. She is the CEO of Relish Catering
            Services. She trains people in Catering and decorations. Mrs
            Okegbola has served in various units of the local church. She was
            ordained as a deaconess by Rev Dr Olusola Oladeni in December 2019.
            She has served in Winners Baptist Church as the G.A. Counselor,
            Lydia Adviser, WMU Treasurer, DTM Teacher, DTM Coordinator,
            Visitation Coordinator. She has also served at the Associational
            level as the DTM Secretary, DTM Director and a member of the current
            Nominating Committee of Gideon 2 Baptist Association. She's
            currently serving as the church's Visitation Coordinator.
          </p>
        </div>
      </div>

      {/* Deacons Section - Row 3 */}
      <div className='flex flex-col md:flex-row gap-6 pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 bg-blue-600 rounded-3xl'>
          <div className='relative h-[350px]'>
            <Image src='/bake.webp' alt='Babatunde Olawale Bakare' fill className='object-cover' />
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black p-4'>
              <h4 className='text-lg font-bold'>BABATUNDE OLAWALE BAKARE</h4>
            </div>
          </div>
          <p className='mt-8 text-center text-white px-12'>
            Is a retired banker and portfolio manager with Club Arcade of
            Nigeria and Howlwishwears store in Lagos. Mr. Bakare has served in
            several capacities in a Baptist local church ranging from chief
            usher, MMU chairman, treasurer, Sunday school teacher and thoroughly
            discipled leader with Follow the Master certificate. He became a
            deacon under the ordination of Rev Dr Sola Oladeni in 2014 at
            Winners Baptist Church, New Garage, Bariga. He is presently a house
            fellowship leader and usher in Winners Baptist Church, Bariga, Lagos.
          </p>
        </div>
        <div className='md:w-1/2 bg-blue-600 rounded-3xl mb-10'>
          <div className='relative h-[350px]'>
            <Image src='/ilori.webp' alt='Florence Ndidi Ilori' fill className='object-cover' />
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black p-4'>
              <h4 className='text-lg font-bold'>FLORENCE NDIDI ILORI</h4>
            </div>
          </div>
          <p className='mt-8 text-center text-white px-12'>
            Is a Business Enthusiast, Entrepreneur and Financial Advisor. She
            has worn various caps at the local church and Associational level.
            She is a DTM Teacher, an Encourager, prayer intercessor and a
            lover of God's music. She got ordained as a deaconess by Revd Dr
            Sola Oladeni in 2019 at Winners Baptist Church, New Garage Bariga.
            Prior to this, she had served in various committees and various
            capacities ranging from the WMU Evangelism chairperson to GA
            Adviser, WMU Vice president and then WMU president, Assistant Church
            Secretary, Secretary to Personnel committee, Personnel chairman, as
            well as Assistant financial secretary. She is presently the financial
            secretary of the church and also the Lydia adviser.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Diaconates;
