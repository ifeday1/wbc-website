'use client';

import Image from 'next/image';
import Link from 'next/link';

const JoinFamily = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Join the Winning<br />
              <span className="text-green-600">Family!</span>
            </h2>
            <blockquote className="text-lg text-gray-600 mb-8 italic">
              "For everyone born of God overcomes the world. This is the victory that has overcome the world."
              <span className="block mt-2 font-semibold text-green-600 not-italic">— 1 John 5:4</span>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.917C4.182 12.875 3.5 10.652 3.5 8.455c0-3.128 1.493-6.455 5.327-8.477A25.152 25.152 0 0112 3.5c2.213 0 4.326.568 6.167 1.527a25.16 25.16 0 014.245 3.918c.32.11.613.247.884.404a25.175 25.175 0 013.917 4.244c.87 1.652 1.593 3.832 1.593 6.064 0 2.197-.682 4.418-2.182 6.04a25.214 25.214 0 01-3.918 4.245 25.176 25.176 0 01-4.244 3.917 25.178 25.178 0 01-.884.404l-.022.012-.007.003-.003.001a.752.752 0 01-.695 0z"/>
                </svg>
                Join Us Today
              </Link>
              <Link 
                href="/giving"
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Give Online
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-gray-200">
              {[
                { number: '50+', label: 'Years' },
                { number: '500+', label: 'Members' },
                { number: '8+', label: 'Ministries' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Join.webp"
                  alt="Join the Winners Family"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
              
              {/* Floating Message */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-medium">
                  Become part of something greater
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFamily;