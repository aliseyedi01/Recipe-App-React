/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      image: "40% 60% 27% 73% / 48% 55% 45% 52% ",
    },
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
