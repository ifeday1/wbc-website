'use client';

import { Icon, SectionHeading } from './ui';

const values = [
  {
    title: 'Love',
    description: 'Encouraging ourselves in brotherly love and bringing hearts to Christ.',
  },
  {
    title: 'Care',
    description: 'As we value others in humility, we are ready to help and share with others.',
  },
  {
    title: 'Concern for People',
    description: 'Imbibing the spirit of kindness and generosity in us.',
  },
  {
    title: 'Commitment',
    description: 'Putting Christ first in all we do!',
  },
];

const icons = ['heart', 'hand', 'users', 'star'] as const;

const CoreValues = () => {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we hold dear"
          title="Our core values"
          lead={<>Supporting our adopted Mission Statement, the goals of Winners Baptist Church comprises:</>}
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={value.title} className="tile flex min-h-[240px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="icon-tile">
                  <Icon name={icons[index]} className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium tabular-nums text-stone-400">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-stone-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-20 max-w-3xl text-center">
          <blockquote className="text-2xl font-medium leading-snug tracking-[-0.03em] text-ink md:text-4xl">
            &ldquo;We are one body in Christ, relating in brotherly love and living as Christ has taught us.&rdquo;
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default CoreValues;
