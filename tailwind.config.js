/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'BebasNeueStatic': ['Babas Neue'],
        'roboto': ['Roboto'],
        'playwrite': ['Playwrite GB S', 'serif'],
      },
      animation: {
        'one-spin': 'one-spin 0.5s ease-out',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
      },
      keyframes: {
        'one-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
