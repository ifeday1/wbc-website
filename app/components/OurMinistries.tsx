'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon, SectionHeading } from './ui';

const ministries = [
  {
    name: "Teenagers Ministry",
    shortName: "Teens",
    description: "Raising a Generation of trailblazers between ages 13-18, Intellectuals and hearts who longs for the things of God.",
    image: "/teen.webp",
  },
  {
    name: "Youth Ministry",
    shortName: "Youth",
    description: "Welcome to Winning Youth - Where Champions Are Forged!",
    image: "/youth.webp",
  },
  {
    name: "BSF",
    shortName: "BSF",
    description: "Baptist Student Fellowship is a division under missionary organization department.",
    image: "/bsf.webp",
  },
  {
    name: "Men's Fellowship",
    shortName: "MMU",
    description: "Building strong men of faith through discipleship and fellowship.",
    image: "/mmu.webp",
  },
  {
    name: "Women's Fellowship",
    shortName: "WMU",
    description: "Empowering women to walk in their calling and giftings.",
    image: "/wmu.webp",
  },
  {
    name: "Choir & Music",
    shortName: "Worship",
    description: "Leading the congregation in spirit and truth through worship.",
    image: "/carola4.webp",
  },
];

const OurMinistries = () => {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (direction: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="section bg-paper">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Get involved"
            title="Find your people"
            lead="Discover different ways to serve, grow, and connect within our church family."
          />
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/ministries" className="btn-light mr-2 shadow-card">
              All ministries
            </Link>
            {[-1, 1].map((direction) => (
              <button
                key={direction}
                type="button"
                onClick={() => scroll(direction as 1 | -1)}
                aria-label={direction === -1 ? 'Previous ministries' : 'Next ministries'}
                className="hidden h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-card transition-colors hover:bg-ink hover:text-white md:flex"
              >
                <ArrowIcon className={`h-4 w-4 ${direction === -1 ? 'rotate-180' : ''}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:scroll-px-8 sm:px-8 xl:scroll-px-[max(2rem,calc((100vw-80rem)/2+2rem))] xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {ministries.map((ministry) => (
          <Link
            key={ministry.name}
            href="/ministries"
            className="group relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-4xl bg-stone-200 sm:w-[46%] lg:w-[30%] xl:w-[23.5%]"
          >
            <Image
              src={ministry.image}
              alt={ministry.name}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <span className="chip absolute left-4 top-4">{ministry.shortName}</span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{ministry.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/75">{ministry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurMinistries;
