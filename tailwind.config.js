/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {fontFamily: {
      'BebasNeue': ['Bebas Neue', 'sans-serif'],
      'Anton': ['Anton', 'sans-serif'],
      'unique': ['Urbanist', 'sans-serif'],
    },},
  },
  plugins: [],
}

