/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color:{
        bgDarkGrayPrimary: '#262525',
        bgGamePrimary:'#EB7A51',
        BgGrayPrimary:'#F7F5F5',
      }
    },
  },
  plugins: [],
}