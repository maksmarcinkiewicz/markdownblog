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
      'mono': ['ui-monospace']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}