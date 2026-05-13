'use client';

import Link from 'next/link';
import { useState } from 'react';
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const aboutLinks = [
    { href: '/about-the-church', label: 'About the Church' },
    { href: '/ministers', label: 'Ministers' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/winnersbc-career', label: 'Winners BC Career' },
    { href: '/winners-fc', label: 'Winners FC' },
  ];

  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Typewriter />
        <p className="mt-6 text-xl md:text-2xl text-gray-600">
          Sundays at - Miracle Square
        </p>
        <div className="mt-8">
          <ReadMore text={loremIpsum} maxLength={150} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {/* Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              LEARN MORE
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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