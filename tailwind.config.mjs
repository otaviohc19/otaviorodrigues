/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#121820',
        'surface-hover': '#1A222C',
        border: '#232C37',
        text: '#F2F6F9',
        muted: '#7C8896',
        accent: '#4C7EA8',
        'accent-bright': '#7FB4E3',
        status: '#F2A93B',
        ok: '#5FB878',
        teal: '#3FA9A4',
        violet: '#9B8CD9',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
