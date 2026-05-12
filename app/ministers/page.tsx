import Image from 'next/image';



export const metadata = {
  title: 'Ministers - Winners Baptist Church',
  description: 'Meet our ministers at Winners Baptist Church, Bariga',
};

const Ministers = () => {
  return (
    <>
      

      {/* Hero Section */}
        <div className='relative h-[250px] md:h-[350px] animate-fadeIn'>
          <Image src='/ministers.webp' alt='Church building' fill sizes="100vw" className='w-full h-full object-cover animate-scaleIn' />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
          <div className='text-center text-white px-4 animate-slideInUp'>
            <h2 className='text-1xl font-bold md:text-4xl'>MINISTERS</h2>
            <p className='mt-2 text-[10px] md:text-[15px]'>
              <span className='text-4xl font-semibold'>A</span>
              nd I will give you pastors according to mine heart, which shall
              <br></br>
              feed you with knowledge and understanding. Jeremiah 3:15
            </p>
          </div>
        </div>
      </div>

      {/* Rev. Olusola Oladeni */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn'>
          <div className='md:flex'>
            <div className='md:w-2/5 relative'>
              <div className='h-80 md:h-full'>
                <Image
                  src='/pastor2.webp'
                  alt='Rev Olusola Oladeni'
                  fill
                  className='object-cover animate-scaleIn'
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
                <h3 className='text-white text-2xl font-bold animate-slideInUp'>Rev Olusola Oladeni, Ph.D</h3>
                <p className='text-blue-300 font-semibold animate-slideInUp' style={{ animationDelay: '0.1s' }}>Lead Pastor</p>
              </div>
            </div>
            <div className='md:w-3/5 p-8 md:p-12 flex items-center'>
              <div>
                <div className='w-16 h-1 bg-blue-600 mb-6 animate-slideInLeft'></div>
                <blockquote className='text-gray-600 text-lg leading-relaxed italic mb-6 animate-slideInRight'>
                  "And I will give you pastors according to mine heart, which shall feed you with knowledge and understanding."
                </blockquote>
                <cite className='text-blue-600 font-semibold text-sm'>- Jeremiah 3:15</cite>
                <p className='mt-8 text-gray-700 leading-relaxed animate-slideInUp' style={{ animationDelay: '0.2s' }}>
                  Oladeni, Ola Olusola, PhD, is the Senior Pastor of Winners Baptist
                  Church, Bariga, New-Garage, Lagos. He is a Teacher, Preacher,
                  Psychologist, Gerontologist, Author and marriage Counsellor. In
                  addition to Nigeria Certificate in Education (N.C.E), Dr Sola
                  Oladeni holds a Bachelor of Art (B. A), Master of Education (M. Ed)
                  and Doctor of Philosophy (Ph. D) from the University of Ibadan. He
                  also holds a Bachelor of Theology (B. Th) and Master of Theology (M.
                  Th) from The Nigerian Baptist Theological Seminary, Ogbomoso. He
                  coordinates MARFAM Life Counselling Ministry International (MLCMI),
                  a ministry that is focused on marriage enrichment and marital
                  Counselling; other counselling services and lots more. He's married
                  to his heart-throb Esther Adegbenjo and they are blessed with
                  biological children and many spiritual children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rev. Mrs. Esther Oladeni */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn'>
          <div className='md:flex flex-row-reverse'>
            <div className='md:w-2/5 relative'>
              <div className='h-80 md:h-full'>
                <Image
                  src='/pastormrs.webp'
                  alt='Rev Mrs Esther Oladeni'
                  fill
                  className='object-cover animate-scaleIn'
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
                <h3 className='text-white text-2xl font-bold animate-slideInUp'>Rev Mrs Esther Oladeni</h3>
                <p className='text-blue-300 font-semibold animate-slideInUp' style={{ animationDelay: '0.1s' }}>Teenagers Pastor</p>
              </div>
            </div>
            <div className='md:w-3/5 p-8 md:p-12 flex items-center'>
              <div>
                <div className='w-16 h-1 bg-blue-600 mb-6 animate-slideInRight'></div>
                <blockquote className='text-gray-600 text-lg leading-relaxed italic mb-6 animate-slideInLeft'>
                  "Train up a child in the way he should go: and when he is old, he will not depart from it."
                </blockquote>
                <cite className='text-blue-600 font-semibold text-sm'>- Proverbs 22:6</cite>
                <p className='mt-8 text-gray-700 leading-relaxed animate-slideInUp' style={{ animationDelay: '0.2s' }}>
                  Revd. Adegbenjo Esther Oladeni is a Baptist-trained pastor. She is
                  currently the Teenagers' Pastor of Winners Baptist Church, Bariga
                  Lagos. She is a trained teacher and counsellor. She attended Ilorin
                  Teachers College. In addition to Nigeria Certificate in Education
                  (NCE), she holds her Bachelor of Education (B.Ed) in counselling
                  from the University of Ado Ekiti. Esther holds her Bachelor in
                  Religious Education (B.Re) from the Baptist College of Theology
                  Lagos and her Master of Education (M.Ed) in Guidance and Counselling
                  from the University of Lagos. Esther is the author of several books.
                  She is a member of MARFAM Life Counselling Ministry International
                  (MLCMI), a ministry that is focused on marriage enrichment and other
                  counselling services. Adegbenjo is happily married to Olusola
                  Oladeni, and the marriage is blessed with both biological and
                  spiritual children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry in Action */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 animate-fadeIn'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4 animate-slideInUp'>Ministry in Action</h2>
            <p className='text-gray-600 max-w-2xl mx-auto animate-slideInUp' style={{ animationDelay: '0.1s' }}>
              Witness the transformative power of faith and community in our church services
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 animate-fadeIn'>
            <div className='group relative overflow-hidden rounded-2xl shadow-lg animate-slideInLeft'>
              <div className='relative h-80'>
                <Image
                  src='/Preach.webp'
                  alt='Church service'
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-xl font-bold'>Sunday Worship</h3>
                  <p className='text-sm opacity-90'>Gathering in fellowship and praise</p>
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden rounded-2xl shadow-lg animate-slideInRight'>
              <div className='relative h-80'>
                <Image
                  src='/Preach1.webp'
                  alt='Church service'
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-xl font-bold'>Spiritual Growth</h3>
                  <p className='text-sm opacity-90'>Nurturing faith and wisdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Ministers;
