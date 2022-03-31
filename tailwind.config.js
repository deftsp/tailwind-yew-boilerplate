module.exports = {
  content: [
    './index.html',
    './cab/src/**/*.rs',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
  },
  plugins: [require('@tailwindcss/typography')],
}
