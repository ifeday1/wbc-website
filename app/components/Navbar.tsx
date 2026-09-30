'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
);

const aboutLinks = [
  { href: '/about-the-church', label: 'About the Church' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/ministers', label: 'Leadership' },
  { href: '/diaconates', label: 'Diaconate' },
];

const communityLinks = [
  { href: '/winnersbc-career', label: 'Winners BC Careers' },
  { href: '/winners-fc', label: 'Winners FC' },
];

const aboutRoutes = aboutLinks.map((link) => link.href);
const communityRoutes = communityLinks.map((link) => link.href);

const ActiveBar = () => (
  <span className="absolute bottom-3 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" />
);

const Navbar = () => {
  const pathname = usePathname();
  const [eventDisplay, setEventDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isAboutActive = aboutRoutes.includes(pathname);
  const isCommunityActive = communityRoutes.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavMenu(false);
    if (isAboutActive) setAboutDisplay(true);
    if (isCommunityActive) setEventDisplay(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock page scroll behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = navMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navMenu]);

  const toggleNavbar = () => setNavMenu(!navMenu);
  const toggleEvent = () => {
    setAboutDisplay(false);
    setEventDisplay(!eventDisplay);
  };
  const toggleAbout = () => {
    setEventDisplay(false);
    setAboutDisplay(!aboutDisplay);
  };

  const topLinkClass = (active: boolean) =>
    `relative flex items-center gap-1 px-3 py-6 text-sm font-medium tracking-wide transition-colors ${
      active ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-600'
    }`;

  const dropdown = (links: { href: string; label: string }[]) => (
    <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="rounded-2xl border border-gray-100 bg-white/95 p-2 shadow-xl shadow-blue-900/10 backdrop-blur">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
              isActive(link.href) ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  const mobileSubLink = (link: { href: string; label: string }) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setNavMenu(false)}
      className={`block rounded-lg px-3 py-2 ${isActive(link.href) ? 'bg-white/5 font-semibold text-fuchsia-400' : 'text-gray-300 hover:text-white'}`}
    >
      {link.label}
    </Link>
  );

  const mobileTopClass = (active: boolean) =>
    `flex items-center gap-2 w-full text-left text-lg font-medium py-4 px-4 border-b border-white/10 ${
      active ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400' : 'text-white'
    }`;

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-40 h-16 md:h-20 px-4 md:px-12 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-lg border-b border-gray-200/70 shadow-[0_8px_30px_-12px_rgba(30,64,175,0.18)]'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <Link href="/" aria-label="Winners Baptist Church home">
            <div className={`relative transition-all duration-300 ${scrolled ? 'w-11 h-11 md:w-14 md:h-14' : 'w-12 h-12 md:w-16 md:h-16'}`}>
              <Image src="/logo.webp" alt="logo" fill sizes="(max-width: 768px) 48px, 64px" className="object-contain" priority />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center list-none gap-1">
            <li>
              <Link href="/" className={topLinkClass(isActive('/'))}>
                HOME
                {isActive('/') && <ActiveBar />}
              </Link>
            </li>
            <li className="relative group">
              <button type="button" className={topLinkClass(isAboutActive)} aria-haspopup="true">
                ABOUT
                <ChevronDownIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                {isAboutActive && <ActiveBar />}
              </button>
              {dropdown(aboutLinks)}
            </li>
            <li>
              <Link href="/events" className={topLinkClass(isActive('/events'))}>
                EVENTS
                {isActive('/events') && <ActiveBar />}
              </Link>
            </li>
            <li>
              <Link href="/contact" className={topLinkClass(isActive('/contact'))}>
                CONTACT
                {isActive('/contact') && <ActiveBar />}
              </Link>
            </li>
            <li className="relative group">
              <button type="button" className={topLinkClass(isCommunityActive)} aria-haspopup="true">
                Winners BC Communities
                <ChevronDownIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                {isCommunityActive && <ActiveBar />}
              </button>
              {dropdown(communityLinks)}
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="https://youtube.com/@winnersbaptistchurch1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              Watch Live
            </Link>
            <Link href="/giving" className="hidden lg:inline-flex btn-primary !px-5 !py-2 text-sm">
              GIVING
            </Link>
            <button
              type="button"
              onClick={toggleNavbar}
              aria-label={navMenu ? 'Close menu' : 'Open menu'}
              aria-expanded={navMenu}
              className="lg:hidden rounded-full p-2 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {navMenu ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {navMenu && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-blue-950 animate-fadeIn [animation-duration:250ms]">
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between p-4">
            <Link href="/" onClick={() => setNavMenu(false)} aria-label="Winners Baptist Church home">
              <div className="w-12 h-12 relative">
                <Image src="/logo.webp" alt="logo" fill sizes="48px" className="object-contain" />
              </div>
            </Link>
            <button type="button" onClick={() => setNavMenu(false)} aria-label="Close menu" className="rounded-full p-2 text-white hover:bg-white/10">
              <CloseIcon className="w-7 h-7" />
            </button>
          </div>

          {/* Quick Action Cards */}
          <div className="px-4 py-4 grid grid-cols-2 gap-3">
            <Link href="/giving" onClick={() => setNavMenu(false)} className="rounded-2xl bg-gradient-to-r from-blue-600 to-fuchsia-600 p-4 text-center font-semibold text-white shadow-lg shadow-blue-500/30">
              Give Online
            </Link>
            <a href="https://youtube.com/@winnersbaptistchurch1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-4 font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Watch Live
            </a>
          </div>

          {/* Navigation Links */}
          <div className="px-4 py-2 space-y-1">
            <Link href="/" onClick={() => setNavMenu(false)} className={mobileTopClass(isActive('/'))}>
              {isActive('/') && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 shrink-0" />}
              HOME
            </Link>

            {/* ABOUT Accordion */}
            <div className="border-b border-white/10">
              <button type="button" onClick={toggleAbout} aria-expanded={aboutDisplay} className="flex items-center justify-between w-full text-white text-lg font-medium py-4 px-4">
                <span className={`flex items-center gap-2 ${isAboutActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400' : aboutDisplay ? 'text-blue-400' : ''}`}>
                  {isAboutActive && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 shrink-0" />}
                  ABOUT
                </span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${aboutDisplay ? 'rotate-180' : ''}`} />
              </button>
              {aboutDisplay && <div className="pl-4 pb-4 space-y-1">{aboutLinks.map(mobileSubLink)}</div>}
            </div>

            <Link href="/events" onClick={() => setNavMenu(false)} className={mobileTopClass(isActive('/events'))}>
              {isActive('/events') && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 shrink-0" />}
              EVENTS
            </Link>

            <Link href="/contact" onClick={() => setNavMenu(false)} className={mobileTopClass(isActive('/contact'))}>
              {isActive('/contact') && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 shrink-0" />}
              CONTACT
            </Link>

            {/* Winners BC Communities Accordion */}
            <div className="border-b border-white/10">
              <button type="button" onClick={toggleEvent} aria-expanded={eventDisplay} className="flex items-center justify-between w-full text-white text-lg font-medium py-4 px-4">
                <span className={`flex items-center gap-2 ${isCommunityActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400' : eventDisplay ? 'text-blue-400' : ''}`}>
                  {isCommunityActive && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 shrink-0" />}
                  Winners BC Communities
                </span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${eventDisplay ? 'rotate-180' : ''}`} />
              </button>
              {eventDisplay && <div className="pl-4 pb-4 space-y-1">{communityLinks.map(mobileSubLink)}</div>}
            </div>
          </div>

          {/* Bottom Contact Info */}
          <div className="px-4 py-6 mt-4 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">5, Adebayo Adekoya street<br />New Garage, Gbagada, Lagos</p>
            <a href="tel:+2349139402485" className="mt-2 inline-block text-sm font-medium text-blue-300">+234 913 9402 485</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
