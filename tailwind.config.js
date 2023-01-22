/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    backgroundGradient: theme => ({
      'orange-gradient': 'linear-gradient(180deg, #EA6C25 0%, #E79C2B 100%)',
      'box-gradient': `linear-gradient(90deg, #F2F5F9 0%, #F2F1FD 58.33%, #FFF1FB 100%)`,
    }),
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
      42: '10.75rem',
      53: '13.125rem',
      62: '15.625rem',
      123: '30.75rem',
      'auto' : 'auto',
    },
    width:{
      22: `5.125rem`,
      53: `13.125rem`,
      42: '10.75rem',
      62: '15.625rem',
      '5/11': '56.25%',
      'auto' : 'auto',
    },
    colors: {
      'blackText': '#241B1B',
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
      'firstOrange': '#EA6C25',
      'secondOrange' : '#E79C2B',
      'whiteBone' : '#F8F8F8',
      'blueRedirect': '#2B4A86',
      'greyTableText': '#A9ACAF',
      'greyTagsTitle': '#778091',
      'blue-600': '#1E386B',
      'gray-9': '#D9D9D9',
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
    padding: {
      10.5 : '2.625rem'
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
      'quote': ['1rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
    },
    listStyleType: {
      alpha : "lower-alpha"
    }
    },
  },
  plugins: [],
}
