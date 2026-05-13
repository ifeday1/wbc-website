import Image from 'next/image';



export const metadata = {
  title: 'Winners BC Career - Professional Advancement',
  description: 'Empowering professional advancement through career development programs, training sessions, and job opportunities at Winners Baptist Church.',
};

export default function Wbc_careers() {
  return (
    <>
     

      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-b-[3rem] pt-16 pb-20 px-6 overflow-hidden">
        {/* Optional background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-200 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center justify-center lg:justify-start mb-6">
                <span className="text-sm font-semibold tracking-wide px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg">
                  Winners BC Careers
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Empowering Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Advancement
                </span>
              </h1>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="relative">
                  <Image
                    src="/Link.webp"
                    alt="Social link icon"
                    width={48}
                    height={48}
                    className="bg-white rounded-full p-2 shadow-md"
                  />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-700">4k+ followers online</p>
                  <p className="text-sm text-gray-500">Join our growing community</p>
                </div>
              </div>

              {/* Optional CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://chat.whatsapp.com/DiIVytGo2En3LYUSIUJiiT" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Our Community
                </a>
                {/* <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  Learn More
                </button> */}
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="relative">
                <Image
                  src="/car.webp"
                  alt="Career advancement illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl "
                  priority
                />
                {/* Optional overlay */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='flex flex-wrap justify-center items-center pt-14 md:gap-44 animate-fadeIn'>
        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3 animate-slideInLeft'>
          <Image src="/s.webp" alt="Career development" width={400} height={300} className='animate-scaleIn' />
        </div>
        <div className='flex flex-col justify-center mx-4 my-2 md:w-1/2 lg:w-1/3 animate-slideInRight'>
          <p className='text-lg mb-4 animate-slideInUp'>
            Winners BC Career has rapidly evolved into a robust and influential
            platform dedicated to fostering the career growth of individuals
            across diverse spheres.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center pt-14 md:gap-44 animate-fadeIn'>
        <div className='flex flex-col justify-center mx-4 my-2 md:w-1/2 lg:w-1/3 animate-slideInLeft'>
          <p className='text-lg mb-4 animate-slideInUp'>
            The platform's cornerstone lies in its meticulously curated
            quarterly training sessions and seminars. These events are
            meticulously crafted to harness the expertise of industry leaders,
            providing attendees with unparalleled access to cutting-edge
            insights, trends, and strategies within their respective fields.
          </p>
        </div>
        <div className='flex justify-center items-center mx-4 my-2 md:w-1/2 lg:w-1/3 animate-slideInRight'>
          <Image src="/o.webp" alt="Training sessions" width={400} height={300} className='animate-scaleIn' />
        </div>
      </div>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Impact and Tangible
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The impact of Winners BC Career reverberates through the success stories of individuals within the community, transforming careers and lives.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-blue-100 text-6xl font-serif leading-none">"</div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Image
                        src="/ava.webp"
                        alt="Arab Agbaje-Salami"
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-blue-100 shadow-md"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-gray-900">Arab Agbaje-Salami</h4>
                      <p className="text-blue-600 font-medium">Accountant</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed italic text-lg">
                    "My name is Arab Agbaje-Salami an Accountant. Winners career was introduced to me through a colleague, every job posted on their platform has been on point so far. I'm happy to share that I just landed a new job as an Accountant with one of the key players in the FMCG space in Nigeria through the jobs shared on the platform."
                  </blockquote>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-100 to-transparent rounded-full -mr-16 -mb-16"></div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-blue-100 text-6xl font-serif leading-none">"</div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Image
                        src="/ava1.webp"
                        alt="Oluwatomisin Sodeinde"
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-blue-100 shadow-md"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold text-gray-900">Oluwatomisin Sodeinde</h4>
                      <p className="text-blue-600 font-medium">Professional</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed italic text-lg">
                    "My name is Tomi, I heard of winners careers from church friends and joined the whatsapp group. I submitted many applications which built my confidence and resilience, I kept pushing because as long as there's job updates on Winners careers I'm certain there's something for me. I work as an auditor currently and a friend of mine got an internship opportunity from here."
                  </blockquote>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-100 to-transparent rounded-full -mr-16 -mb-16"></div>
              </div>
            </div>
          </div>

          {/* Optional Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Ready to share your success story?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Share Your Experience
            </button>
          </div>
        </div>
      </section>

      <section className="pt-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Shaping Futures Through
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Professional Excellence
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In the fast-paced landscape of professional development, Winners BC Career stands as a beacon of opportunity and growth. With its unwavering dedication to equipping individuals with the tools, insights, and connections essential for success, the platform continues to play a pivotal role in shaping and advancing careers across a multitude of industries.
              </p>

              {/* CTA Button */}
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                 <a href="https://chat.whatsapp.com/DiIVytGo2En3LYUSIUJiiT" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Our Community
                </a>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Image Content */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="relative">
                <Image
                  src="/m.webp"
                  alt="Professional development illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='animate-fadeIn'>
        <h1 className='text-4xl font-bold text-blue-900 text-center mt-14 animate-slideInUp'>
          Winners BC Career Fair 2024
        </h1>
        <p className='text-gray-600 text-center text-[10px] md:text-[15px] animate-slideInUp' style={{ animationDelay: '0.1s' }}>
          A recruiting event in which employers and recruiters meet with potential employees and where job seekers find more about job openings.
        </p>

        <div className='flex flex-wrap justify-center mt-14'>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4 animate-slideInLeft' style={{ animationDelay: '0.1s' }}>
            <Image src="/carol1.webp" alt="Career fair event" width={300} height={200} className='animate-scaleIn hover:scale-105 transition-transform duration-300' />
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4 animate-slideInLeft' style={{ animationDelay: '0.2s' }}>
            <Image src="/carol2.webp" alt="Career fair participants" width={300} height={200} className='animate-scaleIn hover:scale-105 transition-transform duration-300' />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4 animate-slideInRight' style={{ animationDelay: '0.3s' }}>
            <Image src="/carol3.webp" alt="Career fair networking" width={300} height={200} className='animate-scaleIn hover:scale-105 transition-transform duration-300' />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 p-4 animate-slideInRight' style={{ animationDelay: '0.4s' }}>
            <Image src="/carola4.webp" alt="Career fair presentation" width={300} height={200} className='animate-scaleIn hover:scale-105 transition-transform duration-300' />
          </div>
        </div>
      </div>

    </>
  );
};