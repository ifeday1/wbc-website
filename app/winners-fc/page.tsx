import React from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/Wcar.webp', alt: 'Training session focus' },
  { src: '/Wcar1.webp', alt: 'Team drill' },
  { src: '/Wcar2.webp', alt: 'Match day action' },
  { src: '/Wcar3.webp', alt: 'Coaching session' },
];

const WinnersFC = () => {
  return (
    <>
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-b-[3rem] pt-16 pb-20 px-6 overflow-hidden">
          {/* Optional background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-200 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center justify-center lg:justify-start mb-6">
                  <span className="text-sm font-semibold tracking-wide px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg">
                    Winners FC
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                  Reaching out to
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Lives through Football
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg">
                  Building character and community through the beautiful game, fostering growth and positive impact in our community.
                </p>

                {/* Optional CTA */}
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Join the Team
                  </button>
                  <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
                    Learn More
                  </button>
                </div> */}
              </div>

              {/* Image Content */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  <Image
                    src="/winnfc.webp"
                    alt="Winners FC Hero"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl "
                    priority
                  />
                  {/* Optional overlay */}
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="relative w-full md:w-1/2 h-64">
              <Image
                src="/win1.webp"
                alt="Community Outreach"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <article className="w-full md:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed">
                Winners Football Club is a prominent Evangelism arm of Winners
                Baptist Church, part of the Winners Community Group. The major
                objective of the club is to engage young and adult guys by offering
                a platform based on Christ-centered beliefs. 
              </p>
            </article>
          </div>
        </section>

        {/* Content Section 2 (Reversed) */}
        <section className="container mx-auto px-6 py-20 bg-gray-50">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
            <article className="w-full md:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed">
                The group aims to shape individuals into responsible, ethical, and 
                resilient members of society by combining sportsmanship with spiritual 
                direction. Our commitment to character development makes it an 
                important component of the community.
              </p>
            </article>
            <div className="relative w-full md:w-1/2 h-64">
              <Image
                src="/win2.webp"
                alt="Mentorship Program"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue text-center mb-16">
            Picture excerpts from our training session
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-64">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      
    </>
  );
};

export default WinnersFC;