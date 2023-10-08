/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'abu':  'rgba(185, 185, 185, 0.20)',
        'abu2':  'rgba(150, 150, 150, 0.1)',
        'putih':  'rgba(255, 255, 255, 0.866)',
        'hitam': '#141D26',
        'fonthitam': '#212121',
      },
      fontFamily:{
        'playfair': ['Playfair'],
        'inter': ['Inter']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
],
}

