/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wood-brown': '#8B6F47',
        'cream-white': '#F5F1E8',
        'soft-green': '#7FB069',
        'red-accent': '#D32F2F',
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

