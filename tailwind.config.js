/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        sm:"360px",
        md:"768px",
      },
      spacing:{
        "big":"48rem"
      }
    },
    fontFamily:{
      poppins:['Poppins','serif']
    }
  },
  plugins: [],
}

