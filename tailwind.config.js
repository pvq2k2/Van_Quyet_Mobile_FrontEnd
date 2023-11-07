/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "rgb(75, 163, 231)",
        "main-dark": "rgb(15, 70, 112)",
      },
    },
  },
  plugins: [],
};
