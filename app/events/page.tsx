import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events - Winners Baptist Church',
  description: 'Upcoming events and services at Winners Baptist Church, Bariga',
};

const events = [
  {
    title: 'Sunday Combined Service',
    description: 'Join us every Sunday for our combined worship service as we gather in unity to praise God, hear His word, and grow together in faith.',
    time: '8:00 AM',
    location: 'Main Sanctuary',
    day: 'SUN',
    fullDay: 'Sunday',
    color: 'blue',
    icon: '🌟',
    features: ['Holy Communion', 'Family Worship', 'Children Church'],
  },
  {
    title: 'Wednesday Victory Hour',
    description: 'Mid-week service for spiritual empowerment. Come experience divine encounter, powerful teaching, and healing.',
    time: '6:00 PM',
    location: 'Main Sanctuary',
    day: 'WED',
    fullDay: 'Wednesday',
    color: 'purple',
    icon: '⚔',
    features: ['Prayer Meeting', 'Bible Study', 'Healing Service'],
  },
  {
    title: 'English Service',
    description: 'Separate English language service with contemporary worship, in-depth Bible teaching, and community fellowship.',
    time: '7:00 AM',
    location: 'Main Sanctuary',
    day: 'SUN',
    fullDay: 'Sunday',
    color: 'green',
    icon: '📖',
    features: ['Contemporary Worship', 'Kids Ministry', 'Light Breakfast'],
  },
  {
    title: 'Yoruba Service',
    description: 'Separate Yoruba language service featuring traditional worship, powerful preaching, and cultural expressions of faith.',
    time: '9:00 AM',
    location: 'Main Sanctuary',
    day: 'SUN',
    fullDay: 'Sunday',
    color: 'amber',
    icon: '🎶',
    features: ['Traditional Music', 'Cultural Worship', 'Sunday School'],
  },
];

const colorClasses: Record<string, { bg: string, hover: string, light: string, border: string, text: string, gradient: string }> = {
  blue: {
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    light: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
  },
  purple: {
    bg: 'bg-purple-600',
    hover: 'hover:bg-purple-700',
    light: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
  },
  green: {
    bg: 'bg-green-600',
    hover: 'hover:bg-green-700',
    light: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
  },
  amber: {
    bg: 'bg-amber-500',
    hover: 'hover:bg-amber-600',
    light: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-500',
  },
};

export default function Events() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[350px]">
        <Image
          src="/church.webp"
          alt="Winners Baptist Church"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">Our Services & Events</h1>
            <blockquote className="text-sm md:text-lg text-white/90 italic max-w-2xl mx-auto">
              "Not forsaking the assembling of ourselves together, as the manner of some is, but exhorting one another: and so much the more, as ye see the day approaching."
              <span className="block mt-1 md:mt-2 not-italic font-semibold">— Hebrews 10:25</span>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Weekly Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Weekly Gatherings
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for powerful worship services and events. Everyone is welcome!
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {events.map((event, index) => {
              const colors = colorClasses[event.color as keyof typeof colorClasses];
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${colors.border}`}
                >
                  {/* Card Header with Day Badge */}
                  <div className={`${colors.gradient} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
                    
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`${colors.bg} text-white px-3 py-1 rounded-lg text-sm font-bold tracking-wider`}>
                            {event.day}
                          </span>
                          <span className="text-white/80 text-sm font-medium">{event.fullDay}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      </div>
                      <div className="text-4xl opacity-80 group-hover:scale-110 transition-transform">
                        {event.icon}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-5 h-5 ${colors.text}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6m-3 0a3 3 0 100-6 3 3 0 000 6zm0 9a9 9 0 100-18 9 9 0 000 18z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Time</p>
                          <p className="font-semibold text-gray-800">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-5 h-5 ${colors.text}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                          <p className="font-semibold text-gray-800">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {event.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-3 py-1 ${colors.light} ${colors.text} rounded-full font-medium`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colors.gradient} w-0 group-hover:w-full transition-all duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plan Your Visit</h2>
          <p className="text-xl text-white/90 mb-8">
            We'd love to welcome you this Sunday. Whether you're new or have been coming for years, 
            there's a place for you in our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6m-3 0a3 3 0 100-6 3 3 0 000 6zm0 9a9 9 0 100-18 9 9 0 000 18z" />
              </svg>
              Get Directions
            </Link>
            <a
               href="https://youtube.com/@winnersbaptistchurch1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white hover:bg-blue-800 font-semibold py-3 px-8 rounded-lg transition-colors border border-blue-400 inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Live
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
