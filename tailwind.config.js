/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {

      fontSize:{
        'h1':'2.5rem',
        'h2':'2rem',
        'h3':'1.75rem',
        'h4':'1.5rem',
        'h5':'1.25rem',
        'h6':'1rem',
      }
      ,
      container:{
        padding:'2rem'
      }
    },
  },
  plugins: [],
}

