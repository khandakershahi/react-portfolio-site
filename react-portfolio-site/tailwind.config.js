/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#29332C",
        "secondary": "#BDB284",
        "background-light": "#f7f7f7",
        "background-dark": "#181a19",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: { 
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px" 
      },
    },
  },
  plugins: [],
  darkMode: "class",
}