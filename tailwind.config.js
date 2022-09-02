/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        white: '#FAFAFA',
        black:'#2D2F36',
        primary: '#5792F6',
        secondary: '#C5EEE5',
        bg_secondary: '#AEC0C9',
        bg_table: '#40454C',
        off_white: '#D9D9D9',
        red: '#D65151',
        dark_blue:'#046671',
        dark_yellow:'#FEDD4D',
        green: '#69C6A7',
        bg_select: '#555C64',
        bg_form: '#2D2F36FC',
        bg_btn: '#40454C',
        heading: '#73A9AD',
        landing_btn: '#9FEDD7'
        
        
      },
    },
  },
  plugins: [],
}
