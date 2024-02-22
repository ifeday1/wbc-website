import React from 'react';
import Navbar from '../components/Navbar';

import ChurchImage from '../assests/church.png';
import Footer from '../components/Footer';
import Pastor from '../assests/Pastor.jpeg';

const Aboutthechurch = () => {
  return (
    <>
      <Navbar />

      <div class='relative pt-20'>
        <img src={ChurchImage} alt='church building' />
        <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div class='text-center text-white pt-24'>
            <h2 class='text-1xl font-bold md:text-4xl '>ABOUT THE CHURCH</h2>
            <p class='mt-2 text-[10px] md:text-[15px]'>Additional text here</p>
          </div>
        </div>
      </div>

      <div class=' bg-white p-4 px-4 md:px-16'>
        <h3 class='text-lg font-bold text-blue md:text-2xl'>HISTORY</h3>
        <p class='mt-2 text-left'>
          “Then the eleven disciples went to Galilee, to the mountain where
          Jesus had told them to go. When they saw him, they worshipped him; but
          some doubted. Then, Jesus came to them and said, “All authority in
          heaven and on earth has been given to me. Therefore go and make
          disciples of all nations, baptizing them in the name of the Father and
          of the son and the Holy Spirit, and teaching them to obey everything I
          have commanded you. And surely I am with you always, to the very end
          of the age” (Matthew 28:16 -20). <br></br>
          <br></br>
          It may not matter where you started; what matters is where you end. In
          response to the above instruction Jesus Christ gave the disciples, and
          having realized that the instruction was and is not only to the
          disciples, the Church Training Programme unit, now known as
          Discipleship Training Ministry, of Somolu Baptist Church, now Christ
          Victory Baptist Church, Somolu was inspired by the Holy Spirit to go
          to Apelehin Area to start a church. To pursue the vision, on 18 March
          1964, the Church Training Programme unit of Christ Victory Baptist
          Church came for evangelism at the Apelehin area of Bariga, Lagos,
          Nigeria. The Church started in a shop located at Shogbamu Street. The
          church kept on growing physically and spiritually as new members were
          joined. Hence, when the shop could not contain the members, in 1972,
          they agreed to move from the shop to where the church is, by the grace
          of God, at No 5, Adebayo Adekoya Street, Near Jolad Hospital, Bariga.
          <br></br>
          <br></br>
          Winners Baptist Church, Bariga, is made up of Units and Organisations.
          Some of them include: The Youth Organisation of the Church, also known
          as The Winning Youths is vibrantly doing well. The Baptist Students
          Fellowship, known as the Winning Students, is exceptionally balanced
          academically and spiritually. The Teens Ministry of the Church, known
          as The Winning Teens are extraordinarily wonderful. The Children
          Ministry, known as The Winning Children are spiritually growing in
          grace and wisdom. The Women Missionary Organization, known as the
          Winning Women are shining Stars for the Lord. The Men Missionary
          Union, known as the Winning Men are doing great for the Lord. The
          winners’ Voices, that is the church Choir, are glorious in their deeds
          and ministration. It will interest you to know that the Church has a
          Career Community, through which a good number of youths have been
          assisted to secure jobs. The Winners Football Team are strong and
          striving among local football teams, and it has been a platform for
          recruiting footballers for international teams. There are lots of
          things to know about Winners Baptist Church, which you may not know
          until you become part of this caring, loving, concern for people’s
          welfare family.
        </p>
      </div>

      <div class=''></div>

      <div class='flex '>
        <div className='flex flex-col'>
          <div class='flex-1 p-4 px-4 md:px-16'>
            <h3 class='text-lg font-bold text-blue'>Our Vision</h3>
            <p class='mt-2'>
              To raise a transformed community of people - <br></br>a blameless
              Church who will positively transform her generation.
            </p>
          </div>
          <div class='flex-1 p-4 px-4 md:px-16'>
            <h3 class='text-lg font-bold text-blue'>Our Mission</h3>
            <p class='mt-2'>
              Bringing people to Jesus and membership in His family; developing
              <br></br>
              them to Christ-like maturity, and to equip them for the ministries
              <br></br>
              in the Church, and their life's missions in the world in order to
              <br></br>
              glorify the Lord's name now and in future
            </p>
          </div>
          <div class='flex-1 p-4 px-4 md:px-16'>
            <h3 class='text-lg font-bold text-blue'>Core Values</h3>
            <p class='mt-2'>
              Love, Care, Concern for People's Welfare, Commitment and Undecided
              <br></br>
              Loyalty to Jesus Christ and His teaching.
            </p>
          </div>
        </div>

        <div class='flex-1 p-4'>
          <img src={Pastor} alt='Image 1' class=' w-32 h-32' />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutthechurch;
