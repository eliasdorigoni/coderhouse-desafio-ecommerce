module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        site: '#230759',
      }),
      backgroundImage: theme => ({
        'hexagon-pattern': "url('img/bg-pattern.gif')",
      }),
    },
    fontFamily: {
      'body': ['Play', 'Arial', 'sans-serif'],
      'title': ['Audiowide', 'Play', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
