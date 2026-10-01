import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon, PageHero, SectionHeading } from '../components/ui';

export const metadata = {
  title: 'Winners BC Career - Professional Advancement',
  description: 'Empowering professional advancement through career development programs, training sessions, and job opportunities at Winners Baptist Church.',
};

const WHATSAPP_GROUP = 'https://chat.whatsapp.com/DiIVytGo2En3LYUSIUJiiT';

const testimonials = [
  {
    name: 'Arab Agbaje-Salami',
    role: 'Accountant',
    image: '/ava.webp',
    quote: "My name is Arab Agbaje-Salami an Accountant. Winners career was introduced to me through a colleague, every job posted on their platform has been on point so far. I'm happy to share that I just landed a new job as an Accountant with one of the key players in the FMCG space in Nigeria through the jobs shared on the platform.",
  },
  {
    name: 'Oluwatomisin Sodeinde',
    role: 'Professional',
    image: '/ava1.webp',
    quote: "My name is Tomi, I heard of winners careers from church friends and joined the whatsapp group. I submitted many applications which built my confidence and resilience, I kept pushing because as long as there's job updates on Winners careers I'm certain there's something for me. I work as an auditor currently and a friend of mine got an internship opportunity from here.",
  },
];

const fairPhotos = [
  { src: '/carol1.webp', alt: 'Career fair event' },
  { src: '/carol2.webp', alt: 'Career fair participants' },
  { src: '/carol3.webp', alt: 'Career fair networking' },
  { src: '/carola4.webp', alt: 'Career fair presentation' },
];

export default function Wbc_careers() {
  return (
    <>
      <PageHero
        eyebrow="Winners BC Careers"
        title={<>Empowering Professional <span className="text-gold-300">Advancement</span></>}
        image={{ src: '/car.webp', alt: 'Career advancement illustration', natural: true }}
      >
        <div className="flex items-center gap-4">
          <Image src="/Link.webp" alt="" width={44} height={44} className="rounded-full border border-stone-200 bg-white p-2" />
          <div>
            <p className="font-semibold text-white">4k+ followers online</p>
            <p className="text-sm text-white/60">Join our growing community</p>
          </div>
        </div>
        <a href={WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="btn-light mt-8">
          Join Our Community
          <ArrowIcon />
        </a>
      </PageHero>

      {/* About the platform */}
      <section className="section">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-stone-200">
              <Image src="/s.webp" alt="Career development" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl bg-stone-200">
              <Image src="/o.webp" alt="Training sessions" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">The Platform</p>
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              Winners BC Career has rapidly evolved into a robust and influential platform dedicated to fostering the career growth of individuals across diverse spheres.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The platform&apos;s cornerstone lies in its meticulously curated quarterly training sessions and seminars. These events are meticulously crafted to harness the expertise of industry leaders, providing attendees with unparalleled access to cutting-edge insights, trends, and strategies within their respective fields.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-y border-stone-200 bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Success Stories"
            title="Impact and Tangible Benefits"
            lead="The impact of Winners BC Career reverberates through the success stories of individuals within the community, transforming careers and lives."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="flex flex-col rounded-3xl bg-paper p-8 md:p-10">
                <span className="font-display text-6xl leading-none text-gold-400" aria-hidden="true">&ldquo;</span>
                <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-stone-700">{testimonial.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-stone-200 pt-6">
                  <Image src={testimonial.image} alt={testimonial.name} width={52} height={52} className="rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="text-stone-600">Ready to share your success story?</p>
            <Link href="/contact" className="link-arrow">
              Share Your Experience
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow mb-4">Our Purpose</p>
            <h2 className="heading-lg">
              Shaping Futures Through <span className="text-gold-600">Professional Excellence</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              In the fast-paced landscape of professional development, Winners BC Career stands as a beacon of opportunity and growth. With its unwavering dedication to equipping individuals with the tools, insights, and connections essential for success, the platform continues to play a pivotal role in shaping and advancing careers across a multitude of industries.
            </p>
            <a href={WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              Join Our Community
              <ArrowIcon />
            </a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200">
            <Image src="/m.webp" alt="Professional development illustration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Career fair */}
      <section className="section border-t border-stone-200 bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Events"
            title="Winners BC Career Fair 2024"
            lead="A recruiting event in which employers and recruiters meet with potential employees and where job seekers find more about job openings."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {fairPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden rounded-2xl bg-stone-200">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
