import Link from 'next/link';
import Image from 'next/image';
import Carousel from './components/Carousel';
import ImageCarousel from './components/ImageCarousel';
import Typewriter from './components/Typewriter';
import WorshipSchedule from './components/WorshipSchedule';
import CoreValues from './components/CoreValues';
import OurMinistries from './components/OurMinistries';
import JourneyToChrist from './components/JourneyToChrist';
import ChurchPictures from './components/ChurchPictures';
import JoinFamily from './components/JoinFamily';
import WorshipOnline from './components/WorshipOnline';
import ReadMore from './components/ReadMore';
import Location from './components/Location';

export default function Home() {

  const loremIpsum =
    'At Winners Baptist Church, we believe in God and are geared towards raising a godly generation, we are one body in Christ, relating in brotherly love and living as Christ has taught us to.We are in Christ therefore have become new creatures. A body devoted to the work of God, doing his will and walking in line with his commandments. A bible believing church committed to populate the kingdom of God. Here at Miracle Square, we hold discipleship classes to aid spiritual growth, organize the life of every christian and make us better versions of ourselves. We are grateful for the love God has showed upon us and we believe in the name of Jesus.';

  return (
    <div>
      <Carousel />
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Typewriter />
        <p className="mt-6 text-xl md:text-2xl text-gray-600">
          Sundays at 8:00 AM - Miracle Square
        </p>
        <div className="mt-8">
          <ReadMore text={loremIpsum} maxLength={150} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/about-the-church"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            LEARN MORE
          </Link>
          <Link
            href="https://youtube.com/@winnersbaptistchurch1"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Watch Online
          </Link>
        </div>
      </div>

      <ImageCarousel />

      <WorshipSchedule />

      <CoreValues />

      <OurMinistries />

      <JourneyToChrist />

      <ChurchPictures />

      <JoinFamily />

      <WorshipOnline />

      <Location />
    </div>
  );
}