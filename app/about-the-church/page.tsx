import Image from 'next/image';

export const metadata = {
  title: 'About the Church - Winners Baptist Church',
  description: 'Learn about the history, vision, and mission of Winners Baptist Church, Bariga',
};

export default function AboutTheChurch() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image 
          src="/church.webp" 
          alt="Winners Baptist Church" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About The Church</h1>
            <p className="text-lg md:text-xl opacity-90">Discover our journey of faith</p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Our History</h2>
          </div>

          {/* Scripture Quote */}
          <div className="max-w-4xl mx-auto mb-12">
            <blockquote className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-lg">
              <p className="text-gray-700 italic text-lg md:text-xl leading-relaxed">
                "Then Jesus came to them and said, 'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.'"
              </p>
              <cite className="block mt-4 text-blue-600 font-semibold not-italic">— Matthew 28:16-20</cite>
            </blockquote>
          </div>

          {/* History Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                It may not matter where you started; what matters is where you end. In response to the instruction Jesus Christ gave the disciples, and having realized that the instruction was and is not only to the disciples, the Church Training Programme unit, now known as Discipleship Training Ministry, of Somolu Baptist Church, now Christ Victory Baptist Church, Somolu was inspired by the Holy Spirit to go to Apelehin Area to start a church.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                To pursue the vision, on <span className="font-semibold text-blue-600">18 March 1964</span>, the Church Training Programme unit of Christ Victory Baptist Church came for evangelism at the Apelehin area of Bariga, Lagos, Nigeria.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                The church started in a shop located at <span className="font-semibold">Shogbamu Street</span>. The church kept on growing physically and spiritually as new members were joined. Hence, when the shop could not contain the members, in <span className="font-semibold text-blue-600">1972</span>, they agreed to move from the shop to where the church is, by the grace of God, at <span className="font-semibold">No 5, Adebayo Adekoya Street, Near Jolad Hospital, Bariga</span>.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, Winners Baptist Church, Bariga, is made up of various Units and Organisations that are actively serving God and the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Milestones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1964 */}
            {/* <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full font-bold">1964</div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.333A1.25 1.25 0 0112.25 9h10.5A1.25 1.25 0 0124 10.5v8.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Church Founded</h3>
              <p className="text-gray-600">Started in a shop at Shogbamu Street through the Church Training Programme</p>
            </div> */}

            {/* 1972 */}
            {/* <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-8 bg-green-600 text-white px-4 py-1 rounded-full font-bold">1972</div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">New Location</h3>
              <p className="text-gray-600">Moved to permanent site at No 5, Adebayo Adekoya Street</p>
            </div> */}

            {/* Present */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-8 bg-purple-600 text-white px-4 py-1 rounded-full font-bold">Present</div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Growing Strong</h3>
              <p className="text-gray-600">Multiple ministries including Youth, Teens, BSF, MMU, WMU, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl leading-relaxed opacity-90">
                To raise a transformed community of people - a blameless Church who will positively transform her generation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-90">
                Bringing people to Jesus and membership in His family; developing them to Christ-like maturity, and equipping them for the ministries in the Church, and their life's missions in the world in order to glorify the Lord's name now and in future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">What We Believe</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Love', description: 'Encouraging ourselves in brotherly love and bringing hearts to Christ', icon: '❤️' },
              { title: 'Care', description: 'Valuing others in humility, ready to help and share with others', icon: '🤝' },
              { title: 'Concern for People', description: 'Imbibing the spirit of kindness and generosity', icon: '💕' },
              { title: 'Commitment', description: 'Putting Christ first in all we do', icon: '🎯' },
              { title: 'Loyalty', description: 'Loyalty to Jesus Christ and His teaching', icon: '⭐' },
              { title: 'Unity', description: 'One body in Christ, relating in brotherly love', icon: '✝️' },
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}