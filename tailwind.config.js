/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#23BE0A",
        lightGreen: "#59C6D2" 
      }
    },
  },
  plugins: [],
}