/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12131A',
        marquee: '#E8B04B',
        crimson: '#C1443D',
        paper: '#F3F1EA',
        slate: '#8B8FA3',
        panel: '#1B1D28',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
