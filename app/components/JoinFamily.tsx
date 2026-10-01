'use client';

import Image from 'next/image';
import Link from 'next/link';

const JoinFamily = () => {
  return (
    <section className="px-3 md:px-4">
      <div className="grid items-center gap-10 overflow-hidden rounded-4xl bg-paper p-3 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white">
          <Image
            src="/join.webp"
            alt="Join the Winners Family"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-6"
          />
        </div>

        <div className="px-4 pb-10 lg:px-0 lg:pb-0 lg:pr-14">
          <p className="eyebrow mb-5">Become part of something greater</p>
          <h2 className="heading-xl">
            Join the winning <span className="text-gold-500">family.</span>
          </h2>
          <figure className="mt-8">
            <blockquote className="text-xl leading-relaxed text-stone-600">
              &ldquo;For everyone born of God overcomes the world. This is the victory that has overcome the world.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-stone-400">1 John 5:4</figcaption>
          </figure>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary !px-7 !py-3.5">
              Join us today
            </Link>
            <Link href="/giving" className="btn-light !px-7 !py-3.5 shadow-card">
              Give online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFamily;
