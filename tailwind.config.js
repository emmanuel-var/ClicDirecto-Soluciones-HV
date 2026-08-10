/** ClicDirecto Soluciones HV — Tailwind config
 *  Tema oscuro inspirado en la plantilla "Clarity" (BootstrapMade)
 *  Compila con: npx tailwindcss -i ./src/input.css -o ./css/styles.css --minify
 */
module.exports = {
  content: ["./index.html", "./demos/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0918',
          soft: '#0d0c20',
        },
        surface: {
          DEFAULT: '#131226',
          2: '#191733',
          3: '#1f1d3d',
        },
        primary: {
          DEFAULT: '#6C5DD3',
          dark: '#5647B0',
          light: '#8D7EF0',
        },
        violet: {
          DEFAULT: '#8B5CF6',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          dark: '#F2545B',
        },
        ink: {
          DEFAULT: '#0a0918',
          2: '#141230',
        },
        muted: '#9B98B8',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, .25)',
        'soft-lg': '0 25px 50px -12px rgba(0, 0, 0, .45)',
        glow: '0 10px 40px -5px rgba(108, 93, 211, .55)',
        'glow-lg': '0 20px 60px -10px rgba(108, 93, 211, .55)',
        'primary-glow': '0 15px 45px rgba(108, 93, 211, .35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 25% 20%, rgba(108,93,211,.20), transparent 55%), radial-gradient(ellipse 60% 50% at 85% 75%, rgba(139,92,246,.15), transparent 55%), linear-gradient(180deg, #0a0918 0%, #0d0c20 100%)',
        'dots': "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'dots-sm': '22px 22px',
      },
      animation: {
        'pulse-slow': 'pulseGlow 2.5s infinite',
        'spin-slow': 'spin 18s linear infinite',
        'spin-slow-rev': 'spinReverse 22s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(108,93,211,.45)' },
          '50%': { boxShadow: '0 10px 30px rgba(108,93,211,.45), 0 0 0 14px rgba(108,93,211,.12)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
