'use client';

import Link from 'next/link';
import { ArrowIcon, SectionHeading } from './ui';

const services = [
  {
    day: 'Sunday',
    services: [
      { name: 'First Service', time: '7:00 AM', type: 'English' },
      { name: 'Second Service', time: '8:00 AM', type: 'Combined' },
      { name: 'Third Service', time: '9:00 AM', type: 'Yoruba' },
    ],
  },
  {
    day: 'Wednesday',
    services: [
      { name: 'Victory Hour', time: '6:00 PM', type: 'Midweek Service' },
    ],
  },
];

const WorshipSchedule = () => {
  return (
    <section className="section border-t border-stone-200 bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Worship Avenue"
            title="Gather with us through the week"
            lead="Join us for transformative worship experiences throughout the week. Each service is designed to bring you closer to God and build community."
          />
          <Link href="/events" className="link-arrow mt-8">
            View Full Schedule
            <ArrowIcon />
          </Link>
        </div>

        <div className="space-y-10 lg:col-span-7">
          {services.map((group) => (
            <div key={group.day}>
              <h3 className="font-display text-2xl text-ink">{group.day}</h3>
              <ul className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
                {group.services.map((item) => (
                  <li key={item.name} className="flex items-center gap-6 py-5">
                    <span className="w-24 shrink-0 font-display text-2xl text-brand-800 tabular-nums">{item.time}</span>
                    <span className="flex-1">
                      <span className="block font-semibold text-ink">{item.name}</span>
                      <span className="block text-sm text-stone-500">{item.type}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorshipSchedule;
