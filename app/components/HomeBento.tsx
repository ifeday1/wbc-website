'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon, Icon } from './ui';

// Weekly gatherings in Lagos time (WAT, UTC+1, no daylight saving). day: 0 = Sunday.
const gatherings = [
  { day: 0, hour: 7, name: 'First Service', type: 'English' },
  { day: 0, hour: 8, name: 'Second Service', type: 'Combined' },
  { day: 0, hour: 9, name: 'Third Service', type: 'Yoruba' },
  { day: 3, hour: 18, name: 'Victory Hour', type: 'Midweek service' },
];

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WAT_OFFSET_MS = 60 * 60 * 1000;

const formatHour = (hour: number) => `${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;

// Finds the next gathering after `now`, returning it with the milliseconds until it starts.
function nextGathering(now: Date) {
  const lagosNow = new Date(now.getTime() + WAT_OFFSET_MS);
  let best: { gathering: (typeof gatherings)[number]; msUntil: number } | null = null;
  for (const gathering of gatherings) {
    const start = new Date(lagosNow);
    start.setUTCHours(gathering.hour, 0, 0, 0);
    start.setUTCDate(start.getUTCDate() + ((gathering.day - lagosNow.getUTCDay() + 7) % 7));
    if (start <= lagosNow) start.setUTCDate(start.getUTCDate() + 7);
    const msUntil = start.getTime() - lagosNow.getTime();
    if (!best || msUntil < best.msUntil) best = { gathering, msUntil };
  }
  return best!;
}

function formatCountdown(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1440) / 60);
  const mins = minutes % 60;
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m`;
}

const NextServiceTile = () => {
  // Computed after mount so the server render never disagrees with the visitor's clock
  const [next, setNext] = useState<ReturnType<typeof nextGathering> | null>(null);

  useEffect(() => {
    const update = () => setNext(nextGathering(new Date()));
    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tile flex min-h-[260px] flex-col justify-between bg-ink text-white lg:col-span-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/60">Next gathering</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium tabular-nums text-white">
          {next ? `in ${formatCountdown(next.msUntil)}` : '—'}
        </span>
      </div>
      <div>
        <p className="text-sm text-gold-300">{next ? DAY_NAMES[next.gathering.day] : 'This week'}</p>
        <p className="mt-1 text-4xl font-semibold tracking-[-0.04em] tabular-nums md:text-5xl">
          {next ? formatHour(next.gathering.hour) : 'Sunday'}
        </p>
        <p className="mt-2 text-white/70">
          {next ? `${next.gathering.name} · ${next.gathering.type}` : 'Services at 7, 8 & 9 AM'}
        </p>
      </div>
      <a
        href="https://www.google.com/maps/place/Winners+Baptist+Church+(Miracle+Square)/@6.5474605,3.3911729,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-gold-300"
      >
        Get directions <ArrowIcon />
      </a>
    </div>
  );
};

const HomeBento = () => {
  return (
    <section className="px-3 pt-3 md:px-4 md:pt-4" data-noreveal>
      <div className="grid gap-3 md:gap-4 lg:grid-cols-12">
        {/* Service times */}
        <div className="tile flex flex-col lg:col-span-5 lg:row-span-2">
          <div className="flex items-center justify-between">
            <span className="icon-tile">
              <Icon name="clock" className="h-5 w-5" />
            </span>
            <Link href="/events" className="link-arrow">
              Full schedule <ArrowIcon />
            </Link>
          </div>
          <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-ink md:text-4xl">Service times</h2>
          <p className="mt-2 text-stone-500">Everyone is welcome. Come as you are.</p>

          <div className="mt-8 space-y-6 lg:mt-auto lg:pt-8">
            {[0, 3].map((day) => (
              <div key={day}>
                <p className="text-xs font-medium uppercase tracking-wider text-stone-400">{DAY_NAMES[day]}</p>
                <ul className="mt-2 space-y-2">
                  {gatherings
                    .filter((g) => g.day === day)
                    .map((g) => (
                      <li key={g.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 shadow-card">
                        <span>
                          <span className="block font-medium text-ink">{g.name}</span>
                          <span className="block text-sm text-stone-500">{g.type}</span>
                        </span>
                        <span className="text-lg font-semibold tracking-tight tabular-nums text-ink">{formatHour(g.hour)}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <NextServiceTile />

        {/* Watch live */}
        <a
          href="https://youtube.com/@winnersbaptistchurch1"
          target="_blank"
          rel="noopener noreferrer"
          className="tile group flex min-h-[260px] flex-col justify-between bg-gold-500 text-white transition-colors hover:bg-gold-600 lg:col-span-3"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Live
          </span>
          <div>
            <p className="text-3xl font-semibold tracking-[-0.04em]">Watch online</p>
            <p className="mt-2 text-white/80">Sundays at 8:00 AM (WAT) on YouTube &amp; Facebook</p>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-600 transition-transform duration-300 group-hover:scale-110">
            <Icon name="play" className="h-5 w-5" />
          </span>
        </a>

        {/* 2026 theme */}
        <Link href="/events" className="tile group min-h-[300px] bg-[#EDE9F2] !p-0 lg:col-span-4">
          <Image
            src="/slide4.jpeg"
            alt="2026: Our Season of His Providential Power"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">2026 Theme</span>
        </Link>

        {/* Give */}
        <Link href="/giving" className="tile group flex min-h-[300px] flex-col justify-between lg:col-span-3">
          <span className="icon-tile">
            <Icon name="gift" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-3xl font-semibold tracking-[-0.04em] text-ink">Give online</p>
            <p className="mt-2 text-stone-500">Tithes, offerings, seeds and the building fund.</p>
            <span className="link-arrow mt-5">
              Ways to give <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeBento;
