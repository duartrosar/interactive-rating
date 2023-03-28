/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Overpass"', "sans-serif"],
      },
      colors: {
        primary: "#fb7413",
        "light-gray": "#959eac",
        "dark-gray": "#0c131b",
        selected: "#7c8798",
        "dark-blue": "#252d37",
      },
    },
  },
  plugins: [],
};
