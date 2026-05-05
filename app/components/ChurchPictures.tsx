'use client';

import Image from 'next/image';

const ChurchPictures = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Church in Pictures
          </h2>
          <p className="text-lg text-gray-600">
            Have a glimpse of what our worship service looks like
          </p>
        </div>

        {/* Main Image */}
        <div className="relative w-full">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Pic.webp"
              alt="Winners Baptist Church Service"
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating Stats Card */}
          {/* <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-6 z-10">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">Members</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-500">Ministries</div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Gallery Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { src: '/church1.webp', alt: 'Worship Service' },
            { src: '/slide3.webp', alt: 'Congregation' },
            { src: '/preach1.webp', alt: 'Preaching' },
            { src: '/youth.webp', alt: 'Youth Service' },
          ].map((img, index) => (
            <div 
              key={index}
              className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchPictures;