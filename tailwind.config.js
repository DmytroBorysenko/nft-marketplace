/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      lg: { max: '1280px' },
      md: { max: '974px' },
      sm: { max: '520px' },
    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        bgPrimary: '#2B2B2B',
        bgSecondary: '#3B3B3B',
        gray: '#858584',
        white: '#FFFFFF',
        callToAction: '#A259FF',
      },
      fontFamily: {
        spaceMono: ['Space Mono'],
      },
      invert: {
        55: '.55',
      },
      sepia: {
        05: '.05',
      },
      saturate: {
        74: '.74',
      },
      hueRotate: {
        21: '21deg',
      },
      brightness: {
        94: '.94',
      },
      contrast: {
        90: '.90',
      },
    },
  },
  plugins: [],
};
