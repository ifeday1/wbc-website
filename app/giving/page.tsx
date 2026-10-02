import Link from 'next/link';
import { CtaBand, PageHero } from '../components/ui';
import BankAccounts from './BankAccounts';

export const metadata = {
  title: 'Giving - Winners Baptist Church',
  description: 'Give towards the ministry of Winners Baptist Church, Gbagada',
};

const givingOptions = [
  {
    title: 'Tithe',
    text: 'Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.”',
    reference: 'Malachi 3:10',
  },
  {
    title: 'Offering',
    text: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.',
    reference: '2 Corinthians 9:7',
  },
  {
    title: 'Seed',
    text: 'Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap. For with the measure you use it will be measured back to you.',
    reference: 'Luke 6:38',
  },
  {
    title: 'Building Fund',
    text: 'Help us build the house of God and expand our ministry to reach more souls for Christ.',
  },
];

export default function Giving() {
  return (
    <div>
      <PageHero
        eyebrow="Support Our Ministry"
        title="Giving"
        intro="Sow generously into the kingdom of God and support the work of Winners Baptist Church. We believe in the principle of sowing and reaping. Your generous giving helps further the kingdom of God."
      >
        <a href="#bank-details" className="btn-light w-fit !px-7 !py-3.5">
          See bank details
        </a>
      </PageHero>

      <BankAccounts />

      <section className="section pt-0">
        <div className="container-page">
          <h2 className="heading-lg">What you can give towards</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {givingOptions.map((option, index) => (
              <article key={option.title} className="card flex flex-col p-8 md:p-10">
                <span className="font-display text-sm text-gold-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 font-display text-3xl text-ink">{option.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-stone-600">{option.text}</p>
                {option.reference && (
                  <p className="mt-6 border-t border-stone-200 pt-4 text-sm font-semibold text-stone-500">{option.reference}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Contact Us to Give" text="For more information on how to give, please get in touch with us.">
        <Link href="/contact" className="btn-light">
          Contact Us
        </Link>
      </CtaBand>
    </div>
  );
}
