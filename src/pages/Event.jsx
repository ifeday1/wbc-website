import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCalendar from '../components/EventCalender';

const Event = () => {
  return (
    <>
      <Navbar />
      <>
        <div class='relative pt-20 pb-24 text-c'>
          <EventCalendar />
        </div>
      </>
      <Footer />
    </>
  );
};

export default Event;
