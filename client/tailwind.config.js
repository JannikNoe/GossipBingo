/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color:{
        DarkGrayPrimary: '#262525',
        GamePrimary:'#EB7A51',
        GrayPrimary:'#F7F5F5',
        YellowPrimary:'#FFFF00',

      },
      backgroundColor:{
        bgDarkGrayPrimary: '#262525',
        bgGamePrimary:'#EB7A51',
        BgGrayPrimary:'#F7F5F5',
      }
    },
  },
  plugins: [],
}