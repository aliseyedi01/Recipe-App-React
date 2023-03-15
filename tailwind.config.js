/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        image: "40% 60% 27% 73% / 48% 55% 45% 52% ",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
