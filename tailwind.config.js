/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#081a31', 2: '#112c49', 3: '#163958' },
        teal: { DEFAULT: '#00baa9', dark: '#008c82', light: '#68e7d9' },
        mint: '#dcf6f1',
        ink: '#152b44',
        muted: '#597087',
        line: '#dce6ed',
        soft: '#f4f8fb',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 15px 38px rgba(10,41,64,.08)',
        lift: '0 24px 50px rgba(7,30,48,.16)',
        glow: '0 0 30px rgba(0,186,169,.35)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        wave: { '0%,100%': { transform: 'scaleY(.35)' }, '50%': { transform: 'scaleY(1)' } },
        scan: { '0%': { top: '8%' }, '100%': { top: '88%' } },
        fadeIn: { from: { opacity: 0, transform: 'translateY(14px)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        wave: 'wave 1.2s ease-in-out infinite',
        scan: 'scan 2.6s ease-in-out infinite alternate',
        fadeIn: 'fadeIn .8s ease both',
      },
    },
  },
  plugins: [],
}
