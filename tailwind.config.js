/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
      xxs: { min: '0px', max: '400px'},
      xs: { min: '400px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
    },
      fontFamily: {
      inter: "'Inter', serif",
      poppins: "'Poppins', serif"   
    },
    height:{
      53: '13.125rem',
      62: '15.625rem',
      123: '30.75rem',
    },
    width:{
      53: `13.125rem`,
      62: '15.625rem',
    },
    colors: {
      'yellow': '#F2B124',
      'greyText': '#D3D9E3',
      'bluePage': '#2B64CE',
      'whiteGrey': '#F8F8F8',
      'boxLinear' : '#F2F5F9',
      'upperBoxLinear' :'#fff1fb',
    },
    borderRadius: {
      'timer' : '3.4375rem'
    },
    width: {
      '5/11': '56.25%',
    },
    },
  },
  plugins: [],
}
