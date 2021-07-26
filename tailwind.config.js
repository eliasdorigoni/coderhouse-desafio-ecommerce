module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'main-light': '#B2A8C3',
    }),
    extend: {
      backgroundColor: theme => ({
        site: '#230759',
        'site-darker': '#180441',
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
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
