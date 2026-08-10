/** ClicDirecto Soluciones HV — Tailwind config
 *  Compila con: npx tailwindcss -i ./src/input.css -o ./css/styles.css --minify
 */
module.exports = {
  content: ["./index.html", "./demos/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          dark: '#3730a3',
          light: '#818cf8',
        },
        violet: {
          DEFAULT: '#7c3aed',
        },
        ink: {
          DEFAULT: '#0f172a',
          2: '#1e1b4b',
        },
        accent: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#6ee7b7',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(15, 23, 42, .08)',
        'soft-lg': '0 20px 45px rgba(15, 23, 42, .16)',
        glow: '0 10px 40px -5px rgba(16, 185, 129, .55)',
        'glow-lg': '0 20px 60px -10px rgba(16, 185, 129, .5)',
        'primary-glow': '0 15px 40px rgba(79, 70, 229, .25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(140deg, #0f172a 0%, #1e1b4b 55%, #3730a3 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulseGlow 2.5s infinite',
        blob: 'blob 12s infinite ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(16,185,129,.45)' },
          '50%': { boxShadow: '0 10px 30px rgba(16,185,129,.45), 0 0 0 14px rgba(16,185,129,.12)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-15px) scale(1.05)' },
          '66%': { transform: 'translate(-15px,15px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
