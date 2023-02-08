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
        textPrimary: '#858584',
        textSecondary: '#FFFFFF',
        callToAction: '#A259FF',
      },
      fontFamily: {
        spaceMono: ['Space Mono'],
      },
    },
  },
  plugins: [],
};
