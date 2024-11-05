/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans'],
 
      },
      colors: {
        'menuColor': '#767676',
        'menuHover': '#262626',
        'categoryBg': '#F5F5F3',
        'textcolorProduct': '#767676',
        'arrowColor': '#979797',

      },
      maxWidth: {
        'headerContainer': '1320px',
      },
      width:{
        logoW: "40%",
        menuW: "60%"
      },
      backgroundImage: {
        'banner': "url('../src/assets/banner.png')",
       
      },
    },
  },
  plugins: [],
}

