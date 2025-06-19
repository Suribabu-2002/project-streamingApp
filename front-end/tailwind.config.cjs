/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-no-scrollbar")],
  browserslist: ["defaults", "not IE 11", "maintained node versions"],
};
