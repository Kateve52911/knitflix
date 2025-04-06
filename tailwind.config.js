/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#88A096",
          dark: "#2D3F38",
          light: "#D1DAD5",
        },

        accent: {
          heart: "#2D3F38",
          primaryBtn: "#2D5241",
          secondaryBtn: "4B6E85",
          accentBtn: "#A86C49",
        },
      },
    },
  },
  plugins: [],
};
