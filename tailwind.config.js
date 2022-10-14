/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '36rem',
      },
      scale: {
        '90': '0.95'
      }
    },
  },
  plugins: [],
}
