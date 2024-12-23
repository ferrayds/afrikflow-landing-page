/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    container: {
      padding: '2rem',
      center: true,
    },
    colors: {
      'transparent': 'transparent',
      'primary': '#17706E',
      'secondary': '#F6B339',
      'light': '#eeebe6',
      'warning': '#F6B339',
      'red': '#892024',
      'dark': 'rgb(42 42 41)',
      'gray': 'rgb(150 150 150)',
      'black': 'rgb(0 0 0)',
      'white': 'rgb(255 255 255)',
      'yellow': 'rgb(255 255 0)',
      'green': 'rgb(0 255 0)',
      'dark-transparent': 'rgba(0,0,0,.4)',
      'dark-transparent-x': 'rgba(0,0,0,.2)',
    },
  },
  plugins: [],
}

