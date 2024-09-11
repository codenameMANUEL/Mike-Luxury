// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        albert: ['"Albert Sans"', 'sans-serif'],
      },
      colors: {
        'instagram-start': '#f58529',
        'instagram-end': '#dd2a7b',
      },
      backgroundImage: {
        'bannerOne': "url('/src/assets/bannerOne.jpg')"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
