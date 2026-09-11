/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: { sans: ['DM Sans', 'Arial', 'sans-serif'] },
      colors: {
        msaBlue: '#06469F', msaTeal: '#13AAA5', msaDark: '#071F42',
        navy: '#062B63', teal: '#13AAA5', lightBlue: '#EEF6FC'
      }
    }
  },
  plugins: []
}
