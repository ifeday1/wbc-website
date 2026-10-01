import Image from 'next/image';
import { PageHero, SectionHeading } from '../components/ui';

export const metadata = {
  title: 'Winners FC - Winners Baptist Church',
  description: 'Reaching out to lives through football - Winners Football Club, the evangelism arm of Winners Baptist Church, Gbagada',
};

const galleryImages = [
  { src: '/Wcar.webp', alt: 'Training session focus' },
  { src: '/Wcar1.webp', alt: 'Team drill' },
  { src: '/Wcar2.webp', alt: 'Match day action' },
  { src: '/Wcar3.webp', alt: 'Coaching session' },
];

const WinnersFC = () => {
  return (
    <>
      <PageHero
        eyebrow="Winners FC"
        title={<>Reaching out to lives <span className="text-gold-300">through football</span></>}
        intro="Building character and community through the beautiful game, fostering growth and positive impact in our community."
        image={{ src: '/winnfc.webp', alt: 'Winners FC', natural: true }}
      />

      <section className="section">
        <div className="container-page space-y-20 md:space-y-28">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200">
              <Image src="/win1.webp" alt="Community Outreach" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="eyebrow mb-4">Who We Are</p>
              <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
                Winners Football Club is a prominent Evangelism arm of Winners Baptist Church, part of the Winners Community Group. The major objective of the club is to engage young and adult guys by offering a platform based on Christ-centered beliefs.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200 md:order-2">
              <Image src="/win2.webp" alt="Mentorship Program" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="eyebrow mb-4">Our Aim</p>
              <p className="text-lg leading-relaxed text-stone-600">
                The group aims to shape individuals into responsible, ethical, and resilient members of society by combining sportsmanship with spiritual direction. Our commitment to character development makes it an important component of the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-stone-200 bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Picture excerpts from our training session" />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WinnersFC;
