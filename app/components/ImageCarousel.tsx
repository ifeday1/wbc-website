'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: '/preach.png', alt: 'Preaching' },
    { image: '/youth.png', alt: 'Youth' },
    { image: '/preach1.png', alt: 'Preaching' },
    { image: '/envangelism.png', alt: 'Evangelism' },
    { image: '/wmu.png', alt: 'Women Ministry' },
    { image: '/mmu.png', alt: 'Men Ministry' },
    { image: '/bsf.png', alt: 'BSF' },
    { image: '/carola4.png', alt: 'Carol Service' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrev = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((currentSlide + 1) % slides.length);

  return (
    <div className="w-full py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">Church in Pictures</h2>
      
      <div className="relative max-w-5xl mx-auto px-12">
        <div className="flex items-center justify-center gap-4 overflow-hidden perspective-container">
          {slides.map((slide, index) => {
            const offset = index - currentSlide;
            const adjustedOffset = offset < -slides.length / 2 
              ? offset + slides.length 
              : offset > slides.length / 2 
                ? offset - slides.length 
                : offset;
            
            const isVisible = Math.abs(adjustedOffset) <= 2;
            if (!isVisible) return null;

            const translateX = adjustedOffset * 320;
            const scale = 1 - Math.abs(adjustedOffset) * 0.2;
            const opacity = Math.max(0, 1 - Math.abs(adjustedOffset) * 0.4);
            const zIndex = slides.length - Math.abs(adjustedOffset);
            const rotateY = adjustedOffset * 25;

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  width: '280px',
                  height: '320px',
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === currentSlide}
                  />
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-20"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;