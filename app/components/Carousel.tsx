'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { image: '/Slide1.webp', caption: 'Bringing souls to the heart of Christ' },
  { image: '/slide3.webp', caption: 'In His presence there is fullness of joy' },
  { image: '/Pic.webp', caption: 'One body in Christ' },
];

// Home hero: a rounded photo card with a steady headline while the photos crossfade behind it.
const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section data-noreveal className="px-3 md:px-4">
      <div
        className="relative isolate flex h-[calc(100svh-6rem)] min-h-[560px] max-h-[820px] items-end overflow-hidden rounded-4xl bg-ink"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              priority={index === 0}
              className={`object-cover transition-transform duration-[7000ms] ease-out ${index === current ? 'scale-105' : 'scale-100'}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

        <div className="w-full p-6 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                Winners Baptist Church · Gbagada
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.5rem]">
                Welcome home.
              </h1>
              <p key={slides[current].caption} className="mt-5 max-w-lg text-lg text-white/75 animate-fadeIn md:text-xl">
                {slides[current].caption}. Join us this Sunday at Miracle Square.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/events" className="btn-light !px-7 !py-3.5">
                  Plan your visit
                </Link>
                <a href="https://youtube.com/@winnersbaptistchurch1" target="_blank" rel="noopener noreferrer" className="btn-outline-light !px-7 !py-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch online
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`relative h-14 w-20 overflow-hidden rounded-2xl ring-2 transition-all duration-300 ${index === current ? 'ring-white' : 'opacity-60 ring-transparent hover:opacity-100'}`}
                  aria-label={`Show photo ${index + 1}`}
                  aria-selected={index === current}
                  role="tab"
                >
                  <Image src={slide.image} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
