/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A365D', // Deep navy blue
          light: '#2D4A7E',
          dark: '#102A4C',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E6C65D',
          dark: '#B39125',
        },
        accent: {
          DEFAULT: '#E2E8F0', // Light gray
          light: '#F8FAFC',
          dark: '#CBD5E1',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        italiana: ['Italiana', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};