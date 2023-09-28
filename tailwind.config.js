/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#000000',
      'gray': '#CCCCCC'
    },
    extend: {
      spacing: {
        '1000': '1000px',
        '90': '90px',
        '80': '80%',
        '10': '10%'
      },
    },
  },
  plugins: [],
}

