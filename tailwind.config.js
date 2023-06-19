/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: '#36384D',
        background: '#1e1e1e',
        tomato: '#ff6155',
        darkNavy: '#242742',
        greyCustom: 'rgba(25, 24, 43, 0.25)',
        gradient: 'linear-gradient(204.47deg, #FF6A3A 0%, #FF527B 100%)'
      }
    }
  },
  plugins: [],
}

