'use client';

import Link from 'next/link';
import { ArrowIcon } from './ui';

const steps = [
  {
    number: "01",
    title: "Accept That You Are a Sinner",
    verse: "Romans 3:23",
    description: "For all have sinned and fall short of the glory of God",
  },
  {
    number: "02",
    title: "Accept Christ as Your Lord",
    verse: "John 3:16",
    description: "For God so loved the world that He gave His only begotten Son",
  },
  {
    number: "03",
    title: "Join a Fellowship",
    verse: "Acts 2:47",
    description: "Find a bible believing church around you",
  },
];

const JourneyToChrist = () => {
  return (
    <section className="px-3 md:px-4">
      <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-16 text-white sm:px-10 md:py-24 lg:px-14">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold-500/25 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow-dark mb-5">New beginnings</p>
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
                Discover the journey to Christ
              </h2>
            </div>
            <figure className="lg:col-span-5">
              <blockquote className="text-lg leading-relaxed text-white/70">
                &ldquo;God so loved the world that He gave His only begotten Son, that whoever believes in Him shall not perish but have eternal life.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium text-gold-300">John 3:16</figcaption>
            </figure>
          </div>

          <ol className="mt-14 grid gap-3 md:grid-cols-3 md:gap-4">
            {steps.map((step) => (
              <li key={step.number} className="flex min-h-[240px] flex-col justify-between rounded-3xl bg-white/[0.06] p-7 ring-1 ring-inset ring-white/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-ink">{step.number}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/60">{step.description}</p>
                  <p className="mt-3 text-sm font-medium text-gold-300">{step.verse}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Link href="/contact" className="btn-light !px-7 !py-3.5">
              Start your journey today
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyToChrist;
