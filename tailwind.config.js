/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-back-forth': {
          '0%, 100%': { transform: 'translateX(100px)' },
          '50%': { transform: 'translateX(0)' },
        },
        'move-forth-back': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100px)' },
        },
      },
      animation: {
        'move-back-forth': 'move-back-forth 2s ease-in-out infinite',
      },},
  },
  plugins: [],
}

