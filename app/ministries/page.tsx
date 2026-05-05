import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Ministries - Winners Baptist Church',
  description: 'Discover our various ministries at Winners Baptist Church, Bariga',
};

const Ministries = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className='relative h-[250px] md:h-[350px]'>
        <Image src='/ministry.webp' alt='Church building' fill sizes="100vw" className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div className='text-center text-white px-4'>
            <h2 className='text-1xl font-bold md:text-4xl'>MINISTRIES</h2>
            <p className='mt-2 text-[10px] md:text-[15px]'>
              <span className='text-4xl font-semibold'>T</span>
              herefore, my beloved brethren, be steadfast, immovable, always
              <br></br>
              abounding in the work of the the Lord, knowing that your toil is
              <br></br>
              not in vain in the Lord. 1st Corinthians 15:58
            </p>
          </div>
        </div>
      </div>

      {/* Teenagers Ministry */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>TEENAGERS MINISTRY</h4>
          <p className='mt-2 text-left text-gray-700'>
            Raising a Generation of trailblazers between ages 13-18,
            Intellectuals and hearts who longs for the things of God and as the
            presence of God never leaves our midst, we welcome all secondary
            school students, secondary school leavers and undergraduates. The
            word of the Lord remains in our hearts.
          </p>
        </div>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
            <Image src='/teen.webp' alt='Teenagers ministry' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
      </div>

      {/* Children Ministry */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
            <Image src='/youth.webp' alt='Children ministry' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>CHILDREN MINISTRY</h4>
          <p className='mt-2 text-left text-gray-700'>
            Vision: To nurture a generation of children who love and follow
            Jesus, cultivating a foundation of faith, character, and service.
            <br></br>
            Mission: Empowering children to discover and grow in their
            relationship with God through age-appropriate teaching, engaging
            activities, and a loving community. Core Values: Love and Grace.
            <br></br>
            Faith Formation: Fostering a deep understanding of God's love and
            biblical principles, laying the groundwork for a lifelong faith
            journey.<br></br> Engaging Curriculum: Children Department is part
            of of the Family Life Education Division of the Nigerian Baptist
            Convention.<br></br>
            Winners Baptist Children Department is under the Leadership of Rev.
            Mrs. Esther Oladeni, the Family Life Coordinator. We come together
            to fellowship every sunday both for Combined and Separate services,
            by 8 a.m and 9a.m. respectively
          </p>
        </div>
      </div>

      {/* Youth Ministry */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>YOUTH MINISTRY</h4>
          <p className='mt-2 text-left text-gray-700'>
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
            beyond, Winning Youth!
          </p>
        </div>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
            <Image src='/Teen.webp' alt='Youth ministry' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
      </div>

      {/* MMU Ministry */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
            <Image src='/mmu.webp' alt='MMU ministry' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>MMU MINISTRY</h4>
          <p className='mt-2 text-left text-gray-700'>
            Welcome to MMU Ministry, Committed to nurturing faith, fostering
            fellowship, and serving with compassion, MMU Ministry stands as a
            beacon of spiritual growth and empowerment. Through meaningful
            gatherings, heartfelt worship, and impactful outreach initiatives,
            we strive to inspire and uplift each member on their journey of
            faith. Join us as we seek to glorify God and spread His love to all.
          </p>
        </div>
      </div>

      {/* WMU Ministry */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>WMU MINISTRY</h4>
          <p className='mt-2 text-left text-gray-700'>
            Her purpose is to build lives who will emulate the spirit of our
            Lord and Savior Jesus Christ and promote Christian Mission through
            WMU Organizations SUNBEAM BAND, GIRL AUXILLARY, LYDIA AUXILLARY, and
            WOMEN'S MISSIONARY SOCIETY. Our aim and objectives is soul winning
            for JESUS CHRIST. Our Fundamentals are Prayer, Bible and Mission
            study, stewardship and service. The women, young ladies, and
            children gather on their meeting day to learn how to fellowship with
            God through prayer and studying Gods word. This is the organization
            of baptized married women of all ages. The WMS objectives are
            achieved through meetings in churches, camp, leadership workshop and
            retreats. The WMS watchword is 'laborers together with God' (1
            Corinthians 3:9). Our colors are purple, white and blue. Purple
            signifies royalty, white for purity and blue for love of God and
            humanity.
          </p>
        </div>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
            <Image src='/wmu.webp' alt='WMU ministry' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
      </div>

      {/* Evangelism Ministry */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
             <Image src='/envangelism.webp' alt='Evangelism ministry' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>EVANGELISM MINISTRY</h4>
          <p className='mt-2 text-left text-gray-700'>
            Embracing the spirit of outreach and spreading the message of faith,
            our Evangelism Ministry at Winners Baptist Church stands as a beacon
            of hope and compassion in our community. Committed to sharing the
            transformative power of God's love, we embark on a journey of
            service and discipleship, reaching out to hearts seeking solace and
            salvation. Through prayer, fellowship, and unwavering dedication, we
            strive to illuminate paths with the light of Christ, inviting all to
            experience His grace and mercy. Join us as we walk hand in hand,
            sharing the Gospel and nurturing souls on their spiritual journey.
            Together, let's shine brightly as ambassadors of faith, embodying
            the love that knows no bounds.
          </p>
        </div>
      </div>

      {/* Baptist Student Fellowship */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>BAPTIST STUDENT FELLOWSHIP</h4>
          <p className='mt-2 text-left text-gray-700'>
            Baptist Student Fellowship (BSF) is a division under missionary
            organization department of Nigeria Baptist Convention that is
            responsible for ministering to students. To lead students to a
            commitment to Jesus Christ as Saviour and Lord, involve them in
            biblical truth and Christian Discipleship and also to lead them to
            relate academic disciplines to their christian faith. Motto: By this
            all men shall know that ye are my disciples; if ye have love one to
            another (John 13:35).
          </p>
        </div>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
             <Image src='/bsf.webp' alt='Baptist Student Fellowship' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
      </div>

      {/* Royal Ambassador */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
             <Image src='/ra.webp' alt='Royal Ambassadors' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>ROYAL AMBASSADOR</h4>
          <p className='mt-2 text-left text-gray-700'>
            The royal ambassador is a ministry under the Men Missionary Union of
            the Nigeria Baptist Convention. This ministry is mostly for boys
            under the ages of 10-25 years which is divided into the intermediate
            and the senior royal ambassador with the aim of touching life of
            boys and impacting the eternity of men. The motto of the Royal
            Ambassador can be found in the book of 2 Corinthians 5:20 which says
            "WE ARE AMBASSADORS FOR CHRIST".
          </p>
        </div>
      </div>

      {/* Girls Auxiliary */}
      <div className='flex flex-col md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>GIRLS AUXILIARY</h4>
          <p className='mt-2 text-left text-gray-700'>
            Baptist Student Fellowship (BSF) is a division under missionary
            organization department of Nigeria Baptist Convention that is
            responsible for ministering to students. To lead students to a
            commitment to Jesus Christ as Saviour and Lord, involve them in
            biblical truth and Christian Discipleship and also to lead them to
            relate academic disciplines to their christian faith.
            Motto: By this all men shall know that ye are my disciples; if ye
            have love one to another.
          </p>
        </div>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
             <Image src='/ga.webp' alt='Girls Auxiliary' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
      </div>

      {/* Lydia Auxiliary */}
      <div className='flex flex-col mb-10 md:flex-row pt-10 p-4 px-4 md:px-16'>
        <div className='md:w-1/2 p-4'>
          <div className='relative w-full h-[300px]'>
             <Image src='/lydia.webp' alt='Lydia Auxiliary' fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover' />
          </div>
        </div>
        <div className='md:w-1/2 p-4'>
          <h4 className='text-lg font-bold text-blue-600'>LYDIA AUXILIARY</h4>
          <p className='mt-2 text-left text-gray-700'>
            The Lydia Auxiliary is a dynamic ministry operating under the
            umbrella of the Women Missionary Union within the Nigeria Baptist
            Convention. Dedicated to nurturing young women from adolescence
            until marriage, this auxiliary provides a platform for personal
            development, spiritual growth, and service to others.
            <br></br>
            Mission: The primary aim of the Lydia Auxiliary is to guide and
            empower young ladies to uphold purity and righteousness, preparing
            them to be vessels of honor in service to the Lord Jesus Christ.
            Rooted in biblical teachings, the ministry seeks to instill values
            of integrity, virtue, and spiritual insight into the lives of its
            members. Membership Steps: The Lydia Auxiliary offers a structured
            progression for its members, comprising three distinct stages:
            Service Award Honour Award The Career Missionary Motto and
          </p>
        </div>
      </div>

      
    </>
  );
};

export default Ministries;
