'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

type TransitionStyle = 'fade-scale' | 'slide-parallax' | 'ken-burns' | 'cover-flow' | 'zoom-reveal' | 'slice-horizontal' | 'slice-vertical' | 'dissolve' | 'spiral-reveal' | 'diamond-open' | 'curtain-reveal' | 'crossfade';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [transitionStyle, setTransitionStyle] = useState<TransitionStyle>('fade-scale');
  
  const slides = [
    {
      image: '/Slide1.webp',
      title: 'WELCOME TO CHURCH',
      subtitle: 'Bringing souls to the heart of Christ',
    },
    {
      image: '/slide4.webp',
      title: '',
      subtitle: '',
    },
    {
      image: '/slide3.webp',
      title: 'THE WINNING FAMILY',
      subtitle: 'In His presence there is fullness of joy',
    },
  ];

  const transitionStyles: TransitionStyle[] = [
    'fade-scale', 
    'slide-parallax', 
    'ken-burns', 
    'cover-flow', 
    'zoom-reveal', 
    'slice-horizontal', 
    'slice-vertical',
    'dissolve',
    'spiral-reveal',
    'curtain-reveal',
    'crossfade'
  ];

  const getTransitionClass = (index: number, isActive: boolean): string => {
    const offset = index - currentSlide;
    const normalizedOffset = offset > 1 ? offset - slides.length : offset < -1 ? offset + slides.length : offset;
    
    switch (transitionStyle) {
      case 'fade-scale':
        if (isActive) return 'opacity-100 scale-100';
        return 'opacity-0 scale-110';
        
      case 'slide-parallax':
        if (isActive) return 'opacity-100 translate-x-0';
        return normalizedOffset > 0 ? 'opacity-0 translate-x-32' : 'opacity-0 -translate-x-32';
        
      case 'ken-burns':
        if (isActive) return 'opacity-100 scale-100';
        return 'opacity-0 scale-125';
        
      case 'cover-flow':
        if (isActive) return 'opacity-100 scale-100 rotate-y-0';
        const rotY = normalizedOffset > 0 ? 45 : -45;
        return `opacity-0 scale-75 rotate-y-${rotY}`;
        
      case 'zoom-reveal':
        if (isActive) return 'opacity-100 clip-path-inset-0';
        return 'opacity-0 clip-path-inset-full';
        
      case 'slice-horizontal':
        if (isActive) return 'opacity-100 translate-y-0';
        return normalizedOffset > 0 ? 'opacity-0 -translate-y-full' : 'opacity-0 translate-y-full';
        
      case 'slice-vertical':
        if (isActive) return 'opacity-100 skew-x-0';
        return normalizedOffset > 0 ? 'opacity-0 -skew-x-12' : 'opacity-0 skew-x-12';
        
      case 'dissolve':
        if (isActive) return 'opacity-100 blur-0';
        return 'opacity-0 blur-md';
        
      case 'spiral-reveal':
        if (isActive) return 'opacity-100 rotate-0 scale-100';
        return normalizedOffset > 0 ? 'opacity-0 rotate-180 scale-150' : 'opacity-0 -rotate-180 scale-150';
        
      case 'curtain-reveal':
        if (isActive) return 'opacity-100 translate-x-0';
        return normalizedOffset > 0 ? 'opacity-0 -translate-x-[120%]' : 'opacity-0 translate-x-[120%]';
        
      case 'crossfade':
        if (isActive) return 'opacity-100';
        return 'opacity-0 mix-blend-multiply';
        
      default:
        return isActive ? 'opacity-100' : 'opacity-0';
    }
  };

  const goToNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTransitionStyle((prev) => {
        const currentIndex = transitionStyles.indexOf(prev);
        return transitionStyles[(currentIndex + 1) % transitionStyles.length];
      });
    }
  }, [isAnimating, slides.length]);

  const goToPrev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTransitionStyle((prev) => {
        const currentIndex = transitionStyles.indexOf(prev);
        return transitionStyles[(currentIndex - 1 + transitionStyles.length) % transitionStyles.length];
      });
    }
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const timer = setInterval(goToNext, 8000);
    return () => clearInterval(timer);
  }, [goToNext]);

  useEffect(() => {
    const animTimer = setTimeout(() => setIsAnimating(false), 1200);
    return () => clearTimeout(animTimer);
  }, [currentSlide]);

  return (
    <div 
      className="relative w-full md:min-h-screen h-[400px] lg:h-[calc(100vh-80px)] overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${getTransitionClass(index, isActive)}`}
              style={{
                transitionDuration: '1200ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`flex flex-col items-center text-center text-white px-4 transition-all duration-700 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  {slide.title && (
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-2 tracking-wide">
                      <span className="inline-block">{slide.title}</span>
                    </h3>
                  )}
                  {slide.subtitle && (
                    <p className="mt-4 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto text-center font-light opacity-90">
                      <span className="inline-block">{slide.subtitle}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-70'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentSlide) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTransitionStyle(transitionStyles[index % transitionStyles.length]);
              }
            }}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;