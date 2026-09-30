'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Who We Are',
    links: [
      { href: '/about-the-church', label: 'About Us' },
      { href: '/about-the-church#our-history', label: 'Our History' },
      { href: '/ministers', label: 'Leadership' },
      { href: '/diaconates', label: 'Diaconate' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { href: '/ministries', label: 'Church Ministries' },
      { href: '/events', label: 'Events' },
      { href: '/giving', label: 'Giving' },
      { href: '/winnersbc-career', label: 'Careers' },
      { href: '/winners-fc', label: 'Winners FC' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
];

const serviceTimes = [
  { day: 'Sunday', time: '7:00 · 8:00 · 9:00 AM' },
  { day: 'Wednesday', time: 'Victory Hour · 6:00 PM' },
];

const socials = [
  { href: 'https://www.instagram.com/winnersbaptistchurch?igsh=enhwNGZubmV1cWNs', label: 'Instagram', hover: 'hover:bg-[#E4405F]', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.346.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.346 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.346-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.346-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.95-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { href: 'https://www.facebook.com/winnersbaptistchurch?mibextid=ZbWKwL', label: 'Facebook', hover: 'hover:bg-[#1877F2]', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.078v-3.497h3.047v-2.275c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.262 2.686.262v2.955h-1.514c-1.514 0-1.99.943-1.99 1.913v2.479h3.312l-.532 3.497h-2.78v8.637C19.612 23.027 24 18.062 24 12.073z' },
  { href: 'https://x.com/BaptistWinners?t=koTxXLFTs0KciGhHFJqpOw&s=09', label: 'X (Twitter)', hover: 'hover:bg-black', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { href: 'https://youtube.com/@winnersbaptistchurch1', label: 'YouTube', hover: 'hover:bg-[#FF0000]', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      {/* Brand accent line and glow */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-purple-600" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image src="/logo.webp" alt="Winners Baptist Church" width={72} height={72} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              A place of worship, community, and faith. Join us as we grow together in Christ.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent ${social.hover}`}
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white">
                      <span className="h-px w-3 bg-gray-600 transition-all duration-300 group-hover:w-5 group-hover:bg-fuchsia-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Visit Us</h3>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <ul className="space-y-3">
                {serviceTimes.map((service) => (
                  <li key={service.day} className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium text-white">{service.day}</span>
                    <span className="text-gray-400">{service.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
                <p className="flex items-start gap-2 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  5, Adebayo Adekoya street, New Garage, Gbagada, Lagos
                </p>
                <a href="tel:+2349139402485" className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 shrink-0 text-fuchsia-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +234 913 9402 485
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Winners Baptist Church. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed by <Link href="https://web-portfilo-git-master-ifeday1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Ifeday Concepts
            </Link> and built by <Link href="https://www.bestricky.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              BestRicky Web Agency
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
