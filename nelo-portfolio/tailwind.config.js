/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0D9488', // teal-600
        secondary: '#3B82F6', // blue-500
        dark: '#0F172A', // slate-900
        light: '#F1F5F9', // slate-100
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
