/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kahoot: {
          red: '#e21b3c',
          blue: '#1368ce',
          yellow: '#d89e00',
          green: '#26890c',
          dark: '#1e1b4b',
          purple: '#46178f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Cascadia Code', 'Consolas', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-short': 'bounce 0.8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
