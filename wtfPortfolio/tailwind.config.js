/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020916",
        accent: "#CEFF7E",
        description: '#9CA3AF'
      },
      fontFamily: {
        'dmsans': ["DM Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
};
