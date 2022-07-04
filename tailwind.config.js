/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'neutral':'#262626',
      'green': {
        'hov':'#00FF00',
        500:'#22c55e',
      },
      'gray': {
        400:'#9ca3af',
        800: '#1f2937',
      },
      'slate':{
        300:'#cbd5e1',
        900:'#0f172a'
      },
      'white':'#fff',
      'blue': '#1d4ed8',

    },
    extend: {
      screens: {
        '3xl': '2048px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [],
}
