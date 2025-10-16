/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF1EC',
          100: '#FFE4D9',
          200: '#FFC8B3',
          300: '#FFAD8E',
          400: '#FF9369',
          500: '#FF8C42',
          600: '#FF6B6B',
          700: '#FF5A3A',
          800: '#E14B2C',
          900: '#C63F26',
        },
        warmblue: {
          400: '#4ECDC4',
          500: '#45B7D1',
        },
        background: {
          light: '#FFFBF5',
          DEFAULT: '#FFF8F0',
          dark: '#1A1D29',
          dark2: '#252A3A',
        },
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(135deg, #FF8C42 0%, #FF6B6B 50%, #845EC2 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(37,42,58,0.6), rgba(37,42,58,0.2))',
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

