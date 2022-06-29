module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
     fontFamily:{
       'poppins':['Poppins', 'sans-serif'],
       'open':['Open Sans', 'sans-serif']
     }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }