/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        extralight:['extralight'],
        light:['light'],
        regular:['regular'],
        medium:['medium'],
        semibold:['semibold'],
        bold:['bold'],
        extrabold:['extrabold']
      },
      colors:{
        'primary': {
        '50': '#f1fcf8',
        '100': '#d0f7e9',
        '200': '#a2edd6',
        '300': '#70dec0',
        '400': '#3dc4a3',
        '500': '#23a98b',
        '600': '#1a8771',
        '700': '#196c5c',
        '800': '#18574c',
        '900': '#194840',
        '950': '#082b26',
    },
    
      }
    },
  },
  plugins: [],
}