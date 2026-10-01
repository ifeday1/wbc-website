import { PageHero, SectionHeading } from '../components/ui';

export const metadata = {
  title: 'About the Church - Winners Baptist Church',
  description: 'Learn about the history, vision, and mission of Winners Baptist Church, Gbagada',
};

const milestones = [
  // { year: '1964', title: 'Church Founded', text: 'Started in a shop at Shogbamu Street through the Church Training Programme' },
  // { year: '1972', title: 'New Location', text: 'Moved to permanent site at No 5, Adebayo Adekoya Street' },
  { year: 'Present', title: 'Growing Strong', text: 'Multiple ministries including Youth, Teens, BSF, MMU, WMU, and more' },
];

const coreValues = [
  { title: 'Love', description: 'Encouraging ourselves in brotherly love and bringing hearts to Christ' },
  { title: 'Care', description: 'Valuing others in humility, ready to help and share with others' },
  { title: 'Concern for People', description: 'Imbibing the spirit of kindness and generosity' },
  { title: 'Commitment', description: 'Putting Christ first in all we do' },
  { title: 'Loyalty', description: 'Loyalty to Jesus Christ and His teaching' },
  { title: 'Unity', description: 'One body in Christ, relating in brotherly love' },
];

export default function AboutTheChurch() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title={<>About the Church</>}
        intro="Discover our journey of faith"
        image={{ src: '/church.webp', alt: 'Winners Baptist Church' }}
      />

      {/* History */}
      <section id="our-history" className="section scroll-mt-24">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Since 1964" title="Our History" />
          </div>
          <div className="lg:col-span-8">
            <figure className="border-l-2 border-gold-400 pl-6">
              <blockquote className="font-display text-xl leading-relaxed text-stone-700 md:text-2xl">
                &ldquo;Then Jesus came to them and said, &lsquo;All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.&rsquo;&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-stone-500">Matthew 28:16-20</figcaption>
            </figure>

            <div className="prose-body mt-12 grid gap-x-10 md:grid-cols-2 md:space-y-0 [&>div]:space-y-5">
              <div>
                <p>
                  It may not matter where you started; what matters is where you end. In response to the instruction Jesus Christ gave the disciples, and having realized that the instruction was and is not only to the disciples, the Church Training Programme unit, now known as Discipleship Training Ministry, of Somolu Baptist Church, now Christ Victory Baptist Church, Somolu was inspired by the Holy Spirit to go to Apelehin Area to start a church.
                </p>
                <p>
                  To pursue the vision, on <strong className="font-semibold text-ink">18 March 1964</strong>, the Church Training Programme unit of Christ Victory Baptist Church came for evangelism at the Apelehin area of Gbagada, Lagos, Nigeria.
                </p>
              </div>
              <div className="mt-5 md:mt-0">
                <p>
                  The church started in a shop located at <strong className="font-semibold text-ink">Shogbamu Street</strong>. The church kept on growing physically and spiritually as new members were joined. Hence, when the shop could not contain the members, in <strong className="font-semibold text-ink">1972</strong>, they agreed to move from the shop to where the church is, by the grace of God, at <strong className="font-semibold text-ink">No 5, Adebayo Adekoya Street, Near Jolad Hospital, Gbagada</strong>.
                </p>
                <p>
                  Today, Winners Baptist Church, Gbagada, is made up of various Units and Organisations that are actively serving God and the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section border-y border-stone-200 bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Our Journey" title="Milestones" />
          <ol className="mt-14 grid gap-10 border-t border-stone-200 pt-10 md:grid-cols-3 md:gap-8">
            {milestones.map((milestone) => (
              <li key={milestone.year}>
                <p className="font-display text-4xl text-brand-800">{milestone.year}</p>
                <h3 className="mt-4 font-display text-xl text-ink">{milestone.title}</h3>
                <p className="mt-2 leading-relaxed text-stone-600">{milestone.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-950 p-10 md:p-14">
            <p className="eyebrow text-gold-300 before:bg-gold-300">Our Vision</p>
            <p className="mt-6 font-display text-2xl leading-snug text-white md:text-3xl">
              To raise a transformed community of people - a blameless Church who will positively transform her generation.
            </p>
          </div>
          <div className="card p-10 md:p-14">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Bringing people to Jesus and membership in His family; developing them to Christ-like maturity, and equipping them for the ministries in the Church, and their life&apos;s missions in the world in order to glorify the Lord&apos;s name now and in future.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section border-t border-stone-200 bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="What We Believe" title="Our Core Values" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <div key={value.title} className="bg-white p-8">
                <span className="font-display text-sm text-gold-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-display text-2xl text-ink">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
