/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
 
  ],
  darkMode: "media",
  theme: {
    // fontSize: {
    //   enano: '1px'},

    screens:{
      'sm':'480px',
      'md':'768px',
      'lg':'976px',
      'xl': '1440px'

    },
    extend: {
      colors:{
        Hgold:'#da9100',
        Ygold:'#ffdf00',
        fire: "#e25822"

      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

