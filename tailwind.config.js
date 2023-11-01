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
        '7':'1.75rem',
        '14': '3.5rem',
        '75px': '75x',
        '125px': '125px',
        
        '30': '7.5rem',
        '290px': '290px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px',
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',

        'darkblue-500': '#485769',
        'darkblue-600': '#37475A',
        'darkblue-700': '#232f3E',
        'darkblue-800': '#191E26',
        'darkblue-900': '#131A22',

        'gold-100': '#FEBD69',
        'gold-200': '#FAA63A',

        'orange-650': '#E47911',
        'yellow-350': '#F0C14B',

      },
      backgroundImage: {
        'spotify-theme': "url('img/bursts.svg')",
        'spotify-theme-mobile': "url('img/bursts-mobile.svg')",
      },
    backgroundSize: {
        '175%': '175%',
        '195%': '195%'
    },
    backgroundPosition: {
      'banner': '46% 4%',
      'banner-mobile': 'top 25% center'
    },
    fontSize: {
      '9xl': '9rem',
      'subtitle': '1.7rem',
    },
    fontFamily:{
      'arial': 'Arial'
    },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};


