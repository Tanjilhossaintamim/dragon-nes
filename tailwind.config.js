/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        'color-dark-3': "#706F6F",
        'color-dark-4': "#9F9F9F",
        'color-dark-2': "#403F3F",
        'color-dark-6': "#E7E7E7",
        'color-dark-7': "#F3F3F3",
        'color-secondary': "#D72050",
        'color-mixed': "rgba(5, 0, 29, 0.80)",
      }
    },
  },
  plugins: [],
}

