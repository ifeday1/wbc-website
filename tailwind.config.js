const colors = require('tailwindcss/colors');

// Logo sky blue, deepening into a near-black navy for dark surfaces
const sky = {
  50: '#EEF6FC',
  100: '#D9EBF7',
  200: '#B5D7EF',
  300: '#84BCE3',
  400: '#4FA0D6',
  500: '#2F86C4',
  600: '#226CA6',
  700: '#1D5786',
  800: '#1A3A5A',
  900: '#121D2E',
  950: '#0A0F1A',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: sky,
        // `gold` is the accent used across pages; it shares the logo blue so there is one accent colour
        gold: sky,
        stone: colors.zinc,
        paper: '#F4F4F2',
        ink: '#0B0B0C',
        live: '#E5372E',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 11, 12, 0.04)',
        'card-hover': '0 24px 48px -24px rgba(11, 11, 12, 0.25)',
        float: '0 10px 40px -10px rgba(11, 11, 12, 0.18), 0 2px 6px rgba(11, 11, 12, 0.05)',
      },
    },
  },
  plugins: [],
};
