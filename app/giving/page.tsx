import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Giving - Winners Baptist Church',
  description: 'Give towards the ministry of Winners Baptist Church, Bariga',
};

const givingOptions = [
  {
    title: 'Tithe',
    description: 'Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.” - Malachi 3:10',
    color: 'blue',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Offering',
    description: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. - 2 Corinthians 9:7',
    color: 'purple',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
  },
  {
    title: 'Seed',
    description: 'Give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap. For with the measure you use it will be measured back to you. - Luke 6:38',
    color: 'green',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97 0-9-2.686-9-6 0-2.5 2.5-4.5 5-5.5C9 7 10.5 4 12 3c1.5 1 3 4 4 6.5 2.5 1 5 3 5 5.5 0 3.314-4.03 6-9 6zm0 0V12" />
    ),
  },
  {
    title: 'Building Fund',
    description: 'Help us build the house of God and expand our ministry to reach more souls for Christ.',
    color: 'amber',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
    ),
  },
];

const colorClasses: Record<string, { light: string; text: string; gradient: string }> = {
  blue: { light: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
  purple: { light: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' },
  green: { light: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-500 to-green-600' },
  amber: { light: 'bg-amber-50', text: 'text-amber-600', gradient: 'from-amber-500 to-orange-500' },
};

export default function Giving() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[350px]">
        <Image
          src="/church.webp"
          alt="Winners Baptist Church"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">Giving</h1>
            <p className="text-sm md:text-lg text-white/90">
              Sow generously into the kingdom of God and support the work of Winners Baptist Church
            </p>
          </div>
        </div>
      </div>

      {/* Giving Options Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-md shadow-blue-500/30">
              Support Our Ministry
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Ways to Give</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in the principle of sowing and reaping. Your generous giving helps further the kingdom of God.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {givingOptions.map((option) => {
              const colors = colorClasses[option.color];
              return (
                <div
                  key={option.title}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-7 h-7">
                      {option.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{option.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us to Give</h2>
          <p className="text-xl text-white/90 mb-8">
            For more information on how to give, please get in touch with us.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
