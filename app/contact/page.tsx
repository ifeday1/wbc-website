import Image from 'next/image';
import { Metadata } from 'next';
import ContactForm from './ContactForm';
import Location from '../components/Location';

export const metadata: Metadata = {
  title: 'Contact - Winners Baptist Church',
  description: 'Get in touch with Winners Baptist Church, Bariga',
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section with overlaid contact details */}
      <div className="relative h-[250px] md:h-[350px]">
        <Image
          src="/church.webp"
          alt="Winners Baptist Church"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Contact Details Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-3">Contact Us</h1>
          <blockquote className="text-sm md:text-lg text-white/90 italic max-w-2xl mx-auto mb-4 md:mb-6">
            "For where two or three gather in my name, there am I with them."
            <span className="block mt-1 md:mt-2 not-italic font-semibold text-blue-300">— Matthew 18:20</span>
          </blockquote>

          {/* Contact details inline with icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm md:text-base">5, Adebayo Adekoya St, New Garage, Bariga</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.08-1.011.27l-.579 1.173a2.25 2.25 0 01-.659 1.06l-1.623.538v6.852c0 .515-.348.965-.816 1.079l-3.852 1.852a.75.75 0 01-.816 0l-3.852-1.852c-.468-.114-.816-.564-.816-1.079V11.91a2.25 2.25 0 01-.659-1.06l-1.623-.538a2.25 2.25 0 01-1.011-.27l-.579-1.173a.748.748 0 01-.852-1.091V4.875c0-8.284 6.716-15 15-15h2.25A2.25 2.25 0 0122.5 6.75z" />
              </svg>
              <span className="text-sm md:text-base">+234 913 9402 485</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-sm md:text-base">winnersbaptistchurch5@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">Get in Touch</span>
                <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
                <p className="text-gray-600 mt-2">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
              </div>
              <ContactForm />
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Church Info Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <h3 className="text-xl font-bold mb-4 relative z-10">Worship Center</h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-blue-100 text-sm">5, Adebayo Adekoya Street</p>
                      <p className="text-blue-100 text-sm">New Garage, Bariga, Lagos</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6m-3 0a3 3 0 100-6 3 3 0 000 6zm0 9a9 9 0 100-18 9 9 0 000 18z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Service Times</p>
                      <p className="text-blue-100 text-sm">Sundays: 7:00 AM - 12:00 PM</p>
                      <p className="text-blue-100 text-sm">Wednesdays: 6:00 PM (Victory Hour)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Methods</h3>
                <div className="space-y-4">
                  <a href="tel:+2349139402485" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-purple-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.08-1.011.27l-.579 1.173a2.25 2.25 0 01-.659 1.06l-1.623.538v6.852c0 .515-.348.965-.816 1.079l-3.852 1.852a.75.75 0 01-.816 0l-3.852-1.852c-.468-.114-.816-.564-.816-1.079V11.91a2.25 2.25 0 01-.659-1.06l-1.623-.538a2.25 2.25 0 01-1.011-.27l-.579-1.173a.748.748 0 01-.852-1.091V4.875c0-8.284 6.716-15 15-15h2.25A2.25 2.25 0 0122.5 6.75z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call Us</p>
                      <p className="text-gray-600 text-sm">+234 913 9402 485</p>
                    </div>
                  </a>

                  <a href="mailto:winnersbaptistchurch5@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-green-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-gray-600 text-sm">winnersbaptistchurch5@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Our Community</h3>
                <p className="text-gray-600 text-sm mb-4">Stay connected with our latest updates and events</p>
                <div className="grid grid-cols-3 gap-3">
                  <a href="https://www.facebook.com/winnersbaptistchurch" target="_blank" rel="noopener noreferrer" className="w-full h-16 bg-blue-100 hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.637H7.078v-3.497h3.047v-2.275c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.262 2.686.262v2.955h-1.514c-1.514 0-1.99.943-1.99 1.913v2.479h3.312l-.532 3.497h-2.78v8.637C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                   <a href="https://youtube.com/@winnersbaptistchurch1" target="_blank" rel="noopener noreferrer" className="w-full h-16 bg-red-100 hover:bg-red-200 rounded-xl flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/winnersbaptistchurch" target="_blank" rel="noopener noreferrer" className="w-full h-16 bg-pink-100 hover:bg-pink-200 rounded-xl flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-600">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.346.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.346 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.346-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.346-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.95-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Location />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/deacon.webp" alt="Background" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Us This Sunday</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the power of community and worship at Winners Baptist Church.
            We'd love to have you join our family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6m-3 0a3 3 0 100-6 3 3 0 000 6zm0 9a9 9 0 100-18 9 9 0 000 18z" />
              </svg>
              Service Times
            </a>
            <a
              href="/giving"
              className="bg-blue-700 text-white hover:bg-blue-800 font-semibold py-3 px-8 rounded-lg transition-colors border border-blue-400"
            >
              Support Our Ministry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
