/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js, jsx}', './src/pages/*.jsx', './src/components/*.{jsx, js}' , './src/components/modal/*.jsx' ],
  theme: {
    extend: {
      colors: {
        'custom1' : '#F3904F',
        'custom2' : '#3B4371',
        'custom3' : '#1D2671',
        'custom4' : '#C33764',
        'custom5' : '#ffffff'
      }
    },
  },
  plugins: [],
}
