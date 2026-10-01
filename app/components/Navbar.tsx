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

type NavLink = { href: string; label: string; description?: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

const YOUTUBE = 'https://youtube.com/@winnersbaptistchurch1';

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    label: 'About',
    children: [
      { href: '/about-the-church', label: 'About the Church', description: 'Our story since 1964' },
      { href: '/ministries', label: 'Ministries', description: 'Find your place to serve' },
      { href: '/ministers', label: 'Leadership', description: 'Meet our pastors' },
      { href: '/diaconates', label: 'Diaconate', description: 'Our deacons and deaconesses' },
    ],
  },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
  {
    label: 'Communities',
    children: [
      { href: '/winnersbc-career', label: 'Winners BC Careers', description: 'Professional growth network' },
      { href: '/winners-fc', label: 'Winners FC', description: 'Reaching lives through football' },
    ],
  },
];

const LiveDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
  </span>
);

// Floating pill navigation that sits above every page.
const Navbar = () => {
  const pathname = usePathname();
  const [navMenu, setNavMenu] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isGroupActive = (links: NavLink[]) => links.some((link) => link.href === pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavMenu(false);
    const activeGroup = navItems.find((item) => 'children' in item && isGroupActive(item.children));
    setOpenGroup(activeGroup ? activeGroup.label : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock page scroll behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = navMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navMenu]);

  const desktopLinkClass = (active: boolean) =>
    `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      active ? 'bg-stone-100 text-ink' : 'text-stone-600 hover:bg-stone-100/70 hover:text-ink'
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-4">
        <nav
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-2 pr-2 transition-all duration-300 ${
            scrolled || navMenu
              ? 'bg-white/85 shadow-float ring-1 ring-black/5 backdrop-blur-xl'
              : 'bg-white shadow-card ring-1 ring-black/5'
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 rounded-full pr-2" aria-label="Winners Baptist Church home" onClick={() => setNavMenu(false)}>
            <span className="relative h-10 w-10">
              <Image src="/logo.webp" alt="" fill sizes="40px" className="object-contain" priority />
            </span>
            <span className="text-[0.95rem] font-semibold tracking-tight text-ink">
              Winners <span className="hidden sm:inline">Baptist Church</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) =>
              'children' in item ? (
                <li key={item.label} className="group relative">
                  <button type="button" aria-haspopup="true" className={desktopLinkClass(isGroupActive(item.children))}>
                    {item.label}
                    <ChevronDownIcon className="h-4 w-4 text-stone-400 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-3xl bg-white p-2 shadow-float ring-1 ring-black/5">
                      {item.children.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block rounded-2xl px-4 py-3 transition-colors ${isActive(link.href) ? 'bg-stone-100' : 'hover:bg-stone-50'}`}
                        >
                          <span className="block text-sm font-medium text-ink">{link.label}</span>
                          {link.description && <span className="mt-0.5 block text-xs text-stone-500">{link.description}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={desktopLinkClass(isActive(item.href))}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-1.5">
            <a
              href={YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-ink xl:inline-flex"
            >
              <LiveDot />
              Watch live
            </a>
            <Link href="/giving" className="btn-primary hidden !py-2.5 lg:inline-flex">
              Give
            </Link>
            <button
              type="button"
              onClick={() => setNavMenu(!navMenu)}
              aria-label={navMenu ? 'Close menu' : 'Open menu'}
              aria-expanded={navMenu}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-stone-100 transition-colors hover:bg-stone-200 lg:hidden"
            >
              <span className={`h-[1.5px] w-4 rounded-full bg-ink transition-transform duration-200 ${navMenu ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`h-[1.5px] w-4 rounded-full bg-ink transition-transform duration-200 ${navMenu ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {navMenu && (
        <div className="fixed inset-0 z-30 bg-ink/20 backdrop-blur-sm animate-fadeIn lg:hidden" onClick={() => setNavMenu(false)}>
          <div
            className="absolute inset-x-3 top-[4.75rem] max-h-[calc(100svh-5.5rem)] overflow-y-auto rounded-4xl bg-white p-3 shadow-float ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-1">
              {navItems.map((item) =>
                'children' in item ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                      aria-expanded={openGroup === item.label}
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-ink hover:bg-stone-50"
                    >
                      {item.label}
                      <ChevronDownIcon className={`h-5 w-5 text-stone-400 transition-transform ${openGroup === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openGroup === item.label && (
                      <div className="mx-2 mb-2 rounded-2xl bg-paper p-1.5">
                        {item.children.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setNavMenu(false)}
                            className={`block rounded-xl px-3.5 py-2.5 ${isActive(link.href) ? 'bg-white shadow-card' : ''}`}
                          >
                            <span className="block text-[0.95rem] font-medium text-ink">{link.label}</span>
                            {link.description && <span className="block text-xs text-stone-500">{link.description}</span>}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setNavMenu(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium ${isActive(item.href) ? 'bg-stone-100 text-ink' : 'text-ink hover:bg-stone-50'}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/giving" onClick={() => setNavMenu(false)} className="btn-primary">
                Give online
              </Link>
              <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <LiveDot />
                Watch live
              </a>
            </div>

            <div className="mt-3 rounded-2xl bg-paper px-4 py-3.5 text-sm text-stone-500">
              <p>5, Adebayo Adekoya Street, New Garage, Gbagada, Lagos</p>
              <a href="tel:+2349139402485" className="mt-1 inline-block font-medium text-ink">+234 913 9402 485</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
