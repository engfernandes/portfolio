/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '0px',
      },
      colors: {
        primary: '#FEA55F',
        'primary-hover': '#feae6f',
      },
      fontFamily: {
        firaCode: ['Fira Code', 'monospace'],
      },
      keyframes: {
        'slide-from-left': {
          '0%': {
            transform: 'translateX(0)',
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        'slide-from-left': 'slide-from-left 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}
