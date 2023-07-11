/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lato", "sans-serif"],
        body: ["Noto sans", "sans-serif"],
        extra: ["Patua One", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
