/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // All files inside src
    "./index.html",                     // Root index.html
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'], // Your custom Google font
      },
    },
  },
  plugins: [],
};
