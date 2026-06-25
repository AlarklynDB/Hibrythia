/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Hibrythian dark fantasy palette
        hib: {
          bg:       '#0e0d0b',
          surface:  '#161412',
          surface2: '#1c1a17',
          offset:   '#211f1b',
          border:   '#2e2b26',
          divider:  '#252220',
          // Ink gold accent
          gold:     '#c9a84c',
          'gold-hover': '#e0be6a',
          'gold-muted': '#7a6430',
          'gold-highlight': '#2a2416',
          // Text
          text:     '#d8d4cc',
          muted:    '#7a7670',
          faint:    '#4a4844',
          inverse:  '#0e0d0b',
          // Status
          error:    '#a13544',
          success:  '#437a22',
          warning:  '#c07a20',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body:    ['Raleway', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'sm':   ['clamp(0.875rem, 0.8rem  + 0.35vw, 1rem)',     { lineHeight: '1.5' }],
        'base': ['clamp(1rem,     0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.7' }],
        'lg':   ['clamp(1.125rem, 1rem    + 0.75vw, 1.5rem)',   { lineHeight: '1.4' }],
        'xl':   ['clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem)',  { lineHeight: '1.2' }],
        '2xl':  ['clamp(2rem,     1.2rem  + 2.5vw,  3.5rem)',   { lineHeight: '1.1' }],
        '3xl':  ['clamp(2.5rem,   1rem    + 4vw,    5rem)',     { lineHeight: '1.05' }],
      },
      spacing: {
        '1':  '0.25rem',
        '2':  '0.5rem',
        '3':  '0.75rem',
        '4':  '1rem',
        '5':  '1.25rem',
        '6':  '1.5rem',
        '8':  '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        sm:   '0.25rem',
        md:   '0.375rem',
        lg:   '0.5rem',
        xl:   '0.75rem',
        full: '9999px',
      },
      boxShadow: {
        sm:  '0 1px 2px rgba(0,0,0,0.4)',
        md:  '0 4px 12px rgba(0,0,0,0.5)',
        lg:  '0 12px 32px rgba(0,0,0,0.6)',
        gold: '0 0 0 1px rgba(201,168,76,0.15), 0 4px 16px rgba(201,168,76,0.06)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        interactive: '180ms',
      },
    },
  },
  plugins: [],
};
