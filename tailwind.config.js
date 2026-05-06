/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4361EE',
        secondary: '#3A0CA3',
        success: '#4ADE80',
        text: '#111827',
        muted: '#6B7280',
        background: '#F9FAFB'
      }
    },
  },
  plugins: [],
}
