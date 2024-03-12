/** @type {import('tailwindcss').Config} */
// const theme = useTheme();

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'paper': `#fafafa`
      },
      height: {
        '100': '25rem'
      }
    },
  },
  plugins: [],
}

