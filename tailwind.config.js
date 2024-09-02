/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        goldenrod: "#DAA520",
      },
      fontSize: {
        small: "0.875rem", // Example small text size
        medium: "1rem", // Example medium text size
        large: "1.125rem", // Example large text size
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
