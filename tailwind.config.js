/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#eac1bf",
          dark: "#2D3F38",
          light: "#F7E5D9",
        },

        accent: {
          heart: "#A14A3D",
          primaryBtn: "#8B1E3F",
          secondaryBtn: "#C97C5D",
          accentBtn: "#A75D5D",
        },

        text: {
          dark: "#3D2B1F",
          medium: "#5A3E2E",
          light: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
