/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jost': ['Jost' ],
      'Volkorn': ['Vollkorn' ],
    },
    extend: {
      spacing: {
        'NavContainer': '1600px',
        'aboutContainer':'1290px',
      },
      colors:{
        'textHover' : "#E5745D",
        'text' : "#00413D",
        'NavBG': '#F9F4F1',
        'subTitle': '#EF8100',
        'navBorder': '#00413d2c',
        'gmail': '#E5745D',
        'portBG': '#faf5f2',
        'FooterP' :'#4B7773',
        "FooterBorder":'#00413d2c'
  
      }
    },
  },
  plugins: [],
}

