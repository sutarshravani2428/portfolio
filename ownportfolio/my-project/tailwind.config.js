/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          500: '#2f7df1',
          700: '#1956c8'
        },
        surface: {
          DEFAULT: '#0e1620',
          100: '#0b0f14'
        }
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(2,6,23,0.6)',
      },
      borderRadius: {
        'xl2': '14px'
      }
    },
  },
  plugins: [],
}
