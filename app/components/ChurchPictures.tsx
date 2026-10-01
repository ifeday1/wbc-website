'use client';

import Image from 'next/image';
import { SectionHeading } from './ui';

const gallery = [
  { src: '/church1.webp', alt: 'Worship Service' },
  { src: '/slide3.webp', alt: 'Congregation' },
  { src: '/Preach1.webp', alt: 'Preaching' },
  { src: '/youth.webp', alt: 'Youth Service' },
];

const ChurchPictures = () => {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gallery"
          title="Church in pictures"
          lead="Have a glimpse of what our worship service looks like"
        />

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-4xl bg-stone-200 md:row-span-2 md:aspect-auto">
            <Image
              src="/Pic.webp"
              alt="Winners Baptist Church Service"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {gallery.map((img) => (
            <div key={img.src} className="group relative aspect-square overflow-hidden rounded-3xl bg-stone-200 md:aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="chip absolute bottom-3 left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchPictures;
