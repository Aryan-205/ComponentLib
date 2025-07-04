/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spin 5s linear infinite', // adjust speed here
      },
    },
  },
  plugins: [],
}