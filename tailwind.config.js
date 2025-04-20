/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E5AA70",
          dark: "#2D3F38",
          light: "#F5EFE0",
        },

        accent: {
          heart: "#764258",
          primaryBtn: "#3E5E41",
          secondaryBtn: "#994031",
          accentBtn: "#2C4C7A",
        },

        text: {
          dark: "#3B2314",
          medium: "#1E3148",
          light: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
