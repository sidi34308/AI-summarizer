/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'plex-sans-arabic': ['"IBM Plex Sans Arabic"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],


      }

    },

  },
  plugins: [],
}