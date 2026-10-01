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
  { href: 'https://www.instagram.com/winnersbaptistchurch?igsh=enhwNGZubmV1cWNs', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.346.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.346 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.346-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.346-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.95-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { href: 'https://www.facebook.com/winnersbaptistchurch?mibextid=ZbWKwL', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.078v-3.497h3.047v-2.275c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.262 2.686.262v2.955h-1.514c-1.514 0-1.99.943-1.99 1.913v2.479h3.312l-.532 3.497h-2.78v8.637C19.612 23.027 24 18.062 24 12.073z' },
  { href: 'https://x.com/BaptistWinners?t=koTxXLFTs0KciGhHFJqpOw&s=09', label: 'X (Twitter)', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { href: 'https://youtube.com/@winnersbaptistchurch1', label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
];

const Footer = () => {
  return (
    <footer className="px-3 pb-3 pt-16 md:px-4 md:pb-4 md:pt-24">
      <div className="relative overflow-hidden rounded-4xl bg-ink text-white">
        <div className="pointer-events-none absolute -right-40 -top-56 h-[32rem] w-[32rem] rounded-full bg-gold-500/20 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          {/* Closing statement */}
          <div className="flex flex-col gap-8 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between md:py-20">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              Come as you are.<br />
              <span className="text-white/40">There&apos;s a seat for you.</span>
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/events" className="btn-light !px-7 !py-3.5">Plan your visit</Link>
              <Link href="/giving" className="btn-outline-light !px-7 !py-3.5">Give online</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 py-14 lg:grid-cols-12">
            <div className="col-span-2 lg:col-span-4">
              <Link href="/" className="flex items-center gap-3">
                <span className="rounded-full bg-white p-1">
                  <Image src="/logo.webp" alt="" width={40} height={40} />
                </span>
                <span className="text-lg font-semibold tracking-tight text-white">Winners Baptist Church</span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
                A place of worship, community, and faith. Join us as we grow together in Christ.
              </p>
              <div className="mt-6 flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] transition-colors hover:bg-white hover:[&>svg]:fill-ink"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4 transition-colors">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title} className="lg:col-span-2">
                <h3 className="mb-4 text-sm font-medium tracking-normal text-white/40">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 lg:col-span-4">
              <h3 className="mb-4 text-sm font-medium tracking-normal text-white/40">Visit us</h3>
              <div className="rounded-3xl bg-white/[0.06] p-5 ring-1 ring-inset ring-white/10">
                <ul className="space-y-3">
                  {serviceTimes.map((service) => (
                    <li key={service.day} className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-white">{service.day}</span>
                      <span className="text-white/60">{service.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-white/60">
                  <p>5, Adebayo Adekoya street, New Garage, Gbagada, Lagos</p>
                  <a href="tel:+2349139402485" className="block font-medium text-white transition-colors hover:text-gold-300">
                    +234 913 9402 485
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-center text-sm text-white/40 md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} Winners Baptist Church. All Rights Reserved.</p>
            <p>
              Designed by{' '}
              <Link href="https://web-portfilo-git-master-ifeday1.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white">
                Ifeday Concepts
              </Link>{' '}
              and built by{' '}
              <Link href="https://www.bestricky.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-white">
                BestRicky Web Agency
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
