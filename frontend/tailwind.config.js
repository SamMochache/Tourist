export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FBF8F3',
          100: '#F5EFE6',
          200: '#EADFCC',
          300: '#D9C7A8',
        },
        ink: {
          DEFAULT: '#1C1712',
          soft: '#5B5146',
        },
        forest: {
          500: '#2F5A3F',
          700: '#1F3D2B',
          900: '#122619',
        },
        sunset: {
          400: '#E58A4E',
          500: '#D0632A',
          600: '#B24F1C',
          700: '#963F14',
        },
        ochre: '#C8963E',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
