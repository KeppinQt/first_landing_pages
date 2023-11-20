/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      'thin': '0.5px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      height: {
        '30': '100%',
      },
      colors: {
        primary: '#eab308',
      }
    },
  },
  plugins: [],
}

