/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},

    colors: {
      'white-36': '#FFFFFF5C',
      'white-50': '#FFFFFF80',
      purple: '#303345',
      gradient: 'linear-gradient(180deg, #ffe3bc 0%, #FFFFFF5C 100%)',
      grey: '#9A938C',
      black: '#1B1919',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: '0.85rem',
      bs: '1rem',
      lg: '1.5rem',
      xl: '3.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
};
