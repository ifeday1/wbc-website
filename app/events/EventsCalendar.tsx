'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { calendar, quarters, YEAR_THEME, type ChurchEvent } from './calendar';
import { Icon } from '../components/ui';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const UPCOMING_WINDOW_DAYS = 7;
const WAT_OFFSET_MS = 60 * 60 * 1000; // Lagos is UTC+1 all year

// Dates are handled as YYYY-MM-DD strings in Lagos time, so comparisons are plain string compares.
const lagosToday = () => new Date(Date.now() + WAT_OFFSET_MS).toISOString().slice(0, 10);

const addDays = (iso: string, days: number) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
};

const daysBetween = (from: string, to: string) =>
  Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86400000);

const parts = (iso: string) => {
  const d = new Date(`${iso}T00:00:00Z`);
  return { day: d.getUTCDate(), month: d.getUTCMonth(), weekday: WEEKDAYS[d.getUTCDay()] };
};

// Every calendar day an event touches: its full range plus any extra single days.
function eventDays(event: ChurchEvent) {
  const days: string[] = [];
  for (let d = event.start; d <= (event.end ?? event.start); d = addDays(d, 1)) days.push(d);
  return [...days, ...(event.otherDates ?? [])].sort();
}

function formatDates(event: ChurchEvent) {
  const s = parts(event.start);
  const label = (p: ReturnType<typeof parts>) => `${p.day} ${MONTHS[p.month].slice(0, 3)}`;
  if (event.end) return `${label(s)} – ${label(parts(event.end))}`;
  if (event.otherDates?.length) return [event.start, ...event.otherDates].map((d) => label(parts(d))).join(' & ');
  return `${s.weekday}, ${label(s)}`;
}

type Upcoming = { event: ChurchEvent; next: string; inProgress: boolean; daysAway: number };

// Events that are running today or have a day within the next week, soonest first.
function findUpcoming(today: string): Upcoming[] {
  const horizon = addDays(today, UPCOMING_WINDOW_DAYS);
  const found: Upcoming[] = [];
  for (const month of calendar) {
    for (const event of month.events) {
      const inProgress = !!event.end && event.start <= today && today <= event.end;
      const next = eventDays(event).find((d) => d >= today);
      if (next && (inProgress || next <= horizon)) {
        found.push({ event, next: inProgress ? today : next, inProgress, daysAway: daysBetween(today, next) });
      }
    }
  }
  return found.sort((a, b) => a.next.localeCompare(b.next) || Number(b.inProgress) - Number(a.inProgress));
}

// The first event after the one-week window, shown when the week itself is quiet.
function findNextAfterWindow(today: string) {
  const horizon = addDays(today, UPCOMING_WINDOW_DAYS);
  let best: { event: ChurchEvent; next: string } | null = null;
  for (const month of calendar) {
    for (const event of month.events) {
      const next = eventDays(event).find((d) => d > horizon);
      if (next && (!best || next < best.next)) best = { event, next };
    }
  }
  return best;
}

function whenLabel({ inProgress, daysAway }: Pick<Upcoming, 'inProgress' | 'daysAway'>) {
  if (inProgress) return 'Happening now';
  if (daysAway === 0) return 'Today';
  if (daysAway === 1) return 'Tomorrow';
  return `In ${daysAway} days`;
}

// Re-reads the Lagos date every minute (and when the tab regains focus) so highlights roll over on their own.
function useLagosToday() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setToday(lagosToday());
    update();
    const timer = setInterval(update, 60000);
    document.addEventListener('visibilitychange', update);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return today;
}

export function ThisWeek() {
  const today = useLagosToday();
  const upcoming = useMemo(() => (today ? findUpcoming(today) : []), [today]);
  const nextAfter = useMemo(() => (today && upcoming.length === 0 ? findNextAfterWindow(today) : null), [today, upcoming.length]);

  // Feature the first event that has a flyer; otherwise the soonest one
  const first = upcoming.find((u) => u.event.image) ?? upcoming[0];
  const rest = upcoming.filter((u) => u !== first);

  return (
    <section className="section pb-0" aria-live="polite">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Coming up</p>
            <h2 className="heading-lg">Happening this week</h2>
          </div>
          <p className="text-stone-500">Updates automatically · next {UPCOMING_WINDOW_DAYS} days</p>
        </div>

        {!today ? (
          <div className="mt-10 h-64 animate-pulse rounded-4xl bg-paper" />
        ) : first ? (
          <div className="mt-10 grid gap-3 md:gap-4 lg:grid-cols-12">
            <FeaturedEvent item={first} wide={rest.length === 0} />

            {rest.length > 0 && (
              <div className="flex flex-col gap-3 self-start md:gap-4 lg:col-span-5">
            {rest.map((item) => (
              <article key={`${item.event.title}-${item.event.start}`} className="tile flex items-start gap-5 !p-5 md:!p-6">
                <DateBadge iso={item.next} />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gold-600">{whenLabel(item)}</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-ink">{item.event.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">
                    {[formatDates(item.event), item.event.time].filter(Boolean).join(' · ')}
                  </p>
                </div>
              </article>
            ))}
              </div>
            )}
          </div>
        ) : (
          <div className="tile mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xl font-semibold tracking-tight text-ink">No special events in the next 7 days.</p>
              <p className="mt-1 text-stone-500">Join us for our regular Sunday and Wednesday services.</p>
            </div>
            {nextAfter && (
              <div className="flex items-center gap-4 rounded-3xl bg-white p-4 pr-6 shadow-card">
                <DateBadge iso={nextAfter.next} />
                <div>
                  <p className="text-sm text-stone-500">Next up · in {daysBetween(today, nextAfter.next)} days</p>
                  <p className="font-semibold text-ink">{nextAfter.event.title}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function WhenPill({ item }: { item: Upcoming }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink shadow-card">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
      </span>
      {whenLabel(item)}
    </span>
  );
}

function FeaturedEvent({ item, wide }: { item: Upcoming; wide: boolean }) {
  const { event } = item;
  const span = wide ? 'lg:col-span-12' : 'lg:col-span-7';

  const info = (
    <>
      <p className="text-gold-300">{formatDates(event)}</p>
      <h3 className="mt-2 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">{event.title}</h3>
      {event.detail && <p className="mt-4 max-w-lg text-white/65">{event.detail}</p>}
      {event.time && (
        <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
          <Icon name="clock" className="h-4 w-4" />
          {event.time}
        </p>
      )}
    </>
  );

  if (event.image) {
    return (
      <article className={`overflow-hidden rounded-4xl bg-ink text-white ${span}`}>
        <div className="relative aspect-video bg-stone-800">
          <Image src={event.image.src} alt={event.image.alt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
        </div>
        <div className="p-7 md:p-10">
          <div className="mb-5">
            <WhenPill item={item} />
          </div>
          {info}
        </div>
      </article>
    );
  }

  return (
    <article className={`relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-4xl bg-ink p-7 text-white md:p-10 ${span}`}>
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-500/30 blur-[100px]" />
      <span className="relative">
        <WhenPill item={item} />
      </span>
      <div className="relative mt-10">{info}</div>
    </article>
  );
}

function DateBadge({ iso, muted = false }: { iso: string; muted?: boolean }) {
  const p = parts(iso);
  return (
    <span className={`flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-2xl shadow-card ${muted ? 'bg-paper text-stone-400' : 'bg-white text-ink'}`}>
      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold-600">{MONTHS[p.month].slice(0, 3)}</span>
      <span className="text-xl font-semibold leading-none tabular-nums">{p.day}</span>
      <span className="mt-0.5 text-[0.65rem] text-stone-400">{p.weekday}</span>
    </span>
  );
}

export function YearCalendar() {
  const today = useLagosToday();
  const [month, setMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Open on the current month once the visitor's date is known
  useEffect(() => {
    if (today?.startsWith('2026-')) setMonth(Number(today.slice(5, 7)) - 1);
  }, [today]);

  const data = calendar[month];
  const thisWeek = useMemo(() => new Set(today ? findUpcoming(today).map((u) => u.event) : []), [today]);

  // Map each day of the shown month to the events on it
  const byDay = useMemo(() => {
    const map = new Map<string, ChurchEvent[]>();
    for (const event of data.events) {
      for (const d of eventDays(event)) map.set(d, [...(map.get(d) ?? []), event]);
    }
    return map;
  }, [data]);

  const firstWeekday = new Date(Date.UTC(2026, month, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(2026, month + 1, 0)).getUTCDate();
  const monthPrefix = `2026-${String(month + 1).padStart(2, '0')}`;

  const listed = selectedDay ? data.events.filter((e) => eventDays(e).includes(selectedDay)) : data.events;

  const choose = (m: number) => {
    setMonth(m);
    setSelectedDay(null);
  };

  return (
    <section className="section" id="calendar">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">2026 Calendar of Activities</p>
            <h2 className="heading-lg">{YEAR_THEME.title}</h2>
            <p className="lead mt-4">
              &ldquo;{YEAR_THEME.scripture.text}&rdquo; <span className="text-sm font-medium text-ink">{YEAR_THEME.scripture.reference}</span>
            </p>
          </div>
        </div>

        {/* Month picker, grouped by quarter */}
        <div className="no-scrollbar -mx-5 mt-10 flex gap-6 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-4">
          {quarters.map((quarter) => (
            <div key={quarter.title} className="shrink-0">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-stone-400">{quarter.title}</p>
              <div className="flex gap-1.5 rounded-full bg-paper p-1">
                {quarter.months.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => choose(m)}
                    aria-pressed={month === m}
                    className={`flex-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      month === m ? 'bg-ink text-white shadow-card' : 'text-stone-600 hover:bg-white hover:text-ink'
                    }`}
                  >
                    {MONTHS[m].slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:gap-4 lg:grid-cols-12">
          {/* Month overview */}
          <div className="tile lg:col-span-5">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-ink">{MONTHS[month]}</h3>
              <div className="flex gap-1.5">
                {[-1, 1].map((step) => (
                  <button
                    key={step}
                    type="button"
                    disabled={month + step < 0 || month + step > 11}
                    onClick={() => choose(month + step)}
                    aria-label={step < 0 ? 'Previous month' : 'Next month'}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-card transition-colors hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-40"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-4 w-4 ${step < 0 ? 'rotate-180' : ''}`} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-1 font-medium text-gold-600">{data.theme}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              &ldquo;{data.scripture.text}&rdquo; <span className="font-medium text-ink">{data.scripture.reference}</span>
            </p>

            <div className="mt-6 rounded-3xl bg-white p-3 shadow-card">
              <div className="grid grid-cols-7 text-center text-[0.7rem] font-medium uppercase tracking-wider text-stone-400">
                {WEEKDAYS.map((d) => (
                  <span key={d} className="py-2">{d.slice(0, 2)}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstWeekday }, (_, i) => <span key={`blank-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const iso = `${monthPrefix}-${String(i + 1).padStart(2, '0')}`;
                  const events = byDay.get(iso);
                  const isToday = iso === today;
                  const isSelected = iso === selectedDay;
                  const soon = events?.some((e) => thisWeek.has(e));
                  return (
                    <button
                      key={iso}
                      type="button"
                      disabled={!events}
                      onClick={() => setSelectedDay(isSelected ? null : iso)}
                      aria-label={events ? `${i + 1} ${MONTHS[month]}: ${events.map((e) => e.title).join(', ')}` : undefined}
                      className={`relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm tabular-nums transition-colors ${
                        isSelected
                          ? 'bg-ink font-semibold text-white'
                          : events
                            ? `font-semibold text-ink hover:bg-stone-100 ${soon ? 'bg-gold-50 ring-1 ring-inset ring-gold-300' : ''}`
                            : 'cursor-default text-stone-400'
                      } ${isToday && !isSelected ? 'ring-2 ring-inset ring-ink' : ''}`}
                    >
                      {i + 1}
                      {events && (
                        <span className="absolute bottom-1.5 flex gap-0.5">
                          {events.slice(0, 3).map((e) => (
                            <span key={e.title} className={`h-1 w-1 rounded-full ${isSelected ? 'bg-white' : soon ? 'bg-gold-500' : 'bg-stone-400'}`} />
                          ))}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-500">
              <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded ring-2 ring-inset ring-ink" />Today</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-gold-50 ring-1 ring-inset ring-gold-300" />This week</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-stone-400" />Has events · tap a day to filter</span>
            </div>
          </div>

          {/* Event list */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between px-1 pb-3">
              <p className="text-sm text-stone-500">
                {selectedDay ? `Events on ${parts(selectedDay).day} ${MONTHS[month]}` : `${data.events.length} events in ${MONTHS[month]}`}
              </p>
              {selectedDay && (
                <button type="button" onClick={() => setSelectedDay(null)} className="text-sm font-medium text-ink hover:text-gold-600">
                  Show all
                </button>
              )}
            </div>
            <ul className="space-y-2">
              {listed.map((event) => {
                const days = eventDays(event);
                const past = !!today && days[days.length - 1] < today;
                const soon = thisWeek.has(event);
                return (
                  <li
                    key={`${event.title}-${event.start}`}
                    className={`flex items-start gap-4 rounded-3xl p-4 transition-colors md:gap-5 md:p-5 ${
                      soon ? 'bg-gold-50 ring-1 ring-inset ring-gold-200' : 'bg-white ring-1 ring-inset ring-stone-200/80'
                    } ${past ? 'opacity-55' : ''}`}
                  >
                    <DateBadge iso={event.start} muted={past} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-semibold tracking-[-0.02em] text-ink">{event.title}</h4>
                        {soon && <span className="rounded-full bg-gold-500 px-2.5 py-0.5 text-[0.7rem] font-semibold text-white">This week</span>}
                        {past && <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-stone-500">Past</span>}
                      </div>
                      <p className="mt-1 text-sm text-stone-500">{[formatDates(event), event.time].filter(Boolean).join(' · ')}</p>
                      {event.detail && <p className="mt-2 text-sm leading-relaxed text-stone-600">{event.detail}</p>}
                    </div>
                    {event.image && (
                      <div className="relative aspect-video w-24 shrink-0 overflow-hidden rounded-2xl bg-stone-200 sm:w-40">
                        <Image src={event.image.src} alt={event.image.alt} fill sizes="160px" className="object-cover" />
                      </div>
                    )}
                  </li>
                );
              })}
              {!selectedDay &&
                data.undated?.map((event) => (
                  <li key={event.title} className="flex items-start gap-4 rounded-3xl border border-dashed border-stone-300 bg-white p-4 md:gap-5 md:p-5">
                    <span className="flex h-16 w-14 shrink-0 items-center justify-center rounded-2xl bg-paper text-xs font-medium text-stone-400">TBA</span>
                    <div>
                      <h4 className="text-lg font-semibold tracking-[-0.02em] text-ink">{event.title}</h4>
                      <p className="mt-1 text-sm text-stone-500">{['Date to be announced', event.time, event.detail].filter(Boolean).join(' · ')}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
