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
        'slide-down': {
          '0%': {
            transform: 'translateY(-60%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'translateY(-60%)',
            opacity: 0,
          },
        },
      },
      animation: {
        'slide-from-left': 'slide-from-left 0.2s ease-in-out',
        'slide-down': 'slide-down 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
