import React from 'react';
import Navbar from '../components/Navbar';
import Pastor1 from '../assests/pastor2.png';
import Pastormrs from '../assests/pastormrs.png';
import CImage from '../assests/church.png';
import Preach from '../assests/preach.png';
import Preach1 from '../assests/preach1.png';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

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
            Counselling; other counselling services and lots more. He’s married
            to his heart-throb Esther Adegbenjo and they are blessed with
            biological children and many spiritual children.
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
            Revd. Adegbenjo Esther Oladeni is a Baptist-trained pastor. She is
            currently the Teenagers’ Pastor of Winners Baptist Church, Bariga
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

      <div class='flex flex-col lg:flex-row pt-10 justify-between mb-10'>
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
