'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/">
              <Image src="/logo.webp" alt="Winners Baptist Church" width={80} height={80} className="mb-4" />
            </Link>
            <p className="text-sm text-gray-300 mt-4">
              A place of worship, community, and faith. Join us as we grow together in Christ.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Who We Are</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-the-church" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/about-the-church#our-history" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Our History
                </Link>
              </li>
              <li>
                <Link href="/ministers" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Leadership
                </Link>
              </li>
              <li>
                <Link href="/diaconates" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Diaconate
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Ministries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Church Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Events
                </Link>
              </li>
              <li>
                <Link href="/giving" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Giving
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Join Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/winnersbc-career" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Careers
                </Link>
              </li>
              <li>
                <Link href="/winners-fc" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Winners FC
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">»</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-lg">
              <p className="text-white font-medium">
                5, Adebayo Adekoya street, New Garage, Gbagada, Lagos
              </p>
              <span className="hidden md:inline text-gray-500">|</span>
              <p className="text-white font-medium">+234 913 9402 485</p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/winnersbaptistchurch?igsh=enhwNGZubmV1cWNs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#E4405F] hover:bg-[#C13584] rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.346.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.346 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.346-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.346-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.95-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/winnersbaptistchurch?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1877F2] hover:bg-[#0d5ec2] rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.078v-3.497h3.047v-2.275c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.262 2.686.262v2.955h-1.514c-1.514 0-1.99.943-1.99 1.913v2.479h3.312l-.532 3.497h-2.78v8.637C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://x.com/BaptistWinners?t=koTxXLFTs0KciGhHFJqpOw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black hover:bg-opacity-70 rounded-lg transition-colors"
                aria-label="X (Twitter)"
              >
                <svg 
    viewBox="0 0 24 24" 
    fill="white" 
    className="w-6 h-6"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
              </a>
              <a
                href="https://youtube.com/@winnersbaptistchurch1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FF0000] hover:bg-[#CC0000] rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-400">
            © Winners Baptist Church. All Rights Reserved 2026. Designed By <Link href="https://web-portfilo-git-master-ifeday1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Ifeday Concepts
            </Link> and build by <Link href="https://www.bestricky.vercel.app" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">
              BestRicky Web Agency
            </Link>
          </p>
          {/* <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              Cookie Preferences
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;