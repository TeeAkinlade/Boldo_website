/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      colors: {
        secondaryBlue: "#0A2640",
        primaryGray: "#777777",
        green: "#65E4A3",
        lightGray: "#c4c4c4",
      }
    },
  },
  plugins: [],
}