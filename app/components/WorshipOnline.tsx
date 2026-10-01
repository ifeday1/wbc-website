'use client';

import Image from 'next/image';
import { ArrowIcon, Icon, SectionHeading } from './ui';

const platforms = [
  {
    name: 'YouTube',
    description: 'Join our worship service via YouTube',
    image: '/ww.webp',
    link: 'https://youtube.com/@winnersbaptistchurch1',
  },
  {
    name: 'Facebook',
    description: 'Join our worship service via Facebook Live',
    image: '/ww1.webp',
    link: 'https://www.facebook.com/winnersbaptistchurch',
  },
];

const WorshipOnline = () => {
  return (
    <section className="section pt-0">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Online"
            title="Worship from anywhere"
            lead="Can't make it to church? Join us online and experience the presence of God from anywhere in the world."
          />
          <p className="inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            Live every Sunday · 8:00 AM WAT
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 md:gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[16/10] overflow-hidden rounded-4xl bg-stone-200"
            >
              <Image
                src={platform.image}
                alt={platform.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-float backdrop-blur transition-transform duration-300 group-hover:scale-110">
                <Icon name="play" className="ml-0.5 h-6 w-6" />
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">{platform.name}</h3>
                  <p className="mt-1 text-white/75">{platform.description}</p>
                </div>
                <span className="chip shrink-0">Watch <ArrowIcon className="h-3.5 w-3.5" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorshipOnline;
