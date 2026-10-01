import Image from 'next/image';
import Link from 'next/link';
import { CtaBand, PageHero } from '../components/ui';

export const metadata = {
  title: 'Diaconates - Winners Baptist Church',
  description: 'Meet our deacons at Winners Baptist Church, Gbagada',
};

const deacons = [
  {
    name: 'Muyiwa Dayo Folasire',
    image: '/muyiwa.webp',
    badge: 'Chief Auditor',
    role: 'Deaconate Chairperson',
    year: '2017',
    bio: 'An astute investment and portfolio analyst with special interest in investments banking and reporting. Mr. Folasire has served in several capacities in a Baptist local church, ranging from RA President, Youth Secretary, Church Financial Secretary and Treasurer. He is a Sunday teacher and a thoroughly discipled leader with Master Life certificate. Ordained as a deacon in 2017.',
  },
  {
    name: 'Adenike Florence Fajembola',
    image: '/faj.webp',
    badge: 'Chairman',
    role: 'School Board Chairman',
    year: '2015',
    bio: 'A retired headteacher with extensive experience in education and church leadership. A dedicated Sunday School and DTM teacher who has undergone Discipleship training. She has served as WMU Coordinator, Deaconate Chairperson, and currently serves as Chairman of the School Board.',
  },
  {
    name: 'Rachel Olayinka Alabi',
    image: '/alabi.webp',
    badge: 'Choir Director',
    role: 'Church Choir Council Coordinator',
    year: '2019',
    bio: 'A dedicated teacher and business woman who has served in various departments of the church. She has served as a choir mistress, WMU secretary, Lydia adviser and church secretary. Currently serves as the Church Choir Council Coordinator, Choir member, Discipleship Training Ministry (DTM) coordinator and Girls Auxiliary (G.A) counsellor.',
  },
  {
    name: 'Olayinka Abosede Okegbola',
    image: '/oke.webp',
    badge: 'Visitation Coordinator',
    role: 'Church Visitation Coordinator',
    year: '2019',
    bio: 'A caterer and trader who trains people in Catering and decorations. Mrs Okegbola has served in various units of the local church and at the associational level. She has served as G.A. Counselor, Lydia Adviser, WMU Treasurer, DTM Teacher, DTM Coordinator, and Visitation Coordinator. She also serves as DTM Secretary and DTM Director at the associational level.',
  },
  {
    name: 'Babatunde Olawale Bakare',
    image: '/bake.webp',
    badge: 'House Fellowship Leader',
    role: 'House Fellowship Leader & Usher',
    year: '2014',
    bio: 'A retired banker and portfolio manager with extensive experience in church leadership. He has served in several capacities including chief usher, MMU chairman, treasurer, and Sunday school teacher. A thoroughly discipled leader with Follow the Master certificate who became a deacon in 2014 and continues to serve as a house fellowship leader and usher.',
  },
  {
    name: 'Florence Ndidi Ilori',
    image: '/ilori.webp',
    badge: 'Financial Secretary',
    role: 'Church Financial Secretary',
    year: '2019',
    bio: "A Business Enthusiast, Entrepreneur and Financial Advisor who has worn various leadership roles at both local church and associational levels. She is a DTM Teacher, Encourager, prayer intercessor and lover of God's music. Ordained as a deaconess in 2019, she has served in numerous committees and capacities, currently serving as the church's financial secretary and Lydia adviser.",
  },
];

export default function Diaconates() {
  return (
    <div>
      <PageHero
        eyebrow="Diaconate"
        title="Our Deacons"
        scripture={{
          text: 'Keep watch over yourselves and all the flock of which the Holy Spirit has made you overseers. Be shepherds of the church of God, which he brought with his own blood.',
          reference: 'Acts 20:28',
        }}
      >
        <p className="lead mt-6">Faithful servants who shepherd our congregation with wisdom, dedication, and love</p>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {deacons.map((deacon) => (
            <article key={deacon.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200">
                <Image src={deacon.image} alt={deacon.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="text-gold-600">{deacon.badge}</span>
                <span className="text-stone-400">Since {deacon.year}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl text-ink">{deacon.name}</h2>
              <p className="mt-1 font-medium text-brand-800">{deacon.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{deacon.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Join Our Leadership Team"
        text="Discover how you can serve and make a difference in our church community. Our deacons lead by example, demonstrating commitment, wisdom, and dedication to God's work."
      >
        <Link href="/contact" className="btn-light">
          Learn More About Serving
        </Link>
      </CtaBand>
    </div>
  );
}
