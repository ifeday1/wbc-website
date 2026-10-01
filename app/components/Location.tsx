'use client';

import { ArrowIcon, SectionHeading } from './ui';

const details = [
  {
    label: 'Address',
    lines: ['5, Adebayo Adekoya Street', 'New Garage, Gbagada, Lagos'],
  },
  {
    label: 'Service Times',
    lines: ['Sundays: 7:00 AM - 12:00 PM', 'Wednesdays: 6:00 PM'],
  },
  {
    label: 'Contact',
    lines: ['+234 913 9402 485', 'winnersbaptistchurch5@gmail.com'],
  },
];

const Location = () => {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-3 md:gap-4 lg:grid-cols-12">
          <div className="tile flex flex-col lg:col-span-5">
            <SectionHeading eyebrow="Our meeting point" title="Join us at Miracle Square" />

            <dl className="mt-8 space-y-2">
              {details.map((detail) => (
                <div key={detail.label} className="rounded-2xl bg-white px-5 py-4 shadow-card">
                  <dt className="text-xs font-medium uppercase tracking-wider text-stone-400">{detail.label}</dt>
                  <dd className="mt-1 text-ink">
                    {detail.lines.map((line) => (
                      <span key={line} className="block break-words">{line}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="https://www.google.com/maps/place/Winners+Baptist+Church+(Miracle+Square)/@6.5474605,3.3911729,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8d31dbe5a22f:0xe8057f7d3f4dc808!8m2!3d6.5474605!4d3.3937478!16s%2Fg%2F11gmbpxwxz?hl=en&entry=ttu"
              className="btn-primary mt-8 w-full !py-3.5 sm:w-fit sm:!px-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
              <ArrowIcon />
            </a>
          </div>

          <div className="h-[360px] overflow-hidden rounded-4xl bg-stone-100 md:h-[480px] lg:col-span-7 lg:h-auto lg:min-h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1980.6787073070925!2d3.3937478!3d6.5474605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d31dbe5a22f%3A0xe8057f7d3f4dc808!2sWinners%20Baptist%20Church%20(Miracle%20Square)!5e0!3m2!1sen!2sng!4v1713547200000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Winners Baptist Church Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
