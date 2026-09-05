/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#051424',
        darkblue: '#151C2A',
        darkblack: '#1E1E1E',
        primaryBlue: '#1E7BFF',
        blue: '#0088FF',
        pink: '#E040FB',
        purple: '#42328F',
        magenta: '#4C105F',
        storyRing: '#F53C6D',
        lightRed: '#B21671',
        onlineGreen: '#00D15D',
        subtitleGray: '#B0B5C0',
        dimLabelGray: '#8E93A0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #F53C6D 0%, #E040FB 50%, #1E7BFF 100%)',
        'cinema-gradient': 'linear-gradient(135deg, #4C105F 0%, #151C2A 100%)',
      },
    },
  },
  plugins: [],
}
