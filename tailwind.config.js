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
    },
  },
  plugins: [],
};
