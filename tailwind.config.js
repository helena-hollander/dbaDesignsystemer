/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primarydark:"#001D91",
      primarymid:"#5D7CF5",
      white: "#FDFFF5",
      contrast: "#FB437A",
    },
    extend: {
      fontFamily: {
        titelDisplay: ["Titel-Display", "obliqe"],
        priceDisplay: ["Price-Display", "sans-serif"],
        buttonPrimary: ["Button-Primary", "sans-serif"],
        titelSecondary: ["Titel-Secondary", "sans-serif"],
        regularOblique: ["Regular-Oblique", "sans-serif"],
      }
    },
  },
  plugins: [],
}