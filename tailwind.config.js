/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0666BA',
        light: '#F1F7FB',
        green: '#0EA60B',
        purple: '#7B13E2',
        grey: '#E2E5F2',
        gave: '#071593',
        pink: '#A60B7A',
        yellow: '#FCF1DB',
        darkblue: '#0A2D4E',
        orange: '#FF7A00',
        ly: '#F0B94B',
      },
    },
  },
  plugins: [],
};
