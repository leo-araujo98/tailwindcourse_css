/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
     
    },
    extend: {
      spacing:{
        '14': '3.5rem',
        '125px': '125px'
      },
      colors: {
        'hoverspt': '#18D760',
        'purble-main': '#2D46B9',
        'green-main': '#1ED760'
      },
      backgroundsImage: theme => ({
        'spotify-theme': "url('/imgs/spotify/bursts.svg')",
        'spotify-theme-mobile': "url('/imgs/spotify/bursts-mobile.svg')",
      }),
    backgroundSize: {
        '175%': '175%',
        '195%': '195%'
    },
    backgroundPosition: {
      'banner': '46% 4%',
      'banner-mobile': 'top 25% center'
    },
    fontSize: {
      '9xl': '9rem'
    },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
