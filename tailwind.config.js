/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#8B5CF6', // Example color, adjust as needed from your design
        'secondary-blue': '#4F46E5',
        'text-color': '#333333', // Adjust based on your design
        'light-gray': '#F9FAFB',
        'dark-gray': '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or whatever font you are using
      }
    },
  },
  plugins: [],
}