/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#161622",
      },
      fontFamily:{
        rthin:["Roboto-Thin",'sans-serif'],
        rreg:["Roboto-Regular",'sans-serif'],
        rbold:["Roboto-Bold",'sans-serif'],
        rmedium:["Roboto-Medium",'sans-serif'],
        rlight:["Roboto-Light",'sans-serif'],
      }
    },
  },
  plugins: [],
}

