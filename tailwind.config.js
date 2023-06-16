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
        grey: 'rgba(25, 24, 43, 0.25)',
        gradient: 'linear-gradient(204.47deg, #FF6A3A 0%, #FF527B 100%)'
      },
      typography: {
        heading: '700 3.5rem/100% "Roboto", sans-serif',
        body: '400 1rem/150% "Roboto", sans-serif',
        bodyBold: '700 1rem/150% "Roboto", sans-serif',
        bodySmall: '700 .75rem/150% "Roboto", sans-serif'
      }
    }
  },
  plugins: [],
}

