'use client';

import Image from 'next/image';
import Link from 'next/link';

const Location = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Meeting Point
          </h2>
          <p className="text-lg text-gray-600">
            Join us at Miracle Square
          </p>
        </div>

        {/* Top Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Address & Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Worship Center</p>
                  <h3 className="text-2xl font-bold text-gray-800">Winners Baptist Church</h3>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-800 font-medium">
                      5, Adebayo Adekoya Street<br />
                      New Garage, Bariga, Lagos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6m-3 0a3 3 0 100-6 3 3 0 000 6zm0 9a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service Times</p>
                    <p className="text-gray-800 font-medium">
                      Sundays: 7:00 AM - 12:00 PM<br />
                      Wednesdays: 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.08-1.011.27l-.579 1.173a2.25 2.25 0 01-.659 1.06l-1.623.538v6.852c0 .515-.348.965-.816 1.079l-3.852 1.852a.75.75 0 01-.816 0l-3.852-1.852c-.468-.114-.816-.564-.816-1.079V11.91a2.25 2.25 0 01-.659-1.06l-1.623-.538a2.25 2.25 0 01-1.011-.27l-.579-1.173a.748.748 0 01-.852-1.091V4.875c0-8.284 6.716-15 15-15h2.25A2.25 2.25 0 0122.5 6.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact</p>
                    <p className="text-gray-800 font-medium">
                      +234 913 9402 485<br />
                      winnersbaptistchurch5@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="https://www.google.com/maps/place/Winners+Baptist+Church+(Miracle+Square)/@6.5474605,3.3911729,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8d31dbe5a22f:0xe8057f7d3f4dc808!8m2!3d6.5474605!4d3.3937478!16s%2Fg%2F11gmbpxwxz?hl=en&entry=ttu"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75v1.5m2.25.75H6.75m-3.75 0V4.5h-1.5v3h1.5zm0 1.5h.008v.008H6.75V9zm0 1.5h.008v.008H6.75v-.008zM12 15a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
                Get Directions
              </Link>
            </div>
          </div>

          {/* Church Image */}
          <div className="relative h-[300px] lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/church1.webp"
              alt="Winners Baptist Church"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-white/90 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                Miracle Square
              </span>
            </div>
          </div>
        </div>

        {/* Full Width Map */}
        <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.6787073070925!2d3.3937478!3d6.5474605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d31dbe5a22f%3A0xe8057f7d3f4dc808!2sWinners%20Baptist%20Church%20(Miracle%20Square)!5e0!3m2!1sen!2sng!4v1713547200000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Winners Baptist Church Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;