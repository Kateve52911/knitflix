/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3A5646",
          // dark: "#401D33",
          contrast: "#F2E2C4",
          // DEFAULT: "#715062",
          // dark: "#754141",
        },

        accent: {
          heart: "#754141",
        },
      },
    },
  },
  plugins: [],
};
