'use client';

import Link from 'next/link';
import Carousel from './components/Carousel';
import Typewriter from './components/Typewriter';
import HomeBento from './components/HomeBento';
import CoreValues from './components/CoreValues';
import OurMinistries from './components/OurMinistries';
import JourneyToChrist from './components/JourneyToChrist';
import ChurchPictures from './components/ChurchPictures';
import JoinFamily from './components/JoinFamily';
import WorshipOnline from './components/WorshipOnline';
import ReadMore from './components/ReadMore';
import Location from './components/Location';
import { ArrowIcon } from './components/ui';

export default function HomeClient() {

  const churchIntro =
    'At Winners Baptist Church, we believe in God and are geared towards raising a godly generation, we are one body in Christ, relating in brotherly love and living as Christ has taught us to.We are in Christ therefore have become new creatures. A body devoted to the work of God, doing his will and walking in line with his commandments. A bible believing church committed to populate the kingdom of God. Here at Miracle Square, we hold discipleship classes to aid spiritual growth, organize the life of every christian and make us better versions of ourselves. We are grateful for the love God has showed upon us and we believe in the name of Jesus.';

  const aboutLinks = [
    { href: '/about-the-church', label: 'About the Church' },
    { href: '/ministers', label: 'Ministers' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/winnersbc-career', label: 'Winners BC Career' },
    { href: '/winners-fc', label: 'Winners FC' },
  ];

  return (
    <div className="overflow-x-hidden">
      <Carousel />

      <HomeBento />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Welcome home</p>
            <Typewriter />
            <div className="mt-6 max-w-xl">
              <ReadMore text={churchIntro} maxLength={220} />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-4xl bg-paper p-2">
              <p className="px-4 pb-2 pt-3 text-sm font-medium text-stone-500">Explore</p>
              <ul className="space-y-1">
                {aboutLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group flex items-center justify-between rounded-3xl bg-white px-5 py-4 text-lg font-medium tracking-tight text-ink shadow-card transition-all hover:shadow-card-hover">
                      {link.label}
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 transition-colors group-hover:bg-ink group-hover:text-white">
                        <ArrowIcon className="h-4 w-4" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <OurMinistries />

      <CoreValues />

      <JourneyToChrist />

      <ChurchPictures />

      <WorshipOnline />

      <JoinFamily />

      <Location />
    </div>
  );
}
