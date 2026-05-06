'use client';

import Image from 'next/image';
import Link from 'next/link';

const ministries = [
  {
    name: "Teenagers Ministry",
    shortName: "Teens",
    description: "Raising a Generation of trailblazers between ages 13-18, Intellectuals and hearts who longs for the things of God.",
    image: "/teen.webp",
    color: "blue"
  },
  {
    name: "Youth Ministry",
    shortName: "Youth",
    description: "Welcome to Winning Youth - Where Champions Are Forged!",
    image: "/youth.webp",
    color: "green"
  },
  {
    name: "BSF",
    shortName: "BSF",
    description: "Baptist Student Fellowship is a division under missionary organization department.",
    image: "/bsf.webp",
    color: "purple"
  },
  {
    name: "Men's Fellowship",
    shortName: "MMU",
    description: "Building strong men of faith through discipleship and fellowship.",
    image: "/mmu.webp",
    color: "amber"
  },
  {
    name: "Women's Fellowship",
    shortName: "WMU",
    description: "Empowering women to walk in their calling and giftings.",
    image: "/wmu.webp",
    color: "pink"
  },
  {
    name: "Choir & Music",
    shortName: "Worship",
    description: "Leading the congregation in spirit and truth through worship.",
    image: "/carola4.webp",
    color: "rose"
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-green-600",
    hover: "hover:bg-green-700",
    light: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
  },
  purple: {
    bg: "bg-purple-600",
    hover: "hover:bg-purple-700",
    light: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
  },
  amber: {
    bg: "bg-amber-600",
    hover: "hover:bg-amber-700",
    light: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
  },
  pink: {
    bg: "bg-pink-600",
    hover: "hover:bg-pink-700",
    light: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-600",
  },
  rose: {
    bg: "bg-rose-600",
    hover: "hover:bg-rose-700",
    light: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-600",
  },
};

const OurMinistries = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Ministries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover different ways to serve, grow, and connect within our church family.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => {
            const colors = colorClasses[ministry.color as keyof typeof colorClasses];
            return (
              <div 
                key={ministry.name}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={ministry.image}
                    alt={ministry.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Color Badge */}
                  <div className={`absolute top-4 left-4 ${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {ministry.shortName}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {ministry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {ministry.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity`} />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/ministries"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            View All Ministries
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurMinistries;