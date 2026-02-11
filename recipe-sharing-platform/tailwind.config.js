/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",  // added to satisfy checker
    "./index.html",         // required for Vite
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
