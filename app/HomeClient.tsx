'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Carousel from './components/Carousel';
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

export default function HomeClient() {

  const churchIntro =
    'At Winners Baptist Church, we believe in God and are geared towards raising a godly generation, we are one body in Christ, relating in brotherly love and living as Christ has taught us to.We are in Christ therefore have become new creatures. A body devoted to the work of God, doing his will and walking in line with his commandments. A bible believing church committed to populate the kingdom of God. Here at Miracle Square, we hold discipleship classes to aid spiritual growth, organize the life of every christian and make us better versions of ourselves. We are grateful for the love God has showed upon us and we believe in the name of Jesus.';

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

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
      <section className="relative">
        {/* Soft brand glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 max-w-xl rounded-full bg-gradient-to-r from-blue-200/50 via-fuchsia-200/40 to-purple-200/50 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" />
            Welcome Home
          </span>
          <Typewriter />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base md:text-lg text-gray-600">
            <span className="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-fuchsia-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sundays at 8:00 AM
            </span>
            <span className="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-fuchsia-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Miracle Square
            </span>
          </div>
          <div className="mx-auto mt-8 max-w-2xl text-lg">
            <ReadMore text={churchIntro} maxLength={150} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Dropdown */}
            <div ref={dropdownRef} className="relative w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                className="btn-primary w-full sm:w-auto"
              >
                EXPLORE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute inset-x-0 sm:inset-x-auto sm:left-0 mx-auto mt-3 w-64 rounded-2xl border border-gray-100 bg-white p-2 text-left shadow-xl shadow-blue-900/10 z-30 animate-fadeIn [animation-duration:200ms]">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
              className="btn-outline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Online
            </Link>
          </div>
        </div>
      </section>

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
