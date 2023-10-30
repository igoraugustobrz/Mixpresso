/* prettier-ignore */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'Arial', 'Times New Roman'],
      },
      backgroundImage: {
        'black-white': 'linear-gradient(180deg, transparent, #000, #000, #000, #000, #000, #000, #000, #000, #000, #000)'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
