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
        700: '#4831D4'
      },
      'gray': {
        100: '#737D87'
      },
      'yellow': {
        500: '#F0BB41'
      },
      'green': {
        200: '#01C38D',
      }
    },
    extend: {
      spacing: {
        '320': '1280px',
        '420': '1400px',
      }
    },
  },
  plugins: [],
}

