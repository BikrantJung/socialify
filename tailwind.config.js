/** @type {import('tailwindcss').Config} */
const {} = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--sans-font)",
      },
      boxShadow: ({ theme }) => ({
        ring: `0px 0px 0px 3px ${theme("colors.blue.200")}`,
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
