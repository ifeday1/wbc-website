import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';
import Location from '../components/Location';
import { CtaBand, PageHero } from '../components/ui';

export const metadata: Metadata = {
  title: 'Contact - Winners Baptist Church',
  description: 'Get in touch with Winners Baptist Church, Gbagada',
};

const contactMethods = [
  { label: 'Call Us', value: '+234 913 9402 485', href: 'tel:+2349139402485' },
  { label: 'Email Us', value: 'winnersbaptistchurch5@gmail.com', href: 'mailto:winnersbaptistchurch5@gmail.com' },
];

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/winnersbaptistchurch' },
  { label: 'YouTube', href: 'https://youtube.com/@winnersbaptistchurch1' },
  { label: 'Instagram', href: 'https://www.instagram.com/winnersbaptistchurch' },
];

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        scripture={{ text: 'For where two or three gather in my name, there am I with them.', reference: 'Matthew 18:20' }}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="heading-lg">Send us a Message</h2>
            <p className="lead mt-4">We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you soon.</p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          {/* Details */}
          <aside className="space-y-10 lg:col-span-5">
            <div className="rounded-3xl bg-brand-950 p-8 text-white md:p-10">
              <p className="eyebrow text-gold-300 before:bg-gold-300">Worship Center</p>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-sm text-brand-300">Address</dt>
                  <dd className="mt-1 font-display text-xl">5, Adebayo Adekoya Street<br />New Garage, Gbagada, Lagos</dd>
                </div>
                <div>
                  <dt className="text-sm text-brand-300">Service Times</dt>
                  <dd className="mt-1 text-brand-100">Sundays: 7:00 AM - 12:00 PM<br />Wednesdays: 6:00 PM (Victory Hour)</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Contact Methods</h3>
              <ul className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
                {contactMethods.map((method) => (
                  <li key={method.label}>
                    <a href={method.href} className="flex flex-col py-4 hover:text-brand-700">
                      <span className="text-sm text-stone-500">{method.label}</span>
                      <span className="break-words font-medium text-ink">{method.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Follow Our Community</h3>
              <p className="mt-3 text-sm text-stone-600">Stay connected with our latest updates and events</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Location />

      <CtaBand
        title="Join Us This Sunday"
        text="Experience the power of community and worship at Winners Baptist Church. We'd love to have you join our family."
      >
        <Link href="/events" className="btn-light">
          Service Times
        </Link>
        <Link href="/giving" className="btn-outline-light">
          Support Our Ministry
        </Link>
      </CtaBand>
    </div>
  );
}
