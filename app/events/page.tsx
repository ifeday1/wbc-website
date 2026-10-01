import { Metadata } from 'next';
import Link from 'next/link';
import { CtaBand, PageHero, SectionHeading } from '../components/ui';

export const metadata: Metadata = {
  title: 'Events - Winners Baptist Church',
  description: 'Upcoming events and services at Winners Baptist Church, Gbagada',
};

const events = [
  {
    title: 'English Service',
    description: 'Separate English language service with contemporary worship, in-depth Bible teaching, and community fellowship.',
    time: '7:00 AM',
    location: 'Main Sanctuary',
    day: 'Sunday',
    features: ['Contemporary Worship', 'Kids Ministry', 'Light Breakfast'],
  },
  {
    title: 'Sunday Combined Service',
    description: 'Join us every Sunday for our combined worship service as we gather in unity to praise God, hear His word, and grow together in faith.',
    time: '8:00 AM',
    location: 'Main Sanctuary',
    day: 'Sunday',
    features: ['Holy Communion', 'Family Worship', 'Children Church'],
  },
  {
    title: 'Yoruba Service',
    description: 'Separate Yoruba language service featuring traditional worship, powerful preaching, and cultural expressions of faith.',
    time: '9:00 AM',
    location: 'Main Sanctuary',
    day: 'Sunday',
    features: ['Traditional Music', 'Cultural Worship', 'Sunday School'],
  },
  {
    title: 'Wednesday Victory Hour',
    description: 'Mid-week service for spiritual empowerment. Come experience divine encounter, powerful teaching, and healing.',
    time: '6:00 PM',
    location: 'Main Sanctuary',
    day: 'Wednesday',
    features: ['Prayer Meeting', 'Bible Study', 'Healing Service'],
  },
];

export default function Events() {
  return (
    <div>
      <PageHero
        eyebrow="Services & Events"
        title="Our Services & Events"
        scripture={{
          text: 'Not forsaking the assembling of ourselves together, as the manner of some is, but exhorting one another: and so much the more, as ye see the day approaching.',
          reference: 'Hebrews 10:25',
        }}
        image={{ src: '/church.webp', alt: 'Winners Baptist Church' }}
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Weekly Gatherings"
            title="Upcoming Events"
            lead="Join us for powerful worship services and events. Everyone is welcome!"
          />

          <div className="mt-12 grid gap-3 md:grid-cols-2 md:gap-4">
            {events.map((event) => (
              <article key={event.title} className="tile flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-gold-600">{event.day}</p>
                    <p className="mt-1 text-4xl font-semibold tracking-[-0.04em] tabular-nums text-ink md:text-5xl">{event.time}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-500 shadow-card">{event.location}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink">{event.title}</h3>
                <p className="mt-2 leading-relaxed text-stone-500">{event.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2 pt-2 md:mt-auto">
                  {event.features.map((feature) => (
                    <li key={feature} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-card">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Plan Your Visit"
        text="We'd love to welcome you this Sunday. Whether you're new or have been coming for years, there's a place for you in our church family."
      >
        <Link href="/contact" className="btn-light">
          Get Directions
        </Link>
        <a href="https://youtube.com/@winnersbaptistchurch1" target="_blank" rel="noopener noreferrer" className="btn-outline-light">
          Watch Live
        </a>
      </CtaBand>
    </div>
  );
}
