/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'white-36': '#FFFFFF5C',
      'white-50': '#FFFFFF80',
      purple: '#303345',
      gradient: 'linear-gradient(180deg, #FEE3BC 0%, #000000 100%)',
      grey: '#9A938C',
      black: '#1B1919',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.4375rem',
      sm: '0.5625rem',
      bs: '0.875rem',
      lg: '1.25rem',
      xl: '2.6875rem',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
  },
  plugins: [],
};
