/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#800000', // maroon
          light: '#990000',
          dark: '#660000',
        },
        secondary: {
          DEFAULT: '#808080', // grey
          light: '#A0A0A0',
          dark: '#606060',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rotate-0': {
          transform: 'rotate(0deg)',
        },
        '.rotate-90': {
          transform: 'rotate(90deg)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
}