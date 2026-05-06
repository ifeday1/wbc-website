'use client';

const values = [
  {
    title: 'Love',
    description: 'Encouraging ourselves in brotherly love and bringing hearts to Christ.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.18 9 12 9 12s9-4.82 9-12z" />
      </svg>
    ),
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Care',
    description: 'As we value others in humility, we are ready to help and share with others.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.5M19.125 12h3.75M12 3.75h3.75" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Concern for People',
    description: 'Imbibing the spirit of kindness and generosity in us.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128l9.163 2.346a2 2 0 002.437 1.683l.456 1.274a2 2 0 01-.548 2.225l-.93.465a2 2 0 01-2.225.548l-1.274-.456a2 2 0 00-1.683 2.437L15 23.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a6 6 0 106 6M9 12v6m0-6v-6" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Commitment',
    description: 'Putting Christ first in all we do!',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-500',
  },
];

const CoreValues = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Supporting our adopted Mission Statement, the goals of <span className="font-semibold text-blue-600">Winners Baptist Church</span> comprises:
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 opacity-20">
                {index + 1}
              </div>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="text-xl md:text-2xl text-white font-medium italic max-w-3xl mx-auto">
            "We are one body in Christ, relating in brotherly love and living as Christ has taught us."
          </blockquote>
          <p className="text-blue-200 mt-4">— Winners Baptist Church Mission</p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;