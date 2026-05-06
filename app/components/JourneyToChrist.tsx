'use client';

import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Accept That You Are a Sinner",
    verse: "Romans 3:23",
    description: "For all have sinned and fall short of the glory of God",
    gradient: "from-slate-800 to-slate-900",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Accept Christ as Your Lord",
    verse: "John 3:16",
    description: "For God so loved the world that He gave His only begotten Son",
    gradient: "from-green-600 to-emerald-700",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.18 9 12 9 12s9-4.82 9-12z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Join a Fellowship",
    verse: "Acts 2:47",
    description: "Find a bible believing church around you",
    gradient: "from-pink-500 to-rose-600",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
];

const JourneyToChrist = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Discover the Journey to Christ
          </h2>
          <blockquote className="text-lg text-gray-600 max-w-3xl mx-auto italic">
            "God so loved the world that He gave His only begotten Son, that whoever believes in Him shall not perish but have eternal life."
            <span className="block mt-2 text-blue-600 font-semibold not-italic">— John 3:16</span>
          </blockquote>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} transition-all duration-500 group-hover:scale-105`} />
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`pattern-${index}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="5" cy="5" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-20">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 bg-white/20 p-3 rounded-xl w-fit backdrop-blur-sm">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">
                    {step.title}
                  </h3>

                  {/* Verse Reference */}
                  <p className="text-sm font-semibold text-white/80 mb-1">
                    {step.verse}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow on Hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Start Your Journey Today
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneyToChrist;