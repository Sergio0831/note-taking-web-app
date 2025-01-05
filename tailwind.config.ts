/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        'preset-1': [
          'var(--font-xl)',
          {
            lineHeight: 'var(--line-height-base)',
            letterSpacing: 'var(--letter-spacing-tight)',
            fontWeight: 'var(--font-bold)',
          },
        ],
        'preset-2': [
          'var(--font-lg)',
          {
            lineHeight: 'var(--line-height-base)',
            letterSpacing: 'var(--letter-spacing-tight)',
            fontWeight: 'var(--font-bold)',
          },
        ],
        'preset-3': [
          'var(--font-md)',
          {
            lineHeight: 'var(--line-height-base)',
            letterSpacing: 'var(--letter-spacing-medium-tight)',
            fontWeight: 'var(--font-semibold)',
          },
        ],
        'preset-4': [
          'var(--font-sm)',
          {
            lineHeight: 'var(--line-height-base)',
            letterSpacing: 'var( --letter-spacing-slight-tight)',
            fontWeight: 'var(--font-medium)',
          },
        ],
        'preset-5': [
          'var(--font-sm)',
          {
            lineHeight: 'var(--line-height-base)',
            letterSpacing: 'var( --letter-spacing-slight-tight)',
            fontWeight: 'var(--font-regular)',
          },
        ],
        'preset-6': [
          'var(--font-xs)',
          {
            lineHeight: 'var(--line-height-base)',
            letterSpacing: 'var( --letter-spacing-slight-tight)',
            fontWeight: 'var(--font-regular)',
          },
        ],
      },
      colors: {
        blue: {
          500: 'var(--clr-blue-500)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: {
          DEFAULT: 'var(--border)',
          secondary: 'var(--border-secondary)',
        },
        input: 'var(--input)',
        ring: 'var(--ring)',
        authbg: 'var(--authbg)',
      },
      borderRadius: {
        'radius-4': 'calc(var(--radius) - 4px)',
        'radius-6': 'calc(var(--radius) - 2px)',
        'radius-8': 'var(--radius)',
        'radius-10': 'calc(var(--radius) + 2px)',
        'radius-12': 'calc(var(--radius) + 4px)',
        'radius-16': 'calc(var(--radius) * 2)',
        'radius-20': 'calc(var(--radius) + 12px)',
        'radius-24': 'calc(var(--radius) * 3)',
      },
      boxShadow: {
        sm: '0 4px 6px 0 rgba(240, 240, 240, 0.6)',
        lg: '0 0.5rem 0.75rem 0 rgba(240, 240, 240, 0.6)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
