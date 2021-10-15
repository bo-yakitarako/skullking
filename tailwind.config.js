module.exports = {
  mode: 'jit',
  purge: [
    'client/pages/**/*.{js,ts,jsx,tsx}',
    'client/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
