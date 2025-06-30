/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,css}',
  ],
  safelist: [
    // Layout & Positioning
    'flex', 'items-center', 'justify-center', 'justify-between', 'relative', 'absolute', 'fixed', 'inset-0',
    'w-full', 'h-full', 'min-h-screen', 'max-w-4xl', 'mx-auto', 'px-4', 'py-6', 'space-y-4', 'overflow-hidden',
    // Typography
    'text-white', 'text-center', 'font-bold', 'font-inter', 'text-transparent', 'bg-clip-text',
    // Backgrounds & Colors
    'bg-black', 'bg-gradient-to-r', 'from-green-400', 'to-blue-500',
    // Effects & Animations
    'pointer-events-none', 'animate-pulse',
    // Responsive
    'md:px-8', 'md:py-8', 'md:space-y-8', 'md:h-32', 'md:w-32', 'md:block',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'ibm-plex-mono': ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}