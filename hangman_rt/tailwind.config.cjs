/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        "keys-container" : 'repeat(auto-fill, minmax(65px, 1fr))'
      }
    },
  },
  plugins: [],
}
