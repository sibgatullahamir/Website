/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        goldenrod: "#DAA520",
      },
      fontSize: {
        small: "0.875rem",
        medium: "1rem",
        large: "1.125rem",
      },
      animation: {
        slider: "slider 10s infinite linear",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
