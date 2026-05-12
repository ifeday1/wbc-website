'use client';

import Link from 'next/link';

const services = [
  {
    day: 'SUN',
    fullDay: 'Sunday',
    color: 'blue',
    services: [
      { name: 'First Service', time: '7:00 AM', type: 'English', icon: '⟡' },
      { name: 'Second Service', time: '8:00 AM', type: 'Combined', icon: '⟡' },
      { name: 'Third Service', time: '9:00 AM', type: 'Yoruba', icon: '⟡' },
    ]
  },
  {
    day: 'WED',
    fullDay: 'Wednesday',
    color: 'green',
    services: [
      { name: 'Victory Hour', time: '6:00 PM', type: 'Midweek Service', icon: '⚔' },
      
    ]
  },
  // {
  //   day: 'FRI',
  //   fullDay: 'Friday',
  //   color: 'purple',
  //   services: [
  //     { name: 'Evangelism', time: '6:00 PM', type: 'Outreach', icon: '📢' },
  //   ]
  // },
  // {
  //   day: 'SAT',
  //   fullDay: 'Saturday',
  //   color: 'orange',
  //   services: [
  //     { name: 'Choir Practice', time: '4:00 PM', type: 'Worship Team', icon: '🎵' },
  //   ]
  // },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    light: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
  },
  green: {
    bg: 'bg-green-600',
    hover: 'hover:bg-green-700',
    light: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
  },
  purple: {
    bg: 'bg-purple-600',
    hover: 'hover:bg-purple-700',
    light: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
  },
  orange: {
    bg: 'bg-orange-500',
    hover: 'hover:bg-orange-600',
    light: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
  },
};

const WorshipSchedule = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Worship Avenue
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for transformative worship experiences throughout the week. 
            Each service is designed to bring you closer to God and build community.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div 
                key={service.day}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${colors.hover} transform hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Day Badge */}
                <div className={`${colors.bg} text-white px-4 py-3 flex items-center justify-between`}>
                  <span className="text-xl font-bold tracking-wider">{service.day}</span>
                  <span className="text-sm opacity-90">{service.fullDay}</span>
                </div>

                {/* Services List */}
                <div className="p-4 space-y-3">
                  {service.services.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 group-hover:bg-white/80 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.type}</p>
                      </div>
                      <span className={`text-sm font-medium ${colors.text}`}>{item.time}</span>
                    </div>
                  ))}
                </div>

                {/* Corner Accent */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 ${colors.bg} opacity-10 rounded-tl-full`} />
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { number: '50+', label: 'Years of Ministry' },
            { number: '500+', label: 'Members' },
            { number: '8', label: 'Active Ministries' },
            { number: 'Daily', label: 'Worship' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/events"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            View Full Schedule
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorshipSchedule;