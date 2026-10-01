import Image from 'next/image';
import { PageHero } from '../components/ui';

export const metadata = {
  title: 'Ministries - Winners Baptist Church',
  description: 'Discover our various ministries at Winners Baptist Church, Gbagada',
};

const ministries = [
  {
    name: 'Teenagers Ministry',
    image: '/teen.webp',
    paragraphs: [
      'Raising a Generation of trailblazers between ages 13-18, Intellectuals and hearts who longs for the things of God and as the presence of God never leaves our midst, we welcome all secondary school students, secondary school leavers and undergraduates. The word of the Lord remains in our hearts.',
    ],
  },
  {
    name: 'Children Ministry',
    image: '/youth.webp',
    paragraphs: [
      'Vision: To nurture a generation of children who love and follow Jesus, cultivating a foundation of faith, character, and service.',
      'Mission: Empowering children to discover and grow in their relationship with God through age-appropriate teaching, engaging activities, and a loving community. Core Values: Love and Grace.',
      "Faith Formation: Fostering a deep understanding of God's love and biblical principles, laying the groundwork for a lifelong faith journey.",
      'Engaging Curriculum: Children Department is part of of the Family Life Education Division of the Nigerian Baptist Convention.',
      'Winners Baptist Children Department is under the Leadership of Rev. Mrs. Esther Oladeni, the Family Life Coordinator. We come together to fellowship every sunday both for Combined and Separate services, by 8 a.m and 9a.m. respectively',
    ],
  },
  {
    name: 'Youth Ministry',
    image: '/teen.webp',
    paragraphs: [
      "Welcome to Winning Youth - Where Champions Are Forged! Winning Youth Family We are thrilled to welcome you to the Winning Youth department, a dynamic and empowering community where champions are forged, dreams are realized, and excellence is celebrated. Our department is more than just a fellowship; it's a gateway to a world of opportunities, growth, and the limitless potential that resides within each of our youth members Winning Youth is not just an organization; it's a movement. It's a call to embrace your potential, pursue your dreams, and stand as a testament to the extraordinary capabilities within each one of us. Together, let's continue to redefine what it means to be a champion! To victory and beyond, Winning Youth!",
    ],
  },
  {
    name: 'MMU Ministry',
    image: '/mmu.webp',
    paragraphs: [
      'Welcome to MMU Ministry, Committed to nurturing faith, fostering fellowship, and serving with compassion, MMU Ministry stands as a beacon of spiritual growth and empowerment. Through meaningful gatherings, heartfelt worship, and impactful outreach initiatives, we strive to inspire and uplift each member on their journey of faith. Join us as we seek to glorify God and spread His love to all.',
    ],
  },
  {
    name: 'WMU Ministry',
    image: '/wmu.webp',
    paragraphs: [
      "Her purpose is to build lives who will emulate the spirit of our Lord and Savior Jesus Christ and promote Christian Mission through WMU Organizations SUNBEAM BAND, GIRL AUXILLARY, LYDIA AUXILLARY, and WOMEN'S MISSIONARY SOCIETY. Our aim and objectives is soul winning for JESUS CHRIST. Our Fundamentals are Prayer, Bible and Mission study, stewardship and service. The women, young ladies, and children gather on their meeting day to learn how to fellowship with God through prayer and studying Gods word. This is the organization of baptized married women of all ages. The WMS objectives are achieved through meetings in churches, camp, leadership workshop and retreats. The WMS watchword is ‘laborers together with God’ (1 Corinthians 3:9). Our colors are purple, white and blue. Purple signifies royalty, white for purity and blue for love of God and humanity.",
    ],
  },
  {
    name: 'Evangelism Ministry',
    image: '/envangelism.webp',
    paragraphs: [
      "Embracing the spirit of outreach and spreading the message of faith, our Evangelism Ministry at Winners Baptist Church stands as a beacon of hope and compassion in our community. Committed to sharing the transformative power of God's love, we embark on a journey of service and discipleship, reaching out to hearts seeking solace and salvation. Through prayer, fellowship, and unwavering dedication, we strive to illuminate paths with the light of Christ, inviting all to experience His grace and mercy. Join us as we walk hand in hand, sharing the Gospel and nurturing souls on their spiritual journey. Together, let's shine brightly as ambassadors of faith, embodying the love that knows no bounds.",
    ],
  },
  {
    name: 'Baptist Student Fellowship',
    image: '/bsf.webp',
    paragraphs: [
      'Baptist Student Fellowship (BSF) is a division under missionary organization department of Nigeria Baptist Convention that is responsible for ministering to students. To lead students to a commitment to Jesus Christ as Saviour and Lord, involve them in biblical truth and Christian Discipleship and also to lead them to relate academic disciplines to their christian faith. Motto: By this all men shall know that ye are my disciples; if ye have love one to another (John 13:35).',
    ],
  },
  {
    name: 'Royal Ambassador',
    image: '/ra.webp',
    paragraphs: [
      'The royal ambassador is a ministry under the Men Missionary Union of the Nigeria Baptist Convention. This ministry is mostly for boys under the ages of 10-25 years which is divided into the intermediate and the senior royal ambassador with the aim of touching life of boys and impacting the eternity of men. The motto of the Royal Ambassador can be found in the book of 2 Corinthians 5:20 which says “WE ARE AMBASSADORS FOR CHRIST”.',
    ],
  },
  {
    name: 'Girls Auxiliary',
    image: '/ga.webp',
    paragraphs: [
      'Baptist Student Fellowship (BSF) is a division under missionary organization department of Nigeria Baptist Convention that is responsible for ministering to students. To lead students to a commitment to Jesus Christ as Saviour and Lord, involve them in biblical truth and Christian Discipleship and also to lead them to relate academic disciplines to their christian faith. Motto: By this all men shall know that ye are my disciples; if ye have love one to another.',
    ],
  },
  {
    name: 'Lydia Auxiliary',
    image: '/lydia.webp',
    paragraphs: [
      'The Lydia Auxiliary is a dynamic ministry operating under the umbrella of the Women Missionary Union within the Nigeria Baptist Convention. Dedicated to nurturing young women from adolescence until marriage, this auxiliary provides a platform for personal development, spiritual growth, and service to others.',
      'Mission: The primary aim of the Lydia Auxiliary is to guide and empower young ladies to uphold purity and righteousness, preparing them to be vessels of honor in service to the Lord Jesus Christ. Rooted in biblical teachings, the ministry seeks to instill values of integrity, virtue, and spiritual insight into the lives of its members. Membership Steps: The Lydia Auxiliary offers a structured progression for its members, comprising three distinct stages: Service Award Honour Award The Career Missionary Motto and',
    ],
  },
];

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Ministries = () => {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Our Ministries"
        scripture={{
          text: 'Therefore, my beloved brethren, be steadfast, immovable, always abounding in the work of the the Lord, knowing that your toil is not in vain in the Lord.',
          reference: '1st Corinthians 15:58',
        }}
      >
        <p className="lead mt-6">There is a place for everyone to grow, serve, and belong at Winners Baptist Church.</p>
      </PageHero>

      {/* Quick index */}
      <nav aria-label="Ministries" className="border-b border-stone-200 bg-white">
        <div className="container-page flex gap-2 overflow-x-auto py-4 [scrollbar-width:none]">
          {ministries.map((ministry) => (
            <a
              key={ministry.name}
              href={`#${slug(ministry.name)}`}
              className="shrink-0 rounded-full border border-stone-200 px-4 py-1.5 text-sm text-stone-600 transition-colors hover:border-ink hover:text-ink"
            >
              {ministry.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-page divide-y divide-stone-200">
        {ministries.map((ministry, index) => (
          <section key={ministry.name} id={slug(ministry.name)} className="grid scroll-mt-24 items-start gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
            <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <Image src={ministry.image} alt={ministry.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="font-display text-sm text-gold-600">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="heading-lg mt-3">{ministry.name}</h2>
              <div className="prose-body mt-6">
                {ministry.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Ministries;
