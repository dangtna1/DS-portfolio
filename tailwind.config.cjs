module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e8fbff',
          100: '#d0f7ff',
          200: '#a7efff',
          300: '#7fe7ff',
          400: '#39d8ff',
          500: '#00c7ff',
          600: '#00a3cc',
          700: '#007399',
          800: '#004466',
          900: '#001733'
        }
      },
      boxShadow: {
        'glow': '0 10px 40px rgba(59,130,246,0.12)'
      }
    }
  },
  plugins: [],
}
