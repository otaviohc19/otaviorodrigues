/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F1419',
        surface: '#161B22',
        'surface-hover': '#1C2430',
        border: '#2A3441',
        text: '#E6EDF3',
        muted: '#8B98A5',
        accent: '#4C7EA8',
        'accent-bright': '#6FA3D6',
        status: '#F2A93B',
        ok: '#5FB878',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
