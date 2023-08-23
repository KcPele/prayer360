/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        home: "url('/public/img/home-cross-background.png')",
      },
      screens: {
        nav: "880px",
      },
    },
  },
  plugins: [require("daisyui")],
};
