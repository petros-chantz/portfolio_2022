/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        "1px": "1px",
        "0.5px": "0.5px",
      },
    },
  },
  plugins: [],
};
