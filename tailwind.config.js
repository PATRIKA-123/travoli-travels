/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0faf8',
          100: '#d5f0ea',
          200: '#aadfd5',
          300: '#73c6b9',
          400: '#43a89b',
          500: '#2d8c80',
          600: '#1e6e64',
          700: '#195a52',
          800: '#164740',
          900: '#123c36',
          950: '#0a2320',
        },
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
