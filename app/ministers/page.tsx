import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Ministers - Winners Baptist Church',
  description: 'Meet our ministers at Winners Baptist Church, Bariga',
};

const Ministers = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
        <div className='relative h-[250px] md:h-[350px]'>
          <Image src='/ministers.webp' alt='Church building' fill sizes="100vw" className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div className='text-center text-white px-4'>
            <h2 className='text-1xl font-bold md:text-4xl'>MINISTERS</h2>
            <p className='mt-2 text-[10px] md:text-[15px]'>
              <span className='text-4xl font-semibold'>A</span>
              nd I will give you pastors according to mine heart, which shall
              <br></br>
              feed you with knowledge and understanding. Jeremiah 3:15
            </p>
          </div>
        </div>
      </div>

      {/* Rev. Olusola Oladeni */}
      <div className='flex flex-col lg:flex-row pt-16'>
        <div className='lg:w-1/2 p-4 px-4 md:px-16'>
          <Image src='/pastor2.webp' alt='Rev Olusola Oladeni' className='w-full max-w-[500px] h-auto' />
          <h5 className='mt-2 text-lg font-bold'>Rev Olusola Oladeni, Ph.D</h5>
          <p className='text-blue-600 font-semibold'>Lead Pastor</p>
        </div>
        <div className='lg:w-1/2 p-4'>
          <p className='mt-2 text-gray-700 leading-relaxed'>
            Oladeni, Ola Olusola, PhD, is the Senior Pastor of Winners Baptist
            Church, Bariga, New-Garage, Lagos. He is a Teacher, Preacher,
            Psychologist, Gerontologist, Author and marriage Counsellor. In
            addition to Nigeria Certificate in Education (N.C.E), Dr Sola
            Oladeni holds a Bachelor of Art (B. A), Master of Education (M. Ed)
            and Doctor of Philosophy (Ph. D) from the University of Ibadan. He
            also holds a Bachelor of Theology (B. Th) and Master of Theology (M.
            Th) from The Nigerian Baptist Theological Seminary, Ogbomoso. He
            coordinates MARFAM Life Counselling Ministry International (MLCMI),
            a ministry that is focused on marriage enrichment and marital
            Counselling; other counselling services and lots more. He's married
            to his heart-throb Esther Adegbenjo and they are blessed with
            biological children and many spiritual children.
          </p>
        </div>
      </div>

      {/* Rev. Mrs. Esther Oladeni */}
      <div className='flex flex-col lg:flex-row pt-16'>
        <div className='lg:w-1/2 p-4 px-4 md:px-16'>
          <Image src='/pastormrs.webp' alt='Rev Mrs Esther Oladeni' className='w-full max-w-[500px] h-auto' />
          <h5 className='mt-2 text-lg font-bold'>Rev Mrs Esther Oladeni</h5>
          <p className='text-blue-600 font-semibold'>Teenagers Pastor</p>
        </div>
        <div className='lg:w-1/2 p-4'>
          <p className='mt-2 text-gray-700 leading-relaxed'>
            Revd. Adegbenjo Esther Oladeni is a Baptist-trained pastor. She is
            currently the Teenagers' Pastor of Winners Baptist Church, Bariga
            Lagos. She is a trained teacher and counsellor. She attended Ilorin
            Teachers College. In addition to Nigeria Certificate in Education
            (NCE), she holds her Bachelor of Education (B.Ed) in counselling
            from the University of Ado Ekiti. Esther holds her Bachelor in
            Religious Education (B.Re) from the Baptist College of Theology
            Lagos and her Master of Education (M.Ed) in Guidance and Counselling
            from the University of Lagos. Esther is the author of several books.
            She is a member of MARFAM Life Counselling Ministry International
            (MLCMI), a ministry that is focused on marriage enrichment and other
            counselling services. Adegbenjo is happily married to Olusola
            Oladeni, and the marriage is blessed with both biological and
            spiritual children.
          </p>
        </div>
      </div>

      {/* Additional Images */}
      <div className='flex flex-col lg:flex-row pt-10 justify-between mb-10'>
        <div className='lg:w-1/2 p-4 px-4 md:px-16'>
          <div className='relative w-full max-w-[500px] h-[300px]'>
            <Image src='/preach.webp' alt='Church service' fill sizes="(max-width: 768px) 100vw, 500px" className='object-cover' />
          </div>
        </div>
        <div className='lg:w-1/2 p-4 px-4 md:px-16'>
          <div className='relative w-full max-w-[500px] h-[300px]'>
            <Image src='/preach1.webp' alt='Church service' fill sizes="(max-width: 768px) 100vw, 500px" className='object-cover' />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Ministers;
