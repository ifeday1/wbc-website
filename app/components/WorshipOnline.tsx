'use client';

import Image from 'next/image';

const platforms = [
  {
    name: 'YouTube',
    description: 'Join our worship service via YouTube',
     image: '/ww.webp',
     link: 'https://youtube.com/@winnersbaptistchurch1',
    color: 'red',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    description: 'Join our worship service via Facebook Live',
     image: '/ww1.webp',
    link: 'https://www.facebook.com/winnersbaptistchurch',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.078v-3.497h3.047v-2.275c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.262 2.686.262v2.955h-1.514c-1.514 0-1.99.943-1.99 1.913v2.479h3.312l-.532 3.497h-2.78v8.637C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
];

const colorClasses = {
  red: {
    bg: 'bg-red-600',
    hover: 'hover:bg-red-700',
    border: 'border-red-200',
    text: 'text-red-600',
    glow: 'shadow-red-500/25',
  },
  blue: {
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    border: 'border-blue-200',
    text: 'text-blue-600',
    glow: 'shadow-blue-500/25',
  },
};

const WorshipOnline = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Worship with Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can't make it to church? Join us online and experience the presence of God from anywhere in the world.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform) => {
            const colors = colorClasses[platform.color as keyof typeof colorClasses];
            return (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Platform Badge */}
                  <div className={`absolute top-4 left-4 ${colors.bg} text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2`}>
                    {platform.icon}
                    {platform.name}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {platform.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                    Click here to join
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              </a>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Live services every Sunday at 8:00 AM (WAT)
          </p>
          <div className="flex justify-center gap-2 mt-2">
            {[1, 2, 3].map((i) => (
              <span key={i} className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            ))}
            <span className="text-green-600 text-sm font-medium ml-2">Live</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipOnline;