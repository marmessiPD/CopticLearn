/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        coptic: ['Noto Sans Coptic', 'sans-serif'],
      },
      colors: {
        'coptic-gold': '#FFD700',
        'coptic-blue': '#003366',
        'dark-primary': '#1a202c',
        'dark-secondary': '#2d3748',
        'dark-text': '#edf2f7',
        'light-primary': '#ffffff',
        'light-secondary': '#f7fafc',
        'light-text': '#2d3748',
      },
      padding: {
        'safe-area-inset-top': 'env(safe-area-inset-top)',
        'safe-area-inset-right': 'env(safe-area-inset-right)',
        'safe-area-inset-bottom': 'env(safe-area-inset-bottom)',
        'safe-area-inset-left': 'env(safe-area-inset-left)',
      },
    },
  },
  plugins: [],
}

