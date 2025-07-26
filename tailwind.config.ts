import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
      },
      colors: {
        primary: {
          50: '#faf9f7',
          100: '#f5f2ee',
          200: '#e8e1d7',
          300: '#dbc8b8',
          400: '#c9a882',
          500: '#b89660',
          600: '#a67c52',
          700: '#8b6546',
          800: '#72523e',
          900: '#5d4435',
        },
        earth: {
          50: '#fdfcfb',
          100: '#f7f4f0',
          200: '#ede6dd',
          300: '#e0d4c7',
          400: '#d0bfa8',
          500: '#bfa68a',
          600: '#a88e73',
          700: '#8f765f',
          800: '#756250',
          900: '#615143',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c7cdc7',
          300: '#a4ada4',
          400: '#7d8a7d',
          500: '#627062',
          600: '#4e5a4e',
          700: '#424942',
          800: '#373d37',
          900: '#2f332f',
        },
        cream: {
          50: '#fefefe',
          100: '#fcfbf9',
          200: '#f7f4f0',
          300: '#f1ece5',
          400: '#e8dfd5',
          500: '#ddd0c1',
          600: '#cbb8a4',
          700: '#b39c82',
          800: '#947f69',
          900: '#796856',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
} satisfies Config; 