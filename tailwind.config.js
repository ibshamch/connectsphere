/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      height: {},
      screens: {
        sm: "576px",

        md: "960px",

        lg: "1440px",
      },
      colors: {
        lightthemebg: "#EEEEEE",
        darkthemebg: "#222831",
        lightSubtitlegraytext: "#999999",
        primarybtn: "#1DA1F2",
        welcomebtn: "#6AA84F",
        secondarybtn: "#E1E8ED",
        logoheadingConnect: "#1877F2",
        inputLight: "#DDDDDD",
        inputDark: "#31363F",
        modalBg: "#E1E8ED",
      },
    },
  },
  plugins: [],
};
