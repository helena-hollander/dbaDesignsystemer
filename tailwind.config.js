/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primarydark:"#001D91",
      primarymid:"#3758DD",
      white: "#FDFFF5",
      contrast: "#FB437A",
    },
    extend: {},
  },
  plugins: [],
}