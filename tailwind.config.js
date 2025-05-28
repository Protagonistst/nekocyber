/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00FFFF',
        'cyber-magenta': '#FF00FF',
        'cyber-black': '#0D0D0D',
        'cyber-glow': 'rgba(0, 255, 255, 0.5)',
        'cyber-dark': '#151515',
        'cyber-light': '#f0f0f0',
        'cyber-accent': '#FE53BB',
        'cyber-yellow': '#F5D300',
      },
      fontFamily: {
        'cyberpunk': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
        'neon-magenta': '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF',
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { 'box-shadow': '0 0 5px #00FFFF, 0 0 10px #00FFFF' },
          'to': { 'box-shadow': '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
      },
    },
  },
  plugins: [],
}
