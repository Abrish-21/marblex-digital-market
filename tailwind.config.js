/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'BebasNeueStatic': ['Babas Neue'],
        'roboto': ['Roboto'],
        'playwrite': ['Playwrite GB S', 'serif'],
        
      
      },
      
        animation: {
          'one-spin': 'one-spin 0.5s ease-out', // Customize duration and timing
        },
        keyframes: {
          'one-spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
      },
    },
  
  plugins: [],
}

