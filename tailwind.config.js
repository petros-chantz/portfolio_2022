/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "2000px",
      },

      height: {
        95: "95%",
      },
      dropShadow: {
        test: [
          "1.6px 1.6px -1.7px rgba(255, 255, 255, 0.018)",
          "3.4px 3.4px 1.3px rgba(255, 255, 255, 0.025)",
          "5.8px 5.8px 5.5px rgba(255, 255, 255, 0.031)",
          "8.7px 8.7px 10.7px rgba(255, 255, 255, 0.037)",
          "12.5px 12.5px 16.7px rgba(255, 255, 255, 0.042)",
          "17.7px 17.7px 23.7px rgba(255, 255, 255, 0.048)",
          "25.1px 25.1px 31.9px rgba(255, 255, 255, 0.054)",
          "36.5px 36.5px 41.9px rgba(255, 255, 255, 0.061)",
          "56.3px 56.3px 55.1px rgba(255, 255, 255, 0.071)",
          "100px 100px 80px rgba(255, 255, 255, 0.09)",
        ],
      },
    },
  },
  plugins: [],
};
