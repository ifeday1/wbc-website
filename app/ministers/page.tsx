import Image from 'next/image';
import { PageHero, SectionHeading } from '../components/ui';

export const metadata = {
  title: 'Ministers - Winners Baptist Church',
  description: 'Meet our ministers at Winners Baptist Church, Gbagada',
};

const ministers = [
  {
    name: 'Rev Olusola Oladeni, Ph.D',
    role: 'Lead Pastor',
    image: '/pastor2.webp',
    scripture: { text: 'And I will give you pastors according to mine heart, which shall feed you with knowledge and understanding.', reference: 'Jeremiah 3:15' },
    bio: "Oladeni, Ola Olusola, PhD, is the Senior Pastor of Winners Baptist Church, Gbagada, New-Garage, Lagos. He is a Teacher, Preacher, Psychologist, Gerontologist, Author and marriage Counsellor. In addition to Nigeria Certificate in Education (N.C.E), Dr Sola Oladeni holds a Bachelor of Art (B. A), Master of Education (M. Ed) and Doctor of Philosophy (Ph. D) from the University of Ibadan. He also holds a Bachelor of Theology (B. Th) and Master of Theology (M. Th) from The Nigerian Baptist Theological Seminary, Ogbomoso. He coordinates MARFAM Life Counselling Ministry International (MLCMI), a ministry that is focused on marriage enrichment and marital Counselling; other counselling services and lots more. He's married to his heart-throb Esther Adegbenjo and they are blessed with biological children and many spiritual children.",
  },
  {
    name: 'Rev Mrs Esther Oladeni',
    role: 'Teenagers Pastor',
    image: '/pastormrs.webp',
    scripture: { text: 'Train up a child in the way he should go: and when he is old, he will not depart from it.', reference: 'Proverbs 22:6' },
    bio: "Revd. Adegbenjo Esther Oladeni is a Baptist-trained pastor. She is currently the Teenagers' Pastor of Winners Baptist Church, Gbagada Lagos. She is a trained teacher and counsellor. She attended Ilorin Teachers College. In addition to Nigeria Certificate in Education (NCE), she holds her Bachelor of Education (B.Ed) in counselling from the University of Ado Ekiti. Esther holds her Bachelor in Religious Education (B.Re) from the Baptist College of Theology Lagos and her Master of Education (M.Ed) in Guidance and Counselling from the University of Lagos. Esther is the author of several books. She is a member of MARFAM Life Counselling Ministry International (MLCMI), a ministry that is focused on marriage enrichment and other counselling services. Adegbenjo is happily married to Olusola Oladeni, and the marriage is blessed with both biological and spiritual children.",
  },
];

const moments = [
  { src: '/Preach.webp', title: 'Sunday Worship', text: 'Gathering in fellowship and praise' },
  { src: '/Preach1.webp', title: 'Spiritual Growth', text: 'Nurturing faith and wisdom' },
];

const Ministers = () => {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Our Ministers"
        scripture={{
          text: 'And I will give you pastors according to mine heart, which shall feed you with knowledge and understanding.',
          reference: 'Jeremiah 3:15',
        }}
      />

      <div className="container-page divide-y divide-stone-200">
        {ministers.map((minister, index) => (
          <section key={minister.name} className="grid gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
            <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200">
                <Image src={minister.image} alt={minister.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <p className="eyebrow">{minister.role}</p>
              <h2 className="heading-lg mt-4">{minister.name}</h2>
              <figure className="mt-8 border-l-2 border-gold-400 pl-5">
                <blockquote className="font-display text-xl leading-relaxed text-stone-700">&ldquo;{minister.scripture.text}&rdquo;</blockquote>
                <figcaption className="mt-2 text-sm font-semibold text-stone-500">{minister.scripture.reference}</figcaption>
              </figure>
              <p className="mt-8 text-[1.05rem] leading-[1.8] text-stone-600">{minister.bio}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="section border-t border-stone-200 bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Gallery"
            title="Ministry in Action"
            lead="Witness the transformative power of faith and community in our church services"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {moments.map((moment) => (
              <figure key={moment.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200">
                  <Image src={moment.src} alt="Church service" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="mt-4">
                  <span className="block font-display text-xl text-ink">{moment.title}</span>
                  <span className="text-stone-500">{moment.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ministers;
