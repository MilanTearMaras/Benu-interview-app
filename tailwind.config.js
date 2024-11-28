/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#96BA7B',
        secondary: '#FEBC94',
        dark: '#252B42',
        light: '#FDF3F1',
        muted: '#737373',
        red: '#E74040',
        border: '#E6E6E6',
        gray: '#FAFAFA',
        pink: '#FFF2F3'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

