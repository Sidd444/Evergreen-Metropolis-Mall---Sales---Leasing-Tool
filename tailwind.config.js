/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#1a1a1a',
        'secondary-light': '#f0f0f0',
        'accent': '#b5935b', // A subtle gold/bronze for luxury feel
      }
    },
  },
  plugins: [],
}