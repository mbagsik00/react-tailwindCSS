/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
      },
    },
  },
  plugins: [],
};
