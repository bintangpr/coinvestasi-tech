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
      22: `5.125rem`,
      53: '13.125rem',
      62: '15.625rem',
      123: '30.75rem',
    },
    width:{
      22: `5.125rem`,
      53: `13.125rem`,
      62: '15.625rem',
      '5/11': '56.25%',
    },
    colors: {
      'yellow': '#F2B124',
      'greyHeadline' : "#A6B0C0",
      'greyText': '#D3D9E3',
      'bluePage': '#2B64CE',
      'whiteGrey': '#F8F8F8',
      'boxLinear' : '#F2F5F9',
      'secondBoxLinear' : '##F2F1FD',
      'upperBoxLinear' :'#fff1fb',
      'blueText': '#2792DF',
      'blueBorder' : '#BBC9E8',
    },
    borderRadius: {
      'timer' : '3.4375rem'
    },
    boxShadow: {
      'bigbox': '-6px 6px 18px rgba(0, 0, 0, 0.03)',
    },
    margin: {
      '18': '4.5rem',
    },
    fontSize: {
      'h1': ['2rem', {
        lineHeight: '2.75rem',
        fontWeight: '700',
      }],
      'paragraph': ['1rem', {
        lineHeight: '1.875rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
    }
    },
  },
  plugins: [],
}
