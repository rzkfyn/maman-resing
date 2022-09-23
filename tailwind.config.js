/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './assets/js/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: [ 'Quicksand', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}
