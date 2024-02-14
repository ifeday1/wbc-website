/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      },
    },
  },
  plugins: [],
};
