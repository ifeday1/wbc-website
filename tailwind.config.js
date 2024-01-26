/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#0666BA',
        light: '#F1F7FB',
        green: '#0EA60B',
        per: '#7BB2AB',
        grey: '#E2E5F2',
      },
    },
  },
  plugins: [],
};
