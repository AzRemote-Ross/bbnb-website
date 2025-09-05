/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: { 
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'barbershop': {
          gold: {
            50: '#FFFBF0',
            100: '#FFF8DC',
            200: '#F4E4A6',
            300: '#E6D76B',
            400: '#D4AF37',
            500: '#B8941F',
            600: '#9A7B15',
            700: '#7A610F',
            800: '#5C4A0B',
            900: '#3D3107',
          },
          brown: {
            50: '#FDF8F4',
            100: '#F5E6D3',
            200: '#DEB887',
            300: '#CD853F',
            400: '#A0522D',
            500: '#8B4513',
            600: '#723A0F',
            700: '#5A2E0C',
            800: '#412208',
            900: '#281705',
          },
        },
        warm: {
          50: '#FEFEFE',
          100: '#FAF8F5',
          200: '#F5F1EA',
          300: '#EBE4D6',
          400: '#E0D6C2',
          500: '#D1C4AD',
          600: '#B8A88A',
          700: '#9E8C68',
          800: '#7A6B4F',
          900: '#564A36',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 245, 0.9) 100%)',
      },
      boxShadow: {
        'warm': '0 10px 40px rgba(212, 175, 55, 0.1)',
        'warm-lg': '0 20px 60px rgba(212, 175, 55, 0.15)',
      }
    } 
  },
  plugins: [],
};
