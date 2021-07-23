const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
      light: 100,
      regular: 200,
      medium: 300,
      bold: 400,
      black: 500,
    },
    borderColor: theme => ({
      orange: "#FF8500",
    }),
    textColor: {
      white: "#fff",
      gray: "#adb0b4",
      orange: "#FF8500",
    },
    extend: {
      fontFamily: {
        sans: ["Gilroy", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      lineHeight: {
        "extra-loose": "0.85",
      },
      backgroundColor: {
        orange: "#FF8500",
        gray2: "#edf2f7",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
}
