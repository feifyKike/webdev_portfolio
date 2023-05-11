/** @type {import('tailwindcss').Config} */
import portfolio from './src/portfolio'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-color': portfolio.buttonColor,
        'link-color': portfolio.LinkHighlightColor
      }
    },
  },
  plugins: [],
}

