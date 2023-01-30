/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'sans': ['josefin-sans'],
      'mono': ['Roboto Mono', 'SFMono-Regular']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}