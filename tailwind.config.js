/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1E40AF',
        secondary: '#F97316',
        'global-blue': '#0EA5E9',
        'sea-green': '#10B981',
        'dark-gray': '#1F2937',
        'mid-gray': '#6B7280',
        'light-gray': '#F3F4F6',
      },
    },
  },
  plugins: [],
}
