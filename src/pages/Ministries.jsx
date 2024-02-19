import React from 'react';
import Navbar from '../components/Navbar';
import ChurchImage from '../assests/church.png';
import Teens from '../assests/Teens.svg';
import Mmu from '../assests/mmu.svg';
import Wmu from '../assests/wmu.svg';
import Ra from '../assests/ra.svg';
import Ga from '../assests/ga.svg';
import Lydia from '../assests/lydia.svg';
import Bsf from '../assests/bsf.svg';
import Evangelism from '../assests/evangelism.svg';
import Footer from '../components/Footer';

const Ministries = () => {
  return (
    <>
      <Navbar />
      <div class='relative pt-20'>
        <img src={ChurchImage} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white pt-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>MINISTRIES</h2>
            <p class='mt-2 text-[10px] md:text-[15px]'>
              <span className=' text-[10px] md:text-4xl font-semibold '>T</span>
              herefore, my beloved brethren, be steadfast, immovable, always
              <br></br>
              abounding in the work of the the Lord, knowing that your toil is
              <br></br>
              not in vain in the Lord. 1st Corinthians 15:58
            </p>
          </div>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>TEENAGERS MINISTRY</h4>
          <p class='mt-2 text-left'>
            Raising a Generation of trailblazers between ages 13-18,
            Intellectuals and hearts who longs for the things of God and as the
            presence of God never leaves our midst, we welcome all secondary
            school students, secondary school leavers and undergraduates. The
            word of the Lord remains in our hearts.
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='teenagers'
            class='w-[600px] h-[auto] pb-1 mb:pb-48'
          />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>CHILDREN MINISTRY</h4>
          <p class='mt-2 text-left'>
            Vision: To nurture a generation of children who love and follow
            Jesus, cultivating a foundation of faith, character, and service.
            Mission: Empowering children to discover and grow in their
            relationship with God through age-appropriate teaching, engaging
            activities, and a loving community. Core Values: Love and Grace.
            Faith Formation: Fostering a deep understanding of God's love and
            biblical principles, laying the groundwork for a lifelong faith
            journey. ENGAGING CURRICULUM: Children Department is part of of the
            Family Life Education Division of the Nigerian Baptist Convention.
            Winners Baptist Children Department is under the Leadership of Rev.
            Mrs. Esther Oladeni, the Family Life Coordinator. We come together
            to fellowship every sunday both for Combined and Separate services,
            by 8 a.m and 9a.m. respectively
          </p>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>YOUTH MINISTRY</h4>
          <p class='mt-2 text-left'>
            Welcome to Winning Youth - Where Champions Are Forged! Winning Youth
            Family We are thrilled to welcome you to the Winning Youth
            department, a dynamic and empowering community where champions are
            forged, dreams are realized, and excellence is celebrated. Our
            department is more than just a fellowship; it's a gateway to a world
            of opportunities, growth, and the limitless potential that resides
            within each of our youth members Winning Youth is not just an
            organization; it's a movement. It's a call to embrace your
            potential, pursue your dreams, and stand as a testament to the
            extraordinary capabilities within each one of us. Together, let's
            continue to redefine what it means to be a champion! To victory and
            beyond, Winning Youth
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Teens}
            alt='youth'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img src={Mmu} alt='mmu' class='w-[600px] h-[auto] pb-1 mb:pb-48' />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>MMU MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>WMU MINISTRY</h4>
          <p class='mt-2 text-left'>
            Her purpose is to build lives who will emulate the spirit of our
            Lord and Savior Jesus Christ and promote Christian Mission through
            WMU Organizations SUNBEAM BAND, GIRL AUXILLARY, LYDIA AUXILLARY, and
            WOMEN’S MISSIONARY SOCIETY. Our aim and objectives is soul winning
            for JESUS CHRIST. Our Fundamentals are Prayer, Bible and Mission
            study, stewardship and service. The women, young ladies, and
            children gather on their meeting day to learn how to fellowship with
            God through prayer and studying Gods word. This is the organization
            of baptized married women of all ages. The WMS objectives are
            achieved through meetings in churches, camp, leadership workshop and
            retreats. The WMS watchword is ‘’ laborers together with God ‘’ (1
            Corinthians 3:9). Our colors are purple, white and blue. Purple
            signifies royalty, white for purity and bluefor love of God and
            humanity.
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Wmu}
            alt='Wmu'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img
            src={Evangelism}
            alt='Evangelism'
            class='w-[600px] h-[auto] pb-1 mb:pb-48'
          />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>EVANGELISM MINISTRY</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>BSF </h4>
          <p class='mt-2 text-left'>
            Baptist Student Fellowship(BSF)is a division under missionary
            organization department of Nigeria Baptist Convention that is
            responsible for ministering to students.To lead students to a
            commitment to Jesus Christ as Saviour and Lord,Involve them in
            biblical truth and Christian Discipleship and also to lead them to
            relate academic disciplines to their christian faith.
            Motto;John13:35 By this all men shall know that ye are my
            disciples;if ye have love one to another.
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Bsf}
            alt='Bsf'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img
            src={Ra}
            alt='Royal Ambassdor'
            class='w-[600px] h-[auto] pb-1 mb:pb-48'
          />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>ROYAL AMBASSADOR</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
      </div>

      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>GA </h4>
          <p class='mt-2 text-left'>
            Baptist Student Fellowship(BSF)is a division under missionary
            organization department of Nigeria Baptist Convention that is
            responsible for ministering to students.To lead students to a
            commitment to Jesus Christ as Saviour and Lord,Involve them in
            biblical truth and Christian Discipleship and also to lead them to
            relate academic disciplines to their christian faith.
            Motto;John13:35 By this all men shall know that ye are my
            disciples;if ye have love one to another.
          </p>
        </div>
        <div class='md:w-1/2 p-4'>
          <img
            src={Ga}
            alt='Girls Auxilary'
            class='w-[600px] h-[auto] pb-1 pl-1 md:pl-20 mb:pb-48'
          />
        </div>
      </div>
      {/* new */}
      <div class='flex flex-col md:flex-row pt-10  p-4 px-4 md:px-16'>
        <div class='md:w-1/2 p-4'>
          <img
            src={Lydia}
            alt='Lyida'
            class='w-[600px] h-[auto] pb-1 mb:pb-48'
          />
        </div>
        <div class='md:w-1/2 p-4'>
          <h4 class='text-lg font-bold text-blue'>LYDIA</h4>
          <p class='mt-2 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            orci feugiat, bibendum mauris vel, ultrices ipsum. Quisque luctus
            ipsum id justo vestibulum, at bibendum ipsum viverra. Maecenas
            venenatis arcu at libero euismod, sed fermentum ligula lobortis.
            Nulla vitae sapien eget enim vestibulum volutpat. In hac habitasse
            platea dictumst. In vel mi vitae est placerat tempus ut eget sapien.
            Nam eu felis quis libero viverra tincidunt nec eu metus. Integer
            accumsan, justo eu posuere bibendum, mi nulla vulputate urna, nec
            volutpat sapien felis vel nulla. Nullam consequat magna vel ex
            dignissim, eget sodales tortor facilisis. Vivamus vehicula euismod
            ex, eu ultricies dui. Integer suscipit nulla eget augue facilisis,
            sed euismod ipsum rhoncus. Ut sit amet lacinia mi. Nullam auctor,
            libero et tincidunt congue, lorem velit ullamcorper sapien, ut
            accumsan dui quam id tortor. Nullam nec diam a purus pharetra
            mattis. Nam maximus dapibus velit, id cursus dolor mollis et.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ministries;
