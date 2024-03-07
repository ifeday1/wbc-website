import { React, useState } from 'react';
import Con from '../assests/contact.jpg';
import Loc from '../assests/Loc.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Location from '../components/Location';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const showToast = () => {
  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.phone ||
  //     !formData.message
  //   ) {
  //     toast({
  //       title: 'Fill empty fields',
  //       status: 'warning',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   } else {
  //     toast({
  //       title: 'Sent',
  //       description: 'Your message has been sent successfully.',
  //       status: 'success',
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   }
  // };
  const [state, handleSubmit] = useForm('xqkrpddv');
  if (state.succeeded) {
    return <p>Thanks for your response!!</p>;
  }
  return (
    <>
      <Navbar />
      <div className='relative mb pt-10'>
        <img
          src={Con} // Replace with the path to your image
          className='w-full h-auto'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
          <div className='text-white text-center'>
            <h2 className='text-4xl font-bold mb-2 md:text-6xl'>CONTACT</h2>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:px-32 sm:flex-row justify-between p-4 text-white px-5 mt-14'>
        {/* First Flex Item - Location */}
        <div className='flex-shrink-0 mb-4 sm:mb-0'>
          <div className='flex items-center bg-blue p-4 rounded-md'>
            <div className='mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10 2a7 7 0 0 1 7 7c0 5-7 11-7 11s-7-6-7-11a7 7 0 0 1 7-7zm0 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' />
              </svg>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Our Location</h3>
              <p>
                5, Adebayo Adekoya street New<br></br> Garage, Bariga, Lagos
              </p>
            </div>
          </div>
        </div>

        {/* Second Flex Item - Call */}
        <div className='flex-shrink-0 mb-4 sm:mb-0'>
          <div className='flex items-center bg-purple p-4 rounded-md'>
            <div className='mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                // class='icon icon-tabler icon-tabler-phone'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#ffffff'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
              </svg>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Phone Number</h3>
              <p>+234</p>
            </div>
          </div>
        </div>

        {/* Third Flex Item - Mail */}
        <div className='flex-shrink-0'>
          <div
            className='flex items-center bg-green p-4 rounded-md'
            style={{ backgroundImage: 'url(location-image.jpg)' }}
          >
            <div className='mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                // class='icon icon-tabler icon-tabler-mail-filled'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#ffffff'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z'
                  stroke-width='0'
                  fill='currentColor'
                />
                <path
                  d='M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z'
                  stroke-width='0'
                  fill='currentColor'
                />
              </svg>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Email Address</h3>
              <p>
                winnesbaptistchurch5<br></br>@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white p-6 shadow-lg rounded-md bg-grey-400 mt-10'>
        {/* First Flex Item - Form Inputs (Row) */}
        <form
          className='flex flex-row mb-4'
          as='form'
          action='https://formspree.io/f/xqkrpddv'
          method='POST'
          spacing='2'
          onSubmit={handleSubmit}
          //onClick={showToast}
        >
          <div className='flex flex-col flex-grow mr-4 '>
            <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>

            {/* Name Input */}
            <div className='mb-4'>
              <label className='block text-gray-600'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                id='name'
                className='border p-2 w-full rounded'
              />
            </div>

            {/* Email Input */}

            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-600'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                id='email'
                className='border p-2 w-full rounded'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>

            {/* Phone Number Input */}
            <div className='mb-4'>
              <label htmlFor='phone' className='block text-gray-600'>
                Phone Number
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                id='phone'
                className='border p-2 w-full rounded'
              />
            </div>

            {/* Message Input (Longer) */}
            <div className='mb-4'>
              <label htmlFor='message' className='block text-gray-600'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                id='message'
                rows='4'
                className='border p-2 w-full rounded'
              ></textarea>
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <button
              className=' bg-blue text-white p-4 text-center cursor-pointer hover:bg-slate-900'
              type='submit'
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>

          {/* Second Flex Item - Image with Border Radius (Column) */}
          <div className='flex items-center justify-center'>
            <img
              src={Loc} // Replace with the path to your image
              className=' w-96 h-auto rounded-md mb-4'
            />
          </div>
        </form>
      </div>

      <Location />

      <Footer />
    </>
  );
};

export default Contact;
