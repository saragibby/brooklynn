module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gold': '#D4AF37'
      },
      fontFamily: {
        'fancy': ['Rock Salt', 'cursive'],
        'body': ['Raleway', 'sans-serif']
      },
      minWidth: {
        '96': '24rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
