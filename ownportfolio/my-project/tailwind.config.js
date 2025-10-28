/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: { 
       brand: {
          500: "#00d4ff",   // cyan-like accent (close to Bhushan)
          400: "#00bcd4"
        },

      colors: {
        brand: { DEFAULT: "#7c3aed", dark: "#6d28d9" },
        bg: { DEFAULT: "#0f0f0f", alt: "#0b0b0b" },
        text: { DEFAULT: "#e6e6e6", sub: "#9ca3af" },
        border: "rgba(255,255,255,0.06)"
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      extend: {
  colors: {
    brand: { 500: '#00ffff' }
  }
},

      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        gradient: 'gradient 8s ease infinite'
      },
      backgroundSize: { '200%': '200% 200%' }
    }
  },
  plugins: [],
}
