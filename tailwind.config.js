module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    colors: {
      'sea': {
        200: '#51829B',
        400: '#9BB0C1'
      },
      'purple': {
        400: '#282e5c',
        500: '#2d3467',
        600: '#333A73',
        700: '#232850'
      }
    },
    extend: {
      spacing: {
        '320': '1280px',
      }
    },
  },
  plugins: [],
}

