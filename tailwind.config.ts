import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode palette
        'ink-900': '#0A0A0A',
        'ink-800': '#141414',
        'ink-700': '#1F1F1F',
        'ink-600': '#2A2A2A',
        'ink-500': '#444444',
        'ink-400': '#888888',
        'ink-300': '#B8B8B8',
        'ink-200': '#D4D4D4',
        'ink-100': '#E5E5E5',
        'ink-50':  '#F5F5F5',
        // Accents
        'mint':   '#64FFDA',        // dark mode accent (tech mint)
        'mint-dim': '#64FFDA15',
        'indigo': '#0066CC',        // light mode accent
        'indigo-dim': '#0066CC15',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sc)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        display: ['var(--font-inter)', 'var(--font-noto-sc)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':   ['clamp(2rem, 4vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2':   ['1.75rem', { lineHeight: '1.3' }],
        'h3':   ['1.25rem', { lineHeight: '1.4' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

export default config;
