'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.346.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.346 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.346-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.346-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.95-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.078v-3.497h3.047v-2.275c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.262 2.686.262v2.955h-1.514c-1.514 0-1.99.943-1.99 1.913v2.479h3.312l-.532 3.497h-2.78v8.637C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26h5.304l.826-8.26H2.652l6.88 7.824-7.824 9.126h6.304l11.264-12.756L18.244 2.25zm-1.616 16.176h1.456L5.628 3.574H6.88l11.748 14.852z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Navbar = () => {
  const [eventDisplay, setEventDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setNavMenu(!navMenu);
  const toggleEvent = () => {
    setAboutDisplay(false);
    setEventDisplay(!eventDisplay);
  };
  const toggleAbout = () => {
    setEventDisplay(false);
    setAboutDisplay(!aboutDisplay);
  };

  return (
    <>
    
      {/* Main Navigation */}
      <nav className="fixed inset-x-0 top-0 z-40 h-12 md:h-16 px-4 md:px-12 transition-all duration-300 bg-white border-b border-transparent">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <Link href="/">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
               <Image src="/logo.webp" alt="logo" fill sizes="(max-width: 768px) 48px, 64px" className="object-contain" />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center list-none gap-6">
            <li className="cursor-pointer font-medium text-gray-700 hover:text-blue-600">
              <Link href="/">HOME</Link>
            </li>
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 py-5">
                ABOUT
                <ChevronDownIcon className="w-3 h-3" />
              </div>
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg w-48 py-2 z-50 hidden group-hover:block">
                <Link href="/about-the-church" className="block px-4 py-2 hover:text-blue-600 text-gray-800">About the Church</Link>
                <Link href="/ministries" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Ministries</Link>
                <Link href="/ministers" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Leadership</Link>
                <Link href="/diaconates" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Diaconate</Link>
              </div>
            </li>
            {/* <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 py-5">
                SERMONS
                <ChevronDownIcon className="w-3 h-3" />
              </div>
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg w-48 py-2 z-50 hidden group-hover:block">
                <Link href="/events" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Sunday Sermons</Link>
                <Link href="/events" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Wednesday Teaching</Link>
                <Link href="/events" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Special Programmes</Link>
              </div>
            </li> */}
            <li className="cursor-pointer font-medium text-gray-700 hover:text-blue-600 py-5">
              <Link href="/events">EVENTS</Link>
            </li>
            <li className="cursor-pointer font-medium text-gray-700 hover:text-blue-600 py-5">
              <Link href="/contact">CONTACT</Link>
            </li>
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 py-5">
                Winners BC Communities
                <ChevronDownIcon className="w-3 h-3" />
              </div>
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg w-48 py-2 z-50 hidden group-hover:block">
                <Link href="/winnersbc-career" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Winners BC Careers</Link>
                <Link href="/winners-fc" className="block px-4 py-2 hover:text-blue-600 text-gray-800">Winners FC</Link>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link href="/giving" className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
              GIVING
            </Link>
            <div onClick={toggleNavbar} className="lg:hidden text-2xl cursor-pointer text-blue-600">
              {navMenu ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
      </nav>

      {navMenu && (
        <div className="fixed inset-0 z-50 bg-gray-900 overflow-y-auto overflow-x-hidden">
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between p-4">
            <Link href="/" onClick={() => setNavMenu(false)}>
              <div className="w-12 h-12 relative">
                <Image src="/logo.webp" alt="logo" fill sizes="(max-width: 768px) 48px, 64px" className="object-contain" />
              </div>
            </Link>
            <button onClick={() => setNavMenu(false)} className="text-white p-2">
              <CloseIcon className="w-8 h-8" />
            </button>
          </div>

          {/* Quick Action Cards */}
          <div className="px-4 py-4 grid grid-cols-2 gap-4">
            <Link href="/giving" onClick={() => setNavMenu(false)} className="bg-blue-600 hover:bg-blue-700 rounded-lg p-4 text-center transition-colors">
              <span className="text-white font-semibold">Give Online</span>
            </Link>
             <a href="https://youtube.com/@winnersbaptistchurch1" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 rounded-lg p-4 text-center transition-colors">
              <span className="text-white font-semibold">Watch Live</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="px-4 py-4 space-y-2">
            <Link href="/" onClick={() => setNavMenu(false)} className="block w-full text-left text-white text-lg font-medium py-4 px-4 border-b border-gray-700">
              HOME
            </Link>
            
            {/* ABOUT Accordion */}
            <div className="border-b border-gray-700">
              <button onClick={toggleAbout} className="flex items-center justify-between w-full text-white text-lg font-medium py-4 px-4">
                <span className={aboutDisplay ? 'text-blue-400' : ''}>ABOUT</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${aboutDisplay ? 'rotate-180' : ''}`} />
              </button>
              {aboutDisplay && (
                <div className="pl-4 pb-4 space-y-3">
                  <Link href="/about-the-church" onClick={() => setNavMenu(false)} className="block text-gray-300 py-2 hover:text-white">About the Church</Link>
                  <Link href="/ministries" onClick={() => setNavMenu(false)} className="block text-gray-300 py-2 hover:text-white">Ministries</Link>
                  <Link href="/ministers" onClick={() => setNavMenu(false)} className="block text-gray-300 py-2 hover:text-white">Leadership</Link>
                  <Link href="/diaconates" onClick={() => setNavMenu(false)} className="block text-gray-300 py-2 hover:text-white">Diaconate</Link>
                </div>
              )}
            </div>

            <Link href="/events" onClick={() => setNavMenu(false)} className="block w-full text-left text-white text-lg font-medium py-4 px-4 border-b border-gray-700">
              EVENTS
            </Link>

            <Link href="/contact" onClick={() => setNavMenu(false)} className="block w-full text-left text-white text-lg font-medium py-4 px-4 border-b border-gray-700">
              CONTACT
            </Link>

            {/* Winners BC Communities Accordion */}
            <div className="border-b border-gray-700">
              <button onClick={toggleEvent} className="flex items-center justify-between w-full text-white text-lg font-medium py-4 px-4">
                <span className={eventDisplay ? 'text-blue-400' : ''}>Winners BC Communities</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${eventDisplay ? 'rotate-180' : ''}`} />
              </button>
              {eventDisplay && (
                <div className="pl-4 pb-4 space-y-3">
                  <Link href="/winnersbc-career" onClick={() => setNavMenu(false)} className="block text-gray-300 py-2 hover:text-white">Winners BC Careers</Link>
                  <Link href="/winners-fc" onClick={() => setNavMenu(false)} className="block text-gray-300 py-2 hover:text-white">Winners FC</Link>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Contact Info */}
          <div className="px-4 py-6 mt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">5, Adebayo Adekoya street<br />New Garage, Gbagada, Lagos</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;